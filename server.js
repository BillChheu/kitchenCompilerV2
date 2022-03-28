const {ApolloServer} = require("apollo-server");
const gql = require("graphql-tag");
const { mongoose } = require("mongoose");

const {MONGODB} = require("./config.js");
const ingredient = require("./models/Ingredient");
const users = require("./models/Ingredient")

const typeDefs = gql`
    type Ingredient {
        id: ID!
        name: String!
        createdAt: String!
    }
    type Query {
        getIngredients: [Ingredient]
    }
 `;

const resolvers = {
    Query: {
      async getIngredients() {
            try {
                const ingredients = await ingredient.find();
                return ingredients;
            } catch(err) {
                throw new Error(err);
            }
        }
    }
}

let server = new ApolloServer({typeDefs, resolvers});


mongoose.connect(MONGODB, { useNewUrlParser: true})
    .then( () => {
        console
        return server.listen(5000);
    })
    .then( (res) => {
        console.log(`Server is running at ${res.url}`);
    });