
Template.cart.helpers({
  items: function() {
    console.log(Cart.find());
    return Cart.find();
  },

  cartTotal: function() {
    return 0;
  },

  cartCurrency: function() {
    return 'EUR';
  }

});