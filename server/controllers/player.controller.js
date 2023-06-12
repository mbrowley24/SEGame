const Player = require("../models/player.model");
const randomString = require("../config/randomstring.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



module.exports = {
    register: async (req, res) => {

        const player = new Player(req.body);



        try{

            console.log(player)
           const newPlayer = await player.save()

            console.log("Successfully registered a new user");
            res.json({message: "success!", user: newPlayer});


        }catch(err){
            console.log("Registration failed", err);
            res.status(400).json(err);
        }


    },
    login: async (req, res) => {

        try{
            const playerRecord = await Player.findOne({username: req.body.username});

            console.log("Player record: ");
            console.log(playerRecord);

            if(playerRecord === null){

                console.log("Username not found");
                res.status(400).json({message: "Invalid login attempt"});

            }else{


                try{
                    const passwordIsValid = await bcrypt.compare(req.body.password, playerRecord.password);

                    if(passwordIsValid) {

                        console.log("Password is valid!");
                        res.cookie("usertoken",

                            jwt.sign({
                                    _id: playerRecord._id,
                                    username: playerRecord.username
                                },
                                process.env.JWT_SECRET),
                            {
                                httpOnly: true,
                                expires: new Date(Date.now() + 900000000)
                            })
                            .json({
                                message: "Successfully logged in!",
                                userLoggedIn: playerRecord.username
                            })

                    }else{
                        console.log("Password is invalid");
                        res.status(400).json({message: "Invalid login attempt"});
                    }

                }catch(err){
                    console.log("Password check failed", err);
                    res.status(400).json({message: "Invalid login attempt"});
                }

            }
        }catch (err){
            console.log("Password check failed", err);
            res.status(400).json({message: "Invalid login attempt"});
        }
    },
    logout: (req, res) => {
        console.log("Logged out");
        res.clearCookie("usertoken");
        res.json({message: "You have successfully logged out!"});
    },
}