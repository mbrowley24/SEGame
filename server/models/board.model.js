const mongoose = require('mongoose');
const category = require('./category.model');

const BoardSchema = new mongoose.Schema({

    category1: category,
    category2: category,
    category3: category,
    category4: category,
    category5: category,
    category6: category,
    created_by: {
        name:{
            type: String,
            required: [true, 'Name is required'],
        },
        email:{
            type: String,
            required: [true, 'Email is required'],
        }
    },
    edited_by: {
        name:{
            type: String,
            required: [true, 'Name is required'],
        },
        email:{
            type: String,
            required: [true, 'Email is required'],
        }
    },
    name:{
        type: String,
        required: [true, 'Name is required'],
    }
});

const board = mongoose.model('boards', BoardSchema);
export default board;