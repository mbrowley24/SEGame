const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const PlayerSchema = new mongoose.Schema({

    first_name: {type: String,
        required: [true, "First name is required"],
    },
    last_name: {type: String,
        required: [true, "Last name is required"],
    },
    username: {type: String,
        required: [true, "Username is required"],
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [16, "Username cannot be more than 16 characters long"],
        unique: [true, "Username already exists"],
    },
    email: {type: String,
        required: [true, "email required"],
        unique: [true, "email already exists"],
    },
    password: {type:String,
        required: [true, "password required"],
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [16, "Password cannot be more than 16 characters long"],
    },
    role: {
        type: String,
        default: "user",
    },
    change_password: {
        type: Boolean,
        default: true,
    }


},{timestamps: true});

PlayerSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

PlayerSchema.pre("validate", function(next) {
    console.log(this.password);
    console.log(this.confirmPassword)
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords didn't match.  Please type them again");
    }
    // if the passwords match, we can successfully continue on to the "normal" validate steps
    next();
})

// we must encrypt the password BEFORE we save to the database to make
//		sure that no one has access to the user's "real" password
PlayerSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            console.log("password: " + this.password);
            console.log("hashed: " + hashedPassword);
            this.password = hashedPassword;
            next();
        })
})

const player = mongoose.model('players', PlayerSchema);

module.exports = player;


