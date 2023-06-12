const mongoose = require('mongoose');


const SubjectSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: [2, "Subject name must be at least 2 characters long"],
        maxlength: [50, "Subject name must be less than 100 characters long"],
        required: [true, "Subject name is required"],
        unique: [true, "Subject name must be unique"],
    },
    public_id: {
        type: String,
        required: [true, "Public ID is required"],
    }

}, {timestamps: true});

const subjects = mongoose.model('subjects', SubjectSchema);
module.exports = subjects;