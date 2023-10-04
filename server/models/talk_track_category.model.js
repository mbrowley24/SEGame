const mongoose = require('mongoose');


const talk_track_categorySchema = new mongoose.Schema({

    public_id: {
        type: String,
        required: [true, "Public id is required"],
    },

    name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"],
        maxlength: [100, "Name must be less than 100 characters long"],
    },
    
}, {timestamps: true});

const Talk_Track_Category = mongoose.model('Talk_Track_Category', talk_track_categorySchema);
module.exports = Talk_Track_Category;