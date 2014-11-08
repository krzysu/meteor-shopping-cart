// client side only
Products = new Mongo.Collection(null);

// bootstrap data
Products.bootstrap = function() {
  HTTP.call("GET", "products.json", function(error, response) {

    if(!error) {
      var products = response.data;

      Session.set('currency', products[0].currency);

      products.forEach(function(item, index) {
        // init state properties
        item.inCart = false;

        Products.insert(item);
      });
    }
  });
};

