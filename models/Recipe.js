const {model, Schema} = require("mongoose");

const recipeSchema = new Schema({
    title: String,
    url: String,
    ingredients: [{type: String}],
    createdAt: String
})

module.exports = model("recipe", recipeSchema)