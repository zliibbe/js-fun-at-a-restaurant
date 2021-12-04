function nameMenuItem(name) {
      menuItemName = `Delicious ${name}`
      return menuItemName;
}

//calls function and returns "Delcious French Toast"
nameMenuItem("French Toast");

//returns menuItem object
function createMenuItem(name, price, type) {
    var menuItem = {
      name: name,
      price: price,
      type: type,
    };
    return menuItem;
}

//calls function createMenuItem & creates new object
createMenuItem (menuItemName, 10.99, "breakfast");


var listOfIngredients = [];

function addIngredients(ingredient, listOfIngredients) {
      var  ingredients = listOfIngredients

          //if value exists in ingredients
      if (ingredients.indexOf(ingredient) !== -1){
          return ingredients;

        } else {
        // else return ingredients array with new ingredient added
        return ingredients.push(ingredient)
      }
}

addIngredients("potatoes", listOfIngredients);
console.log(listOfIngredients);

//returns formatted price
function formatPrice (initialPrice) {
    return `$${initialPrice}`
}

//decreases price by 10% and returns decreased Price
function decreasePrice (price) {
    return price * .9
}


function createRecipe (title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,

  };

  return recipe;


}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
