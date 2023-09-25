const Subject = require('../models/subject.model');
const Player = require('../models/player.model');
const {randomString} = require('../config/randomstring.config');
const jwt = require('jsonwebtoken');

module.exports = {

    createSubject: async (req, res) => {

        let public_id = randomString(30);
        const decodedJWT = jwt.decode(req.cookies.usertoken, process.env.JWT_SECRET);
        
        const username = decodedJWT.username;

        try{

            const player = await Player.findOne({'username': username})

            if (player === null){
                    
                    console.log("Player not found");
                    res.status(400).json({message: "Player not found"});
                    return;
            }

            try{

                const subjects = await Subject.find({ownerId: player._id});

                if(subjects.length > 20){
                        
                        console.log("Maximum number of subjects reached");
                        res.status(400).json({message: "Maximum number of subjects reached"});
                        return;

                }

                try{

                    let result = await Subject.findOne({name: {$regex: `^${req.body.payload}$`, $options: "i"}, ownerId: player._id });
        
                    if(result !== null) {
        
                        console.log("Subject already exists");
                        res.status(400).json({message: "Subject already exists"});
        
                    }else{
        
                        try{
        
                            let resultPublicId = await Subject.findOne({public_id: public_id});
        
                            while(resultPublicId !== null) {
        
                                public_id = randomString(30);
                                resultPublicId = await Subject.findOne({public_id: public_id});
                            }
        
        
                            try{
        
                                console.log(req.body.payload)
                                await Subject.create({
                                    name: req.body.payload,
                                    public_id: public_id,
                                    ownerId: player._id
                                })
        
                                console.log("Successfully created a new subject");
                                res.status(200).json({});
        
        
                            }catch(error){
        
                                console.log("duplicate");
                            }
        
                        }catch(err){
                            console.log(req.body)
                            console.log("Failed to create a new subject");
                            console.log(err);
                            res.status(400).json(err);
                        }
        
        
                    }
        
                }catch (err){
        
                    console.log("error generating public id");
                    console.log(err);
                    res.status(400).json(err);
                }
    
            }catch(err){
    
            }
            }catch(err){

            }

            
        
        
    },
    get_all_subjects: async (req, res) => {

        const decodedJWT = jwt.decode(req.cookies.usertoken, process.env.JWT_SECRET);
        const username = decodedJWT.username;

        try{

            const player = await Player.findOne({'username': username});

            if(player === null){

                console.log("Player not found");
                res.status(400).json({message: "Player not found"});
                return;
            }   

            try{

                let results  = await Subject.find({ownerId: player._id},'name public_id -_id', {} );

                console.log(results);
                if(results !== null){

                    const subjectResults = [...results]

                    let result = [];

                    for(let i = 0; i < subjectResults.length; i++){
                            result.push({
                                name: subjectResults[i].name,
                                id: subjectResults[i].public_id
                            })
                    }
                    console.log("Successfully retrieved all subjects");
                    res.status(200).json(result);

                }else{

                    console.log("No subjects found");
                    res.status(400).json({message: "No subjects found"});
                }

            }catch(err){

                console.log("Failed to retrieve all subjects");
                console.log(err);
                res.status(400).json(err);
            }

        }catch(err){

            console.log("Player not found");
            console.log(err);
            res.status(400).json(err);
        }
            
    },
    get_subjects_count: async (req, res) => {

        console.log("get subjects count");
        try{
            const decodedJWT = jwt.decode(req.cookies.usertoken, process.env.JWT_SECRET);
            const username = decodedJWT.username;
            const player = await Player.findOne({'username': username});

                
            try{    
                
                const subjects = await Subject.countDocuments({ownerId: player._id});
                
                if(subjects  > 19){

                    console.log("Player not found");
                    res.status(400).json({message: "Player not found"});
                    return;
                }
                console.log("Successfully retrieved all subjects");
                res.status(200).json(subjects);

            }catch(err){
                
                    const message = "Failed to count subjects";
                    console.log("Failed to count subjects");
                    console.log(err);
                    res.status(400).json({message: message});
            }

        }catch(err){

            console.log("Player not found");
            res.status(400).json({message: "Player not found"});
        }
    },
};