const Category = require('../models/category.model');
const Player = require('../models/player.model');
const randomString = require("../config/randomstring.config");
const jwt = require('jsonwebtoken');

module.exports = {

    new_category: async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});

        const player_id = decodedJwt.payload._id;

        if(player_id.length > 0){

            try{

                const player = await Player.findOne({_id: player_id})

                console.log(req.body)


                category.created_by.username = player.username;
                category.created_by.name = `${player.first_name} ${player.last_name}`;


            }catch(err){
                console.log("Failed to find player", err);
                res.status(400).json(err);
            }

        }

    },
    my_categories: async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});

        const username = decodedJwt.payload.username;


        if(username.length > 0){

            try{

                const categories = await Category.find({"created_by.username": username}, "name completed",{});

                console.log("Found categories: ", categories);
                res.status(200).json(categories);

            }catch(err){
                console.log("Failed to find player", err);
                res.status(400).json(err);
            }


        }else{
            console.log("Player must be logged in required");
            res.status(400).json({message: "Player ID is required"});
        }
    }
};