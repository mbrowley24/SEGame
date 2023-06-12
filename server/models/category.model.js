const mongoose = require('mongoose');
const question = require('./question.model');

const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Category name is required"],
    },
    200: {
        type: question,
        required: [true, "Question is required"],
    },
    400: {
        type: question,
        required: [true, "Question is required"],
    },
    600:{
        type: question,
        required: [true, "Question is required"],
    },
    800:{
        type: question,
        required: [true, "Question is required"],
    },
    1000:{
        type: question,
        required: [true, "Question is required"],
    }
});


const category = mongoose.model('categories', CategorySchema);
module.exports = category;