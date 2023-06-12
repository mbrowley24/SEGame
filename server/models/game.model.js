const mongoose = require('mongoose');
const category = require('./category.model');
const playerType = require('./playerType.model');
const GameSchema = new mongoose.Schema({

    category1:{
        type: category,
    },
    category2:{
        type: category,
    },
    category3:{
        type: category,
    },
    category4:{
        type: category,
    },
    category5:{
        type: category,
    },
    category6:{
        type: category,
    },
    winner:{
        type: playerType,

    }



}, {timestamps: true});

const game = mongoose.model('games', GameSchema);
export default game;