const {model, Schema} = require("mongoose");

const ingredientSchema = new Schema({
    name: String,
    createdAt: String
});

module.exports = model('ingredient', ingredientSchema);