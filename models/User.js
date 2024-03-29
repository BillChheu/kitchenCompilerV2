const {model, Schema} = require("mongoose");


const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    kitchen: [{type: String}],
    createdAt: String
});

module.exports = model('user', userSchema);