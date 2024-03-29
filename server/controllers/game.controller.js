const Game = require('../models/game.model');
const jwt = require('jsonwebtoken');
const {randomString} = require('../config/randomstring.config');

module.exports = {

    new_game:  async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const game = new Game(req.body);
        const {username, first_name, last_name}= decodedJwt.payload;

        console.log(game);
        try{

            let public_id = randomString(30);
            let currentGame = await Game.findOne({public_id: public_id});

            while (currentGame){
                public_id = randomString(30);
                currentGame = await Game.findOne({public_id: public_id});
            }

            let join_code = randomString(6);

            let find_join_code = await Game.findOne({join_code: join_code});

            while (find_join_code){
                join_code = randomString(6);
                find_join_code = await Game.findOne({join_code: join_code});
            }

            try{

                console.log(game);

                game['created_by']['name'] = `${first_name} ${last_name}`;
                game['created_by']['username'] = username;
                game['updated_by']['name'] = `${first_name} ${last_name}`;
                game['updated_by']['username'] = username;
                game['join_code'] = join_code;

                game.public_id = public_id;

                await game.save();

                res.status(200).json('game saved');


            }catch (err){
                console.log("game not saved");
                console.log(err);
                res.status(400).json(err);

            }


        }catch (err){
            console.log("game not saved");
            res.status(400).json(err);
        }
    },
    get_dashboard: async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const {username}= decodedJwt.payload;

        try{

            const games = await Game.find({"created_by.username": username});

            const gameResults = [...games];
            const dashboard_data = [];

            for(let i =0; i < gameResults.length; i++){

                const gameData = {
                    id: gameResults[i].public_id,
                    name: gameResults[i].name,
                    created_by: gameResults[i].created_by.name
                }

                dashboard_data.push(gameData);
            }


            res.status(200).json(dashboard_data);

        }catch(err){

            console.log("games not found");
            res.status(400).json(err);
        }

    },

    get_game: async (req, res) => {

        const public_id = req.params.id;


        try{


            const result = await Game.findOne({public_id: public_id})

            const gameData = {
                    id: result.public_id,
                    joinId: result.join_code,
                    name: result.name,
                    room: result.join_code,
                    board:{
                        name: result.board.name,
                        category1: JSON.parse(JSON.stringify(result.board.category1)),
                        category2: JSON.parse(JSON.stringify(result.board.category2)),
                        category3: JSON.parse(JSON.stringify(result.board.category3)),
                        category4: JSON.parse(JSON.stringify(result.board.category4)),
                        category5: JSON.parse(JSON.stringify(result.board.category5)),
                        category6: JSON.parse(JSON.stringify(result.board.category6)),
                    },

            };

                console.log('game found');
                res.status(200).json(gameData);

        }catch(err){
        console.log(err);
        console.log("game not found");
            res.status(400).json(err);
        }


    },game_exists: async (req, res) => {

            const join_code = req.params.id;

            try{

                const result = await Game.findOne({'join_code': join_code})

                if(result){

                    res.status(200).json(true);

                }else{

                    res.status(200).json(false);
                }

            }catch(err){

                console.log("game not found");
                res.status(400).json(err);
            }
    },
};