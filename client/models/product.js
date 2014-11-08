// client side only
Products = new Mongo.Collection(null);

// bootstrap data
window.productsCollection.forEach(function(item, index) {

  // init state properties
  item.inCart = false;

  //
  Products.insert(item);
})

Session.set('currency', window.productsCollection[0].currency);