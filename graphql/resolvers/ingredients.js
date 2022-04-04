const { UserInputError } = require("apollo-server");
const Ingredient = require("../../models/Ingredient")

module.exports = {
    Query: {
        async getIngredients() {
              try {
                  const ingredients = await Ingredient.find();
                  return ingredients;
              } catch(err) {
                  throw new Error(err);
              }
          }

      },
      Mutation: {
          async addIngredient(_,{name}) {

            const lookingForIngredient = Ingredient.find({name});
            if (lookingForIngredient) {
                throw new UserInputError("This ingredient already exists!")
            }

            const addedIngredient = new Ingredient({
                name,
                createdAt: new Date().toISOString()
            })
            
            const result = await addedIngredient.save();

            return result;
          }
      }
}