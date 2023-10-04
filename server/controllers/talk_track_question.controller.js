const Question = require("../models/talk_track_question.model");
const {randomString} = require("../config/randomstring.config");
const jwt = require('jsonwebtoken');
const Player = require("../models/player.model");



module.exports = {

    createQuestion: async (req, res) => {
        console.log("createQuestion");
        res.status(200).json({message: "createQuestion"});
    },
    // get all questions
    get_questions: async (req, res) => {
        console.log("getQuestions");
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        console.log(req.params);

        res.status(200).json({message: "getQuestions"});

    },
    // rate question 

    

    //delete question

    //edit question

}