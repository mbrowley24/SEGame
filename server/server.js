require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {Server} = require("socket.io");



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 'https://theaveragese.com'}));
app.use(cookieParser());

require('./config/config');


require('./routes/player.routes')(app);
require('./routes/question.routes')(app);
require('./routes/subject.routes')(app);
require('./routes/category.routes')(app);
require('./routes/board.routes')(app);
require('./routes/game.routes')(app);


const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "https://theaveragese.com",
        methods: ["GET", "POST"],
    }
})


const jeopardyNameSpace = io.of(/^\/jeopardy-[a-zA-Z0-9]{5,35}$/);
jeopardyNameSpace.on("connection", (socket) => {

    socket.on("join_game", (data) =>{

        console.log("join game event received on server side");
        console.log(data);
        socket.join(data.room);
        socket.to(data.room).emit("lobby", data.player);

    })

    socket.on("update_participants", (data) =>{
        console.log("update_participants event received on server side");

        console.log(data.game);
        console.log(data.game.players);

        socket.to(data.room).emit("host_update", data.game);
    });

    socket.on("add_player", (data) =>{

        console.log("add_player event received on server side");
        console.log(data);
        socket.to(data.room).emit("player", {players: data.players, game: data.game });
    })

    socket.on("join_game_host", (data) =>{
        console.log("join_game_host event received on server side");

        socket.join(data.room);
        socket.to(data.room).emit("host", data.game);
    })

    socket.on("correct_answer", (data)=>{

        console.log("correct_answer event received on server side");

        console.log(data);

        socket.to(data.room).emit("correct_answer_update", data.question);
    })

    socket.on("incorrect_answer", (data)=>{

        console.log("incorrect_answer event received on server side");
        console.log(data);

        socket.to(data.room).emit("incorrect_answer_update", {question :data.question, player: data.player});
    })

    socket.on("not_attempted", (data) =>{

        socket.to(data.room).emit("not_attempted_update", data.question);
    });

    socket.on("attempted_question", (data) =>{

        console.log("attempted_question event received on server side");
        console.log(data.room)
        socket.to(data.room).emit("question", data);

    });

    socket.on("buzzer", (data) =>{
        console.log("buzzer event received on server side");
        console.log(data);
        socket.to(data.room).emit("buzzed", data.username);
    });

     // console.log("server side socket id: ", socket.id);
})


server.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});