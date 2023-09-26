const mongoose = require('mongoose');


const judge = {
    name:{
        type:String,
    },
    username:{
        type:String,
    },
}

const player = {
    name:{
        type:String,
    },
    username:{
        type:String,

    },
    score:{
        type:Number,
        default:0,
    },
}

const category={

    name:{
        type:String,
        required:[true, "Category name is required"],
    },
    200: {
        question:{
            type:String,
            required:[true, "Question is required"],
        },
        answer:{
            type:String,
            required:[true, "Answer is required"],
        },
        winner:{
            type:String,
        },
        attempted:{
            type:Boolean,
        },
        points:{
            type:Number,
            default:200,
        }
    },
    400: {
        question:{
            type:String,
            required:[true, "Question is required"],
        },
        answer:{
            type:String,
            required:[true, "Answer is required"],
        },
        winner:{
            type:String,
        },
        attempted:{
            type:Boolean,
        },
        points:{
            type:Number,
            default:400,
        }
    },
    600: {
        question:{
            type:String,
            required:[true, "Question is required"],
        },
        answer:{
            type:String,
            required:[true, "Answer is required"],
        },
        winner:{
            type:String,
        },
        attempted:{
            type:Boolean,
        },
        points:{
            type:Number,
            default:600,
        }
    },
    800: {
        question:{
            type:String,
            required:[true, "Question is required"],
        },
        answer:{
            type:String,
            required:[true, "Answer is required"],
        },
        winner:{
            type:String,
        },
        attempted:{
            type:Boolean,
        }
        ,
        points:{
            type:Number,
            default:800,
        }
    },
    1000: {
        question:{
            type:String,
            required:[true, "Question is required"],
        },
        answer:{
            type:String,
            required:[true, "Answer is required"],
        },
        winner:{
            type:String,
        },
        attempted:{
            type:Boolean,
        },
        points:{
            type:Number,
            default:1000,
        }
    }


}



const GameSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "Game name is required"],
    },
    public_id:{
        type:String,
        required:[true, "Public ID is required"],
    },
    join_code:{
        type:String,
        required:[true, "Join Code is required"],
        unique: true,
    } ,
    board:{
        name:{
            type:String,
            required:[true, "Board name is required"],
        },
        category1: category,
        category2: category,
        category3: category,
        category4: category,
        category5: category,
        category6: category,

    },
    created_by:{
        name:{
            type:String,
            required:[true, "Created By name is required"],
        },
        username:{
            type:String,
            required:[true, "Created By username is required"],
        }
    },
    updated_by:{
        name:{
            type:String,
            required:[true, "Created By name is required"],
        },
        username:{
            type:String,
            required:[true, "Created By username is required"],
        }
    }

}, {timestamps: true});

const game = mongoose.model('games', GameSchema);
module.exports = game;