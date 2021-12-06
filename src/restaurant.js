// var menus =

function createRestaurant (name) {

  var pizzaRestaurant = {
    name: name,
    menus: {breakfast: [],
            lunch: [],
            dinner: []}
  };
return pizzaRestaurant;
}

function addMenuItem (restaurant, menuItem) {
  if (menuItem.type === "breakfast" && restaurant.menus.breakfast.includes(menuItem) === false) {

      restaurant.menus.breakfast.push(menuItem)


  } else if (menuItem.type === "lunch" && restaurant.menus.lunch.includes(menuItem) === false)  {

    restaurant.menus.lunch.push(menuItem)
  }
  else  if (menuItem.type === "dinner" && restaurant.menus.dinner.includes(menuItem) === false) {

    restaurant.menus.dinner.push(menuItems)
      }

      return restaurant;
  }




module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
