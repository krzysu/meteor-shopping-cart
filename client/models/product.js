// client side only
Products = new Mongo.Collection(null);

// bootstrap data
window.productsCollection.forEach(function(item, index) {
  Products.insert(item);
})