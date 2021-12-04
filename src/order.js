
function takeOrder (order, deliveryOrders) {

      if (deliveryOrders.length <= 2) {
        deliveryOrders.push(order);
      }
      // } else{
      //   return deliveryOrders;
      // }
      return
}


function refundOrder (orderNumber, deliveryOrders) {
//splice(start#, remove#ofitems)
//indexOf returns boolean value

for ( var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i,1)
    }
}


// if  (
//
// ) else (
//
// )
      // placeIndicator = deliveryOrders.indexOf(orderNum-1)
      // deliveryOrders.splice(placeIndicator, 1)


}

//function addOrder (orderNumber, item, price, orderType, status) {
      //var order =
// }

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
