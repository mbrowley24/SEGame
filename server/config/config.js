const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(()=> console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database " + DB_URI + DB_NAME, err));