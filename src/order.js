
function takeOrder (order, deliveryOrders) {

      if (deliveryOrders.length <= 2) {
        deliveryOrders.push(order);
      }

      return
}


function refundOrder (orderNumber, deliveryOrders) {

    for (var i = 0; i < deliveryOrders.length; i++) {
        if (deliveryOrders[i].orderNumber === orderNumber) {
            deliveryOrders.splice(i , 1)
            }
        }
}

function listItems (deliveryOrders) {
    var listOrders= []
    for (var i = 0; i < deliveryOrders.length; i++) {
      listOrders.push(deliveryOrders[i].item)
    };
    return listOrders.join(', ');
}

function searchOrder (deliveryOrders, foodItem) {
    // is foodItem in deliveryOrders array?
    // search deliveryOrders array for entered "foodItem"
    // return Boolean value
    var boolean = false;


    for (var i = 0; i < deliveryOrders.length; i++){

        if (deliveryOrders[i].item === foodItem) {
           boolean = true;
        // } else {
        //   orderBooleans.push(false);
        }
        //join(', ')
    };
return boolean


}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
