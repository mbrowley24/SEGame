const Question = require('../models/question.model');
const Subject = require('../models/subject.model');
const public_id = require('../config/randomstring.config');

module.exports = {

    get_subjects: async (req, res) => {

        const returnSubjects = [];

        try{

            const subjectsResult = await Subject.find({}, 'name public_id -_id', {sort: {name: 1}}).populate('public_id', 'name');


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

            console.log(returnSubjects);

            res.json({subjects: returnSubjects});

        }catch(err){

            console.log("Failed to get subjects", err);
            res.status(400).json(err);

        }

    },
    new_question: async (req, res) => {
        const question = new Question(req.body);

        question.public_id = public_id.randomString(30);

        try{

            let currentQuestion = await Question.findOne({public_id: question.public_id});

            while(currentQuestion !== null){

                question.public_id = public_id.randomString(30);

                currentQuestion = await Question.findOne({public_id: question.public_id});currentQuestion
            }

        }catch(err){
            console.log("Failed to create a new question", err);
            res.status(400).json(err);
        }

        try{
            const savedQuestion = await question.save();

            console.log("Successfully created a new question");
            res.json({message: "success!", question: savedQuestion});

        }catch(err){

            console.log("Failed to create a new question", err);
            res.status(400).json(err);
        }


    },
};