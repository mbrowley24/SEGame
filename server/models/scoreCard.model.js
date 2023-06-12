const mongoose = require('mongoose');
const playerType = require('./playerType.model');

const ScoreCardSchema = new mongoose.Schema({

    game:{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'game',
    },
   player:{
       type: playerType,
       required: [true, "Player is required"],
   },
    score:{
         type: Number,
         required: [true, "Score is required"],
            default: 0,

    },
    questionsAttempted:{
        type: Number,
        required: [true, "Questions Attempted is required"],
        default: 0,
    },
    questionsCorrect:{
        type: Number,
        required: [true, "Questions Correct is required"],
        default: 0,
    }





},{timestamps: true});