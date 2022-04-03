const {gql} = require("apollo-server");

module.exports = gql`
    type Ingredient {
        id: ID!
        name: String!
        createdAt: String!
    }

    type User {
        id: ID!
        email: String!
        username: String!
        token: String!
        createdAt: String!
    }

    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }


    type Query {
        getIngredients: [Ingredient]
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!

        addIngredient(name: String!): Ingredient!
    }
 `;