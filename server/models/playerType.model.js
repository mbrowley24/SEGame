const mongoose = require('mongoose');

const PlayerTypeSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Name is required"],
    } ,
    playerType: {
        type: String,
        required: [true, "Player Type is required"],
    },

}, {timestamps: true});


const PlayerType = mongoose.model('PlayerType', PlayerTypeSchema);
export default PlayerType;