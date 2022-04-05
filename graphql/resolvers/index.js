const ingredientResolver = require("./ingredients");
const userResolver = require("./users");
const recipeResolver = require("./recipes.js")

module.exports = {
    Query: {
        ...ingredientResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...ingredientResolver.Mutation,
        ...recipeResolver.Mutation
    }
}