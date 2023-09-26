require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {Server} = require("socket.io");



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 'https://theaveragese.com'})) //'https://theaveragese.com' http://localhost:3000
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
        origin: "https://theaveragese.com" , //"https://theaveragese.com" "http://localhost:3000"
        methods: ["GET", "POST"],
    }
})


const jeopardyNameSpace = io.of(/^\/game-[a-zA-Z0-9]{5,35}$/);


jeopardyNameSpace.on("connection", (socket) => {


    socket.on("lobby_full", (data) =>{
        console.log("lobby_full event received on server side");

        socket.to(data).emit("lobby_full_update");
    })


    socket.on("show_answer", (data) =>{
        console.log("show_answer event received on server side");

        socket.to(data.room).emit("show_answer_update", {});
    })

    socket.on("hide_answer", (data) =>{
        console.log("hide_answer event received on server side");


        socket.to(data.room).emit("hide_answer_update", {});

    });


    socket.on("disconnect", () =>{

        console.log("disconnect event received on server side");
        console.log(socket.rooms);
    });

    socket.on("end_game", (data) =>{
        console.log("end-game event received on server side");

        console.log(data);
        socket.to(data.room).emit("exit_game_update");
        socket.leave(data.room);
    })

    socket.on("join_game", (data) =>{
        console.log("join game event received on server side");


        socket.join(data.room);

        // console.log(data);

        const player =  {...data.player, socketId: socket.id};
        socket.to(data.room).emit("lobby",  player);

    })

    socket.on("remove_player", (data) =>{
        console.log("remove_player event received on server side");

        socket.to(data.player.socketId).emit("leave_game", data);
    });

    socket.on("host_update", (data) =>{
        console.log("update_host event received on server side");

        socket.to(data.room).emit("player_update", {player: data.player, socket: socket.id} );

    });


    socket.on("player_in_lobby", (data) =>{
        console.log("player_in_lobby event received on server side");

        socket.to(data.room).emit("lobby", {player: data.player, socketId: socket.id});
    })

    socket.on("lobby_update", (data) =>{
        console.log("lobby_update event received on server side");

        socket.to(data.socketId).emit("update", data.game);
    });

    socket.on("add_player", (data) =>{
        console.log("add_player event received on server side");

        socket.to(data.room).emit("update", {players: data.players, game: data.game });
    })

    socket.on("game_host", (data) =>{
        console.log("game_host event received on server side");
        socket.join(data.room);
    })

    socket.on("update_players", (data) =>{
        console.log("update_players event received on server side");

        socket.to(data.room).emit("update", data.game);
    })

    socket.on("correct_answer", (data)=>{
        console.log("correct_answer event received on server side");

        socket.to(data.room).emit("correct_answer_update", data.question);
    })

    socket.on("incorrect_answer", (data)=>{
        console.log("incorrect_answer event received on server side");

        socket.to(data.room).emit("incorrect_answer_update", {question :data.question, player: data.player});
    })

    socket.on("not_attempted", (data) =>{

        socket.to(data.room).emit("not_attempted_update", data.question);
    });

    socket.on("attempted_question", (data) =>{
        console.log("attempted_question event received on server side");

        socket.to(data.room).emit("question", data.question);

    });

    socket.on("buzzer", (data) =>{
        console.log("buzzer event received on server side");
        socket.to(data.room).emit("buzzed", data.username);
    });

})


server.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});