const TalkTrackCategory = require('../models/talk_track_category.model.js');
const jwt = require('jsonwebtoken');
const {randomString} = require('../config/randomstring.config');


module.exports = {
    //get all categories
    all_categories: async (req, res) => {
        try{
            const categories = [];
            const categoriesQuery = await TalkTrackCategory.find({}).sort({name: 1});


            for(let i=0; i<categoriesQuery.length; i++){
                
                const category = {
                    id : categories[i].public_id,
                    name : categories[i].name,
                };

                categories.push(category);
            }

            res.status(200).json(categories);
        }catch (err){
            res.status(400).json(err);
        }
    },
};