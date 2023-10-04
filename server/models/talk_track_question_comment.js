const mongoose = require('mongoose');


const talk_track_question_commentSchema = new mongoose.Schema({

    public_id:{
        type: String,
        required: [true, "Public id is required"],
    },
    
    question: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Question is required"],
    },

    comment: {
        type: String,
        required: [true, "Comment is required"],
        minlength: [10, "Comment must be at least 2 characters long"],
        maxlength: [100 , "Comment must be less than 100 characters long"],
    },

}, {timestamps: true});

const Talk_Track_Question_Comment = mongoose.model('Talk_Track_Question_Comment', talk_track_question_commentSchema);
module.exports = Talk_Track_Question_Comment;