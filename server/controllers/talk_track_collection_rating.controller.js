const TalkTrackCollectionRating = require('../models/talk_track_collection_rating.model.js');
const User = require("../models/player.model");
const jwt = require('jsonwebtoken');

module.exports = {

    getMyRating : async (req, res) => {
    
        const {id} = req.params;
        
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const username = decodedJwt.payload.username;

        try{
            
            const user = User.findOne({username: username});
            
            if(!user){
                return res.status(400).json({message: "User not found"});
            }
            const rating = await TalkTrackCollectionRating.findOne({talk_track_collection: id, rated_by: user.id});

            const isRated = rating ? true : false;

            res.status(200).json({isRated: isRated});

        }catch(err){
            res.status(500).json(err);
        }

    },
};