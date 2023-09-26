const Question = require('../models/question.model');
const Subject = require('../models/subject.model');
const public_id = require('../config/randomstring.config');
const Player = require('../models/player.model');
const jwt = require('jsonwebtoken');

module.exports = {

    update_question: async (req, res) => {

            
            try{

                const question_updates = {
                    'question' : req.body.question,
                    'answer' : req.body.answer,
                }

                await Question.findOneAndUpdate({"public_id": req.params.id}, question_updates, {
                    new: true,
                    runValidators: true
                });

                res.status(200).json("Question updated");

            }catch(err){

                console.log("Failed to update question", err);
                res.status(400).json(err);

            }
    },

    get_question: async (req, res) => {

        try{

            const questionEntity = await Question.findOne({"public_id": req.params.id},
                'question answer public_id -_id').populate('answer', 'question');

            const questionAndAnswer = {
                question: questionEntity.question,
                answer: questionEntity.answer,
                id : questionEntity.public_id
            }

            console.log(questionAndAnswer);

            res.status(200).json(questionAndAnswer);

        }catch(err){

            console.log("Failed to get questions", err);
            res.status(400).json(err);

        }
    },

    get_subjects: async (req, res) => {

        const returnSubjects = [];

        const decodedJWT = jwt.decode(req.cookies.usertoken, process.env.JWT_SECRET);
        const username = decodedJWT.username;

        try{

            const player = await Player.findOne({username: username})
            
            if(player == null){
                    
                    console.log("Player not found");
                    res.status(400).json({message: "Player not found"});
                    return;
            }

            try{

                const subjectsResult = await Subject.find({ownerId: player._id}, 'name public_id -_id', {sort: {name: 1}}).populate('public_id', 'name');
    
    
                let subjects = [...subjectsResult];
    
                for(let i = 0; i < subjects.length; i++){
    
                    try{
    
                        const result = await Question.find({subject: subjects[i].name}, 'question answer difficulty public_id -_id', {sort: {difficulty: 1}}).populate('public_id', 'name');
    
                        const subject={
                            name: subjects[i].name,
                            public_id: subjects[i].public_id,
                            questions: result.length
                        }
    
    
                        returnSubjects.push(subject);
    
                    }catch (err){
                        console.log("Failed to get questions for subject: " + subjects[i].name, err);
                        res.status(400).json(err);
                    }
    
                }
    
                res.json({subjects: returnSubjects});
    
            }catch(err){
    
                console.log("Failed to get subjects", err);
                res.status(400).json(err);
    
            }

        }catch(err){

            console.log("Failed to get player", err);
            res.status(400).json(err);
        }

        

    },
    subject_questions: async (req, res) => {

        const decodedJWT = jwt.decode(req.cookies.usertoken, process.env.JWT_SECRET);
        const username = decodedJWT.username;

        try{

            const player = await Player.findOne({'username': username});

            

            if(player == null){
                    
                    console.log("Player not found");
                    res.status(400).json({message: "Player not found"});
                    return;
            }

            const questions = await Question.find({subject: req.params.subject, ownerId: player._id})
                    .skip(1)
                    .limit(10)


        }catch(err){

            console.log("Failed to get questions", err);
        }

    },
    new_question: async (req, res) => {

        const question = new Question(req.body);

        question.public_id = public_id.randomString(30);
        
        const decodedJWT = jwt.decode(req.cookies.usertoken, process.env.JWT_SECRET);

        const username = decodedJWT.username;
        
        if(username.length > 0){

            try{

                const player = await Player.findOne({'username': username});

                question.submitted_by = player.username;
                question.ownerId = player._id;

                try{

                    const subject = await Subject.findOne({public_id: req.params.id});

                    question.subject = subject.name;

                    try{

                        let currentQuestion = await Question.findOne({public_id: question.public_id});

                        while(currentQuestion !== null){

                            question.public_id = public_id.randomString(30);

                            currentQuestion = await Question.findOne({public_id: question.public_id});
                        }


                        try{
                            await question.save();

                            console.log("Successfully created a new question");
                            res.status(200).json({message: "Successfully created a new question"});


                        }catch(err){

                            console.log("Failed to create a new question", err);
                            res.status(400).json(err);

                        }

                    }catch(err){

                        console.log("Failed to create a new question", err);
                        res.status(400).json(err);
                    }


                }catch (err){

                    console.log("Failed to create a new question", err);
                    res.status(400).json(err);
                }

            }catch(err){

                console.log("Failed to create a new question", err);
                res.status(400).json(err);
            }

        }else{
            console.log("You must be logged in to create a question");
            res.status(400).json({message: "You must be logged in to create a question"});
        }

    },

    get_questions_by_subject: async (req, res) => {
        
        const decodedJWT = jwt.decode(req.cookies.usertoken, process.env.JWT_SECRET);
        const username = decodedJWT.username;
        
        try{

            const player = await Player.findOne({'username': username});

            if(player == null){
                        
                console.log("Player not found");
                res.status(400).json({message: "Player not found"});
                return;
            }

            try{

                const subject = await Subject.findOne({public_id: req.params.id, ownerId: player._id});
    
                try{
                    const questions =
                        await Question.find({subject: subject.name}, 'question answer public_id -_id');
    
                    const question_results = [...questions];
    
                    const question_obj_list = [];
    
                    for(let i = 0; i < question_results.length; i++){
    
                            const question_obj = {
                                question: question_results[i].question,
                                answer: question_results[i].answer,
                                id: question_results[i].public_id
                            }
    
                            question_obj_list.push(question_obj);
    
                    }
    
                    const questionData={
                        subject: {
                            name: subject.name,
                            id: subject.public_id
                        },
                        questions: question_obj_list
    
                    }
    
                    res.status(200).json(questionData);
    
                }catch(err){
    
                    console.log("Failed to get questions for subject: " + subject.name, err);
                    res.status(400).json(err);
    
                }
    
            }catch(err){
    
                    console.log("Failed to get subject with public_id: " + req.params.id, err);
                    res.status(400).json(err);
            }

        }catch(err){
            console.log("Failed to get player", err);
            res.status(400).json(err);
        }
        
    },
    delete_question: async (req, res) => {
        
        try{
            
                const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
                
                const username = decodedJwt.payload.username;

                const player = await Player.findOne({'username': username});


            try{

                const question = await Question.findOneAndDelete({public_id: req.params.id, ownerId: player._id});

                res.status(200).json({message: "Question deleted"});

            }catch(err){

                console.log("Failed to delete question", err);
                res.status(400).json(err);

            }

        }catch(err){

            console.log("Failed to find user", err);
            res.status(400).json(err);
        }

            
    },
};