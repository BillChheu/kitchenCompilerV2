const ingredient = require("../../models/Ingredient")

module.exports = {
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