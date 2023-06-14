const Subject = require('../models/subject.model');
const {randomString} = require('../config/randomstring.config');

module.exports = {

    createSubject: async (req, res) => {



        let public_id = randomString(30);

        try{

            let result = await Subject.findOne({name: {$regex: `^${req.body.payload}$`, $options: "i"}});

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
                            public_id: public_id
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
        
    },
    get_all_subjects: async (req, res) => {

            try{

                let results  = await Subject.find({},'name public_id -_id', {} );

                if(results !== null){

                    const subjectResults = [...results]

                    let result = [];

                    for(let i = 0; i < subjectResults.length; i++){
                            result.push({
                                name: subjectResults[i].name,
                                id: subjectResults[i].public_id
                            })
                    }

                    console.log(result);
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
    },
};