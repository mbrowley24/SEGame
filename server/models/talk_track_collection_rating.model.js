const mongoose = require('mongoose');


const talk_track_ratingSchema = new mongoose.Schema({
    
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
});
const Talk_Track_Rating = mongoose.model('Talk_Track_Rating', talk_track_ratingSchema);
module.exports = Talk_Track_Rating;