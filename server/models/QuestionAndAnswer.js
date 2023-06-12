const mongoose = require('mongoose');
const player = require('./player.model');
const game = require('./game.model');
const question = require('./question.model');
const QuestionAnswerSchema = new mongoose.Schema({

    game:{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'game',
      required: [true, "Game is required"],
    },
    question: {
        type: question,
        required: [true, "Question is required"],
    },
    attemptedBy: {
        type: [player],
        required: [true, "Player is required"],
    },
    wonBy: {
        type: player,
    },
},{timestamps: true});