
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



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
