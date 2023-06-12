const mongoose = require('mongoose');


const RoleSchema = new mongoose.Schema({

    role:{
        type:String,
        required:[true, "Role is required"],
    }
},{timestamps: true});

const roles = mongoose.model('roles', RoleSchema);
module.exports = roles;