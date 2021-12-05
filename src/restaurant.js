// var menus =

var breakfastMenu = [];
var lunchMenu = [];
var dinnerMenu = [];

function createRestaurant (name) {

  var pizzaRestaurant = {
    name: name,
    menus: {breakfast: [],
            lunch: [],
            dinner: []}
    // menus: "lunch",
    // menus: "dinner",
  };

return pizzaRestaurant;
}

module.exports = {
  createRestaurant,
  // addMenuItem,
  // removeMenuItem
}
