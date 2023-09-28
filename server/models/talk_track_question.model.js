const mongoose = require('mongoose');


const talk_track_questionSchema = new mongoose.Schema({

    public_id: {
        type: String,
        required: [true, "Public id is required"],
    },

    question: {
        type: String,
        required: [true, "Question is required"],
        minlength: [10, "Question must be at least 2 characters long"],
        maxlength: [150, "Question must be less than 100 characters long"],
        required: [true, "Question is required"],
    },

    rating: {
        type: Number,
        min : 0,
        max : 5,
        required: [true, "Rating is required"],
    },

    createc_by: {
        type: String,
        required: [true, "Created by is required"],
    },
    
    type: {
        type: String,
        required: [true, "Type is required"],
    },

}, {timestamps: true});
const Talk_Track_Question = mongoose.model('Talk_Track_Question', talk_track_questionSchema);
module.exports = Talk_Track_Question;