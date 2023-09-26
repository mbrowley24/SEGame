const Player = require("../models/player.model");
const {randomString} = require("../config/randomstring.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sgMail = require('@sendgrid/mail');



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

    
            if(playerRecord === null){

                console.log("Username not found");
                res.status(400).json({message: "Invalid login attempt"});

            }else{


                try{
                    const passwordIsValid = await bcrypt.compare(req.body.password, playerRecord.password);

                    console.log("Password is valid: ", passwordIsValid);
                    console.log("Password: ", req.body.password);
                    if(passwordIsValid) {

                        console.log("Password is valid!");
                        console.log(playerRecord.change_password);
                        res.cookie("usertoken",

                            jwt.sign({
                                    username: playerRecord.username,
                                    email: playerRecord.email,
                                    first_name: playerRecord.first_name,
                                    last_name: playerRecord.last_name,
                                },
                                process.env.JWT_SECRET),
                            {
                                httpOnly: true,
                                expires: new Date(Date.now() + 900000000)
                            })
                            .json({
                                message: "Successfully logged in!",
                                userLoggedIn: {
                                    username: playerRecord.username,
                                    role: playerRecord.role,
                                    name : `${playerRecord.first_name} ${playerRecord.last_name}`,
                                    reset_password: playerRecord.change_password
                                }
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
    isAdmin : async (req, res) => {
        console.log("Checking if user is admin");
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        const username = decodedJWT.payload.username;
        try{

            const player = await Player.findOne({username: username});

            const isAdmin = player.role === "admin";
            console.log("Is admin: ", isAdmin);
            res.status(200).json(isAdmin);

        }catch(err){

            console.log("Error finding player", err);
            res.status(400).json(err);

        }
    },
    getUserList: async (req, res) => {

        const players = [];
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        const username = decodedJWT.payload.username;

        try{
            const player = await Player.findOne({username: username});

            if(player.role === "admin"){

                const playerList = await Player.find({});
                
                for(let i = 0; i < playerList.length; i++){
                    const player = {
                        username: playerList[i].username,
                        first_name: playerList[i].first_name,
                        last_name: playerList[i].last_name,
                        email: playerList[i].email,
                    }

                    players.push(player);

                }

                console.log("Player list: ", players);
                res.status(200).json(players);

            }else{
                res.status(400).json({message: "You are not authorized to view this page"});
            }

        }catch(err){
            console.log("Error finding players", err);
            res.status(400).json("error finding players");
        }
    },

    createUser: async (req, res) => {

        const {username, first_name, last_name, email} = req.body;
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        const adminUsername = decodedJWT.payload.username;

        try{
            const admin = await Player.findOne({username: adminUsername});

            if(admin.role === "admin"){

                const tempPassword = randomString(10);

                const newPlayer = new Player({
                    username: username,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: tempPassword,
                    confirmPassword: tempPassword,
                    role: "user"
                });

                const savedPlayer = await newPlayer.save();
                
                
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                
                const msg={
                    to: email,
                    from: 'no-rely@yeomanswork.net',
                    subject: 'Welcome to The Average SE!',
                    text: `Welcome to The Average SE ${first_name} ${last_name}!
                            Your temporary password is: ${newPlayer.password}`,
                    html: `<p>Welcome to The Average SE ${first_name} ${last_name}!
                    Your temporary password is: ${tempPassword} <a href="https://theaveragese.com/">theAverageSE</a></p>`
                }

                sgMail.send(msg).then(()=>{
                    console.log("Email sent");

                    const player = {
                        username: savedPlayer.username,
                        first_name: savedPlayer.first_name,
                        last_name: savedPlayer.last_name,
                        email: savedPlayer.email,
                    }

                    res.status(200).json(player);
                
                }).catch((err)=>{
                    console.log("Error sending email", err);
                })
                
            }else{
                res.status(400).json({message: "You are not authorized to view this page"});
            }

        }catch(err){
            console.log("Error creating player", err);
            res.status(400).json("Error creating player");
        }
    },

    emailExists: async (req, res) => {
        const {email} = req.body;
        try{

            const player = await Player.find({email: email});

            if(player.length === 0){

                res.status(200).json(true);
            
            }else{
            
                res.status(200).json(false);
            
            }

        }catch(err){

            console.log("Error finding player", err);
            res.status(400).json(err);
        }

    },

    usernameExists: async (req, res) => {
        const {username} = req.body;

        try{
                
                const player = await Player.find({username: username});
    
                if(player.length === 0){
    
                    res.status(200).json(true);
                
                }else{
                
                    res.status(200).json(false);
                
                }
        }catch(err){

            console.log("Error finding player", err);
            res.status(400).json(err);
        }
    },

    resetPassword : async (req, res) => {
            
            const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
            const username = decodedJWT.payload.username;
            const {password, confirmPassword} = req.body;

            if(username === undefined || username === null || username.trim() === ""){
                res.status(400).json({message: "Login required"});
            }

        
            try{
                
                if(password !== confirmPassword){
                    res.status(400).json({message: "Passwords don't match"});
                }

                const player = await Player.findOne({username: username});
                console.log("Resetting password");
            
                player.password = password;
                player.confirmPassword = confirmPassword;
                player.change_password = false;
                const savedPlayer = await player.save();

                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const msg={
                    to: savedPlayer.email,
                    from: 'no-rely@yeomanswork.net',
                    subject: 'The Average SE: password changed!',
                    text: `Your password has been changed ${player.first_name} ${player.last_name}!`,
                    html: `<p>If you didn't change your password please contact yeomanAdmin! 
                            <a href="mailto:yeoman@yeomanswork.net?subject=password change!">Email admin</a></p>`
                }
                sgMail.send(msg).then(()=>{
                    
                    if(savedPlayer!== null){
                        console.log("Password reset successful");
                        res.status(200).json("Password reset successful");
                    
                    }

                }).catch((err)=>{
                    console.log("Error sending email", err);
                    res.status(400).json(err);
                })
                
        
            }catch(err){
                console.log("Error resetting password", err);
                res.status(400).json(err);
            }
    },

    recoverPassword: async (req, res) => {
        console.log("Recovering password");
        const {email} = req.body;
        console.log(email);
        console.log(req.body);
        try{

            const player = await Player.findOne({email: email});
            console.log(player);
            if(player){
                console.log("Player found");
                const tempPassword = randomString(10);

                player.password = tempPassword;
                player.confirmPassword = tempPassword;
                const savedPlayer = await player.save();

                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const msg={
                    to: savedPlayer.email,
                    from: 'no-rely@yeomanswork.net',
                    subject: 'The Average SE: password changed!',
                    text: `Your password has been changed ${player.first_name} ${player.last_name}!`,
                    html: `<p>Your temp password is: ${tempPassword}</p>
                            <br/>
                            <p>If you didn't change your password please contact yeomanAdmin! 
                            <a href="mailto:yeoman@yeomanswork.net?subject=password change!">Email admin</a></p>`
                }

                sgMail.send(msg).then(()=>{
                    res.status(200).json("");
                }).catch((err)=>{
                    console.log("Error sending email", err);
                    res.status(400).json(err);
                });
            }else{
                res.status(200).json("");
            }
        }catch(err){
            
            res.status(400).json(err);
        }
    },
}