const Rating = require('../models/talk_track_question_rating.model');
const Question = require('../models/talk_track_question.model');
const User = require('../models/player.model');
const jwt = require('jsonwebtoken');

module.exports = {

    checkRateQuestion: async (req, res) => {
        const {id} = req.params;

        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const username = decodedJwt.payload.username.trim();
        
        if(!username){
            console.log("not logged in");
            res.status(400).json({message: "muyst be logged in"});
            return;
        }

        
        try{

            const user = await User.findOne({username: username});

            const question = await Question.findOne({public_id: id});
            
            const rated = await Rating.findOne({question: question._id, rated_by: user._id});
            
            const isRated = rated ? true : false;

            res.status(200).json({isRated: isRated});
        
        }catch(err){
            
            res.status(400).json({message: "user not logged in"});
            return;
        }
        
    },   
    
    rateQuestion: async (req, res)=> {
        const {rating} = req.body;
        const {id} = req.params;
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const username = decodedJwt.payload.username.trim();

        try{
            
            const question = await Question.findOne({public_id: id});

            const user = await User.findOne({username: username});

            const newRating = new Rating({
                rating: rating,
                question: question._id,
                rated_by: user._id
            });

            const newRatingResult = await newRating.save();
            
            const getRating = await Rating.find({question: question._id});

            let totalRating = 0;
            for(let i = 0; i < getRating.length; i++){
                console.log(getRating[i].rating);
                totalRating += getRating[i].rating;
            }

            const averageRating = totalRating/getRating.length;
            console.log(averageRating);
            console.log('average');

            question.$set({rating: averageRating});
            question.save();

            res.status(200).json({});

        }catch(err){
            console.log("error");
            console.log(err);
            res.status(400).json({message: "issue rating question"});
        }
        
    }
};
