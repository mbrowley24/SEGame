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
        required:[true, "Player name is required"],
    },
    username:{
        type:String,
        required:[true, "Username is required"],
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
            type:Array,
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
            type:Array,
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
            type:Array,
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
            type:Array,
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
            type:Array,
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
    timer:{
        type:Number,
        required:[true, "Timer is required"],
        default: 30,
    },
    finalTimer:{
        type:Number,
        required:[true, "Final Timer is required"],
        default: 30,
    },
    public_id:{
        type:String,
        required:[true, "Public ID is required"],
    },
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
    judges:{
        1:judge,
        2:judge,
        3:judge,
    },
    players:{
        1:player,
        2:player,
        3:player,
        4:player,
        5:player,
        6:player,
        7:player,
        8:player,
        9:player,
        10:player,
        11:player,
        12:player,
        13:player,
        14:player,
        15:player,
        16:player,
        17:player,
        18:player,
        19:player,
        20:player,
    },
    createdBy:{
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