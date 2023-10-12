const Question = require("../models/talk_track_question.model");
const Category = require("../models/talk_track_category.model");
const {randomString} = require("../config/randomstring.config");
const jwt = require('jsonwebtoken');
const Player = require("../models/player.model");


const questionValidation = (question) => {
    const pattern = /^[a-zA-Z0-9\s/.+-//&?*%()@#]{10,150}$/

    return pattern.test(question);
};


module.exports = {

    createQuestion: async (req, res) => {
        
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});

        const username = decodedJwt.payload.username;
        
        if(!questionValidation(req.body.question)){
            res.status(400).json({message: "question not valid"});
            return;
        }

        try{

            const category = await Category.findOne({public_id: req.body.category}); 

                if(!category){
                    res.status(400).json({message: "category not found"});
                    return;
                }

            try{
                console.log("createQuestion");
                console.log(username);
                const newQuestion = new Question({
                    question: req.body.question,
                    created_by: username,
                    category: category._id,
                    public_id: randomString(30),
                    rating: 0,

                });
                
                await newQuestion.save()
                
                console.log("after question save");
                res.status(200).json({message: "createQuestion"});

            }catch(err){
                console.log(err);
                res.status(400).json({message: "question not "});
                return;
            }

        }catch(err){

            console.log(err);
            res.status(400).json({message: "error creating message"});
        }
        
    },
    // get all questions
    get_questions: async (req, res) => {
        
        console.log("getQuestions");
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        
        const page = req.params.page?req.params.page:0;
        const limit = req.params.limit?req.params.limit:10;
        const username = decodedJwt.payload.username;

        const responseData = {
            questionResponses: [],
            page: page,
            totalPages: 0,
            firstPage: true,
            lastPage: false,
            totalQuestions: 0,
        };
        if(username===undefined || username===null){
            res.status(400).json({message: "must be logged in"});
            return;
        }

        try{

            const questionCount = await Question.countDocuments({});
            const questions = await Question.find({}).skip((page)*limit).limit(limit).exec();

            for(let i = 0; i < questions.length; i++){
                
                const category = await Category.findById(questions[i].category);
                
                const questionResponse = {
                    question: questions[i].question,
                    category: category.name,
                    rating: questions[i].rating,
                    created_by: questions[i].created_by,
                    id: questions[i].public_id,

                }

                responseData.questionResponses.push(questionResponse);

            }
            
            
            responseData.firstPage = Number(page)=== 0?true:false;
            responseData.lastPage = page===(Math.ceil(questionCount/Number(limit))-1)?true:false;
            responseData.page = Number(page);
            responseData.totalQuestions = questionCount;
            // console.log(Math.ceil(questionCount/Number(limit)));
            responseData.totalPages = Math.ceil(questionCount/limit);

            res.status(200).json(responseData);

        }catch(err){

            console.log(err);
            res.status(400).json({message: "error getting questions"});
            return;
        }


    },
    //talk track questions
    getTalkTrackQuestions : async (req, res) => {
        const {page, limit} = req.params;
        const skip = (page + 1) * limit;
        
        try{

            const responseData = {
                questionResponses: [],
                page: page,
                totalPages: 0,
                firstPage: true,
                lastPage: false,
                totalQuestions: 0,
            }
            

            const questionCount = await Question.countDocuments({});
            
            responseData.totalQuestions = questionCount;
            responseData.totalPages = Math.ceil(questionCount/Number(limit));
            responseData.firstPage = Number(page)=== 0? true:false;
            responseData.lastPage = page === (Math.ceil(questionCount/Number(limit))-1)?true:false;
            responseData.page = Number(page);

            const questions = await Question.find({}).sort({rating: 1}).skip(skip).limit(limit).exec();
            
            for(let i = 0; i < questions.length; i++){
                
                const questionResponse = {
                    question: questions[i].question,
                    rating: questions[i].rating,
                    id: questions[i].public_id,
                }

                responseData.questionResponses.push(questionResponse);
            }

            console.log(responseData);
            res.status(200).json(responseData);

        }catch(err){

            console.log('error getting talk track questions');
            console.log(err);
            res.status(400).json({message: "error getting questions"});

        }
        

    },
    // rate question 

    

    //delete question

    //edit question

}