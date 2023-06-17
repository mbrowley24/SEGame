const Game = require('../models/game.model');
const Player = require('../models/player.model');
const jwt = require('jsonwebtoken');
const {randomString} = require('../config/randomString.config');

module.exports = {

    new_game:  async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const game = new Game(req.body);
        const {username}= decodedJwt.payload;
        try{

            const user = await Player.findOne({username: username});

            try{

                let public_id = randomString(30);
                let currentGame = await Game.findOne({public_id: public_id});

                while (currentGame){
                    public_id = randomString(30);
                    currentGame = await Game.findOne({public_id: public_id});
                }

                try{
                    game.created_by.name = `${user.first_name} ${user.last_name}`;
                    game.created_by.username = user.username;

                    game.public_id = public_id;

                    await game.save();


                }catch (err){
                    console.log("game not saved");
                    res.status(400).json(err);

                }




            }catch (err){
                res.status(400).json(err);
            }

        }catch(err){
            console.log("person not found");
            res.status(400).json(err);
        }
    },
    get_dashboard: async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const {username}= decodedJwt.payload;

        try{

            const player = await Player.findOne({username: username});

            try{

                const games = await Game.find({"created_by.username": player.username});

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

        }catch(err){

            console.log("person not found");
            res.status(400).json(err);
        }

    },

};