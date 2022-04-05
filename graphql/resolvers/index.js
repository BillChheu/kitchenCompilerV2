const ingredientResolver = require("./ingredients");
const userResolver = require("./users");
const recipeResolver = require("./recipe")

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