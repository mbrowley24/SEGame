const TalkTrackCollection = require('../models/talk_track_collection.model');
const Question = require('../models/question.model');
const Category = require('../models/category.model');
const {randomString} = require('../config/randomstring.config')
const User = require("../models/player.model");


module.exports = {

    getAll : async  (req, res) => {
        const {limit, page} = req.params;
        const skip = (page + 1) * limit;

        try{

            const talkTrackCount = await TalkTrackCollection.find({}).countDocuments();
            const talkTrackCollections = await TalkTrackCollection.find({}).skip(skip).limit(limit).sort({name: 1});
            
            const responseData = {
                page: Number(page),
                totalPages: Math.ceil(talkTrackCount/limit),
                firstPage: page === 0? true:false,
                lastPage: page === (Math.ceil(talkTrackCount/limit))? true:false,
                totalQuestions: talkTrackCount,
                questions: [],
            };
            
            for(let i = 0; i < talkTrackCollections.length; i++){
                
                console.log(talkTrackCollections[i]);

                const talkTrackQuestion = {...talkTrackCollections[i]};
                
                const question = {
                    id : talkTrackQuestion.public_id,
                    name: talkTrackQuestion.name,
                    questions: talkTrackQuestion.questions.length(),
                    created_by: talkTrackQuestion.created_by,
                }

                responseData.questions.push(question);
                
            }

            // for(let i = 0; i < talkTrackCollections.length; i++){
                
            //     for(let j = 0; j < talkTrackCollections[i].questions.length; j++){

            //         const question = await Question.findById(talkTrackCollections[i].questions[j].question);
            //         const category = await Category.findById(question.category);

            //         const talkTrackQuestion = {

            //             position: talkTrackCollections[i].questions[j].position,
            //             question: {    
            //                 question: question.question,
            //                 created_by: question.created_by,
            //                 id: question.public_id,
            //                 category: category.name,
            //                 rating: question.rating,
            //             } ,
            //         };

            //         talkTrackResponses.push(talkTrackQuestion);
            //     }
            // }

            

            res.status(200).json(responseData);

        }catch(err){

            console.log(err);
            return res.status(400).json({message: err});

        }
        
    },

    createTalkTrack : async (req, res) => {
        
        const {name, questions} = req.params;
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const username = decodedJwt.payload.username;

        const talkTrackQuestions = [];

        for(let i = 0; i < questions.length; i++){

            const question = await Question.findById(questions[i]);
            
            if(!question){
                return res.status(400).json({message: "Question not found"});
            }

            const talkTrackQuestion = {
                position: i,
                question: question._id,
            }

            talkTrackQuestions.push(talkTrackQuestion);
        }

        let public_id = randomString(30);
        let public_id_exists = await TalkTrackCollection.findOne({public_id: public_id}).exists();

        while(public_id_exists){
            public_id = randomString(30);
            public_id_exists = await TalkTrackCollection.findOne({public_id: public_id}).exists();
        }

        const talkTrackCollection = new TalkTrackCollection({
            public_id: public_id,
            questions: talkTrackQuestions,
            name: name,
            created_by: username,
        });






    },
};