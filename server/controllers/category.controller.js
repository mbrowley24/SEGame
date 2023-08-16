const Category = require('../models/category.model');
const Player = require('../models/player.model');
const {randomString} = require("../config/randomstring.config");
const jwt = require('jsonwebtoken');

module.exports = {

    new_category: async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});

        const username = decodedJwt.payload.username;

        const category = new Category(req.body);

        category.public_id = randomString(30);

        // console.log("Player ID: ", player_id);
        // console.log("Request body: ", req.body);

        try{

            let count = Category.find().count({public_id: category.public_id});

            while(count > 0){

                category.public_id = randomString(30);
                count = Category.find().count({public_id: category.public_id});
            }

            if(username.length > 0){

                try{

                    const player = await Player.findOne({"username": username})


                    category.created_by.username = player.username;
                    category.created_by.name = `${player.first_name} ${player.last_name}`;
                    category.edited_by.username = player.username;
                    category.edited_by.name = `${player.first_name} ${player.last_name}`;

                    category.save()

                    res.status(200).json({message: "Successfully created a new category"});

                }catch(err){
                    console.log("Failed to find player", err);
                    res.status(400).json(err);
                }

            }


        }catch(err){

            console.log("Failed to check for public_id", err);
            res.status(400).json(err);
        }




    },
    my_categories: async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});

        const username = decodedJwt.payload.username;


        if(username.length > 0){

            try{

                const categories = await Category.find({"created_by.username": username}, "name created_by public_id",{});

                const categoryResults = [...categories];
                const results = [];

                for(let i = 0; i < categoryResults.length; i++){

                    console.log("Category: ", categoryResults[i]);
                    const categoryObj = {
                        name: categoryResults[i].name,
                        created_by: categoryResults[i].created_by.name,
                        id: categoryResults[i].public_id,
                    }

                    results.push(categoryObj);
                }

                // console.log("Found categories: ", results);
                res.status(200).json(results);

            }catch(err){
                console.log("Failed to find player", err);
                res.status(400).json(err);
            }


        }else{
            console.log("Player must be logged in required");
            res.status(400).json({message: "Player ID is required"});
        }
    },
    get_category: async (req, res) => {

            const id = req.params.id;

            try{

                const category = await Category.findOne({public_id: id},"-_id",{});

                if(category){

                    const categoryObj = {
                        name: category.name,
                        id: category.public_id,
                        200: category[200],
                        400: category[400],
                        600: category[600],
                        800: category[800],
                        1000: category[1000],
                    }

                    //console.log("Found category: ", categoryObj);
                    res.status(200).json(categoryObj);

                }else{
                    console.log("Failed to find category");
                    res.status(400).json({message: "Failed to find category"});
                }

            }catch(err){
                console.log("Failed to find category", err);
                res.status(400).json(err);
            }
    },
    update_category: async (req, res) => {

        console.log("Request body: ", req.body);
        const id = req.params.id;

        try{
                console.log("Request body: ", req.body);
                const category = await Category.findOne({public_id: id});

                if(category){

                    category.name = req.body.name;
                    category[200] = req.body[200];
                    category[400] = req.body[400];
                    category[600] = req.body[600];
                    category[800] = req.body[800];
                    category[1000] = req.body[1000];

                    category.save();

                    console.log("Updated category: ", category);
                    res.status(200).json({message: "Category updated"});

                }else{
                    console.log("Failed to find category");
                    res.status(400).json({message: "Failed to find category"});
                }

        }catch (err){
            console.log("Failed to update category", err);
            res.status(400).json(err);
        }
    },
    my_category_list: async (req, res) => {

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});

        const username = decodedJwt.payload.username;

        if(username.length > 0){

            try{

                const categories = await Category.find({"created_by.username": username});

                const categoryResults = [...categories];
                const results = [];

                for(let i = 0; i < categoryResults.length; i++){

                    console.log("Category: ", categoryResults[i]);

                    const categoryObj = {
                        name: categoryResults[i].name,
                        200: categoryResults[i][200],
                        400: categoryResults[i][400],
                        600: categoryResults[i][600],
                        800: categoryResults[i][800],
                        1000: categoryResults[i][1000],
                        id: categoryResults[i].public_id,
                    }

                    results.push(categoryObj);
                }

                // console.log("Found categories: ", results);
                res.status(200).json(results);

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