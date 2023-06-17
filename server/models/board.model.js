const mongoose = require('mongoose');


const category={
    name: {
        type: String,
        required: [true, "Category name is required"],
    },
    200: {
        question:{
            type: String,
        },
        answer: {
            type: String,
        }
    },
    400: {
        question:{
            type: String,
        },
        answer: {
            type: String,
        }
    },
    600:{
        question:{
            type: String,
        },
        answer: {
            type: String,
        }

    },
    800:{
        question:{
            type: String,
        },
        answer: {
            type: String,
        }
    },
    1000:{
        question:{
            type: String,
        },
        answer: {
            type: String,
        }
    }
}


const BoardSchema = new mongoose.Schema({

    category1: category,
    category2: category,
    category3: category,
    category4: category,
    category5: category,
    category6: category,
    public_id:{
        type: String,
        required: [true, "Category public id is required"],
    },
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
module.exports = board;