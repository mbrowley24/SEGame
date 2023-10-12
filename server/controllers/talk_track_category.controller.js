const TalkTrackCategory = require('../models/talk_track_category.model.js');
const jwt = require('jsonwebtoken');
const {randomString} = require('../config/randomstring.config');


module.exports = {
    //get all categories
    all_categories: async (req, res) => {
        console.log("all categories");

        try{
            
            const categories = [];
            const categoriesQuery = await TalkTrackCategory.find({}).sort({name: 1});

            for(let i = 0; i < categoriesQuery.length; i++){
                
                console.log(categoriesQuery[i]);
                console.log(categoriesQuery[i].name);
                const category = {
                    id : categoriesQuery[i].public_id,
                    name : categoriesQuery[i].name,
                };

                categories.push(category);
            }
            console.log(categories);
            res.status(200).json(categories);

        }catch (err){
            console.log(err);
            res.status(400).json(err);
        }
    },
};