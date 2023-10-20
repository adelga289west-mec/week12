const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    username: String, 
    email: {type: String, unique: true},
    password: String,
    confirmpassword: String,
}, {
    collection: 'user', 
});

module.exports = mongoose.model('user', usersSchema);
