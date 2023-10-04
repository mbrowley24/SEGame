const mongoose = require('mongoose');


const talk_track_question_ratingSchema = new mongoose.Schema({
    
        public_id:{
            type: String,
            required: [true, "Public id is required"],
        },
        
        question: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Question is required"],
        },
    
        rating: {
            type: Number,
            min : 0,
            max : 5,
            required: [true, "Rating is required"],
        },
    
        rated_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Rated by is required"],
        },
    
}, {timestamps: true});

export const Talk_Track_Question_Rating = mongoose.model('Talk_Track_Question_Rating', talk_track_question_ratingSchema);
module.exports = Talk_Track_Question_Rating;