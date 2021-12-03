function nameMenuItem(name) {
      menuItemName = `Delicious ${name}`
      return menuItemName;
}

function createMenuItem(name, price, type) {
    var menuItem = {
      name: name,
      price: price,
      type: type,
    };
    return menuItem;
}

//var ingredients = []

function addIngredients(ingredient, listOfIngredients) {
  //var ingredients = ["cheese", ingredient]
  //anyArray = ingredients;
  //anyArray.push(ingredient);

  //addIngredients("cheese", anyArray);

  return listOfIngredients.push(ingredient);

  //function addIngredients(topping1, topping2) {
  //topping2.push(topping1)
  //} feedback to Rio & Casey why this is not topping1 & topping2
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
