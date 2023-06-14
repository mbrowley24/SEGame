const mongoose = require('mongoose');



const CategorySchema = new mongoose.Schema({

    public_id: {
        type: String,
        required: [true, "Public ID is required"],
    },
    name: {
        type: String,
        required: [true, "Category name is required"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    created_by:{
            username:{
                type: String,
                required: [true, "Username is required"],
            },
            name:{
                type: String,
                required: [true, "Name is required"],
            }
    },
    edited_by:{
            username:{
                type: String,
                required: [true, "Username is required"],
            },
            name:{
                type: String,
                required: [true, "Name is required"],
            }
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
});


const category = mongoose.model('categories', CategorySchema);
module.exports = category;