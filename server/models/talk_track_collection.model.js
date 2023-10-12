const mongoose = require('mongoose');

const talk_track = {
    position: {
        type: Number,
        required: [true, "Position is required"],
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Question is required"],
    },
}

const talk_track_collectionSchema = new mongoose.Schema({

    public_id: {
        type: String,
        required: [true, "Public id is required"],
    },
    
    questions:{
        type: [talk_track],
        required: [true, "Questions are required"],
    },

    rating: {
        type: Number,
        min : 0,
        max : 5,
        required: [true, "Rating is required"],
    },
    
    name:{
        type: String,
        required: [true, "Name is required"],
    },

    created_by: {
        type: String,
        required: [true, "Created by is required"],
    },

}, { timestamps: true});
const Talk_Track_Collection = mongoose.model('Talk_Track_Collection', talk_track_collectionSchema);
module.exports = Talk_Track_Collection;