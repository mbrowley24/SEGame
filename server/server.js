require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 8000;
const socketIo = require('socket.io');






app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());

require('./config/config');

require('./routes/player.routes')(app);
require('./routes/question.routes')(app);
require('./routes/subject.routes')(app);
require('./routes/category.routes')(app);
require('./routes/board.routes')(app);
require('./routes/game.routes')(app);

const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});


const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
        allowedHeaders: ['*']
    }
})


io.on("connection", socket => {
    console.log("server side socket id: ", socket.id);
})