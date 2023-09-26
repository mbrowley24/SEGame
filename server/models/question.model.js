const mongoose = require('mongoose');
const player = require('./player.model');

const QuestionSchema = new mongoose.Schema({

    subject:{type: String,
    required: [true, "Subject is required"],
    minlength: [2, "Subject must be at least 2 characters long"],
    maxlength: [100, "Subject must be less than 100 characters long"],},

    question: {type: String,
    required: [true, "Question is required"],
    minlength: [2, "Question must be at least 10 characters long"],
    maxlength: [150, "Question must be less than 100 characters long"],},

    answer: {type: String,
    required: [true, "Answer is required"],
    minlength: [2, "Answer must be at least 10 characters long"],
    maxlength: [150, "Answer must be less than 100 characters long"],},


    submitted_by: {
    type: String,
    required: [true, "Submitted by is required"],
    },

    ownerId:{
        type: String,
        required: [true, "Owner ID is required"],
    },
    public_id: {
        type: String,
        required: [true, "Public ID is required"],
        },


},{timestamps: true});

const questions = mongoose.model('questions', QuestionSchema);
module.exports = questions;