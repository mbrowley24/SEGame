const Board = require('../models/board.model');
const Player = require('../models/player.model');
const jwt = require('jsonwebtoken');
const {randomString} = require("../config/randomstring.config");

module.exports = {

    new_board: async (req, res) => {


            try{

                const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
                const {username} = decodedJWT.payload;

                const player = await Player.findOne({username: username});


                try{

                    let public_id = randomString(30);

                    let boardCheck = await Board.findOne({public_id: public_id});

                    while(boardCheck){

                        public_id = randomString(30);
                        boardCheck = await Board.findOne({public_id: public_id});
                    }


                    try{

                        const board = new Board(req.body);

                        board.public_id = public_id;

                        board.created_by = {
                            name : `${player.first_name} ${player.last_name}`,
                            email: player.email
                        };
                        board.edited_by = {
                            name : `${player.first_name} ${player.last_name}`,
                            email: player.email
                        };

                        await board.save()


                        res.status(200).json("Board saved");

                    }catch(err){

                        console.log("Failed to save board", err);
                        res.status(400).json(err);
                    }
                }catch(err){

                    console.log("Failed to find board", err);
                }



            }catch(err){

                console.log("Failed to generate public_id", err);
                res.status(400).json(err);
            }

    },
    my_boards: async (req, res) => {

            try{

                const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
                const {username} = decodedJWT.payload;

                const player = await Player.findOne({username: username});

                try{

                    const boards = await Board.find({"created_by.email": player.email});

                    const board_results = [...boards];
                    const board_to_dashboards = [];

                    for(let i = 0; i < board_results.length; i++){

                        const board={
                            id: board_results[i].public_id,
                            name: board_results[i].name,
                            created_by: board_results[i].created_by.name,
                        };

                        board_to_dashboards.push(board);

                    }

                    res.status(200).json(board_to_dashboards);

                }catch(err){

                    console.log("Failed to find boards", err);
                    res.status(400).json(err);
                }

            }catch(err){

                console.log("Failed to find player", err);
                res.status(400).json(err);
            }

    },
    boards_for_game_data: async (req, res) => {

        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        const {email} = decodedJWT.payload;

        try{

            const boards = await Board.find({"created_by.email": email});

            const board_results = [...boards];
            const board_to_form = [];

            for(let i = 0; i < board_results.length; i++){

                const board={
                    id: board_results[i].public_id,
                    name: board_results[i].name,
                    category1: board_results[i].category1,
                    category2: board_results[i].category2,
                    category3: board_results[i].category3,
                    category4: board_results[i].category4,
                    category5: board_results[i].category5,
                    category6: board_results[i].category6,
                }

                board_to_form.push(board);
            }
            console.log("recovered boards");
            res.status(200).json(board_to_form);
        }catch(err){

            console.log("Failed to find user", err);
            res.status(400).json(err);
        }
    },
};