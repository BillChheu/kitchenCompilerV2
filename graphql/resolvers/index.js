const ingredientResolver = require("./ingredients");
const userResolver = require("./users");


module.exports = {
    Query: {
        ...ingredientResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...ingredientResolver.Mutation
    }
}