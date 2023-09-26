const mongoose = require('mongoose');


const TeamSchema = new mongoose.Schema({

    name:{
        type:String,
        maxlength: [100, "Team name must be less than 100 characters long"],
        minlength: [2, "Team name must be at least 2 characters long"],
        required:[true, "Team name is required"],
    },
    admins: {
        type: Array,
        required: [true, "Admins is required"],
    },
    officers:{
        type: Array,
        required: [true, "Officers is required"],
    }


},{timestamps: true});

const teams = mongoose.model('teams', TeamSchema);
module.exports = teams;