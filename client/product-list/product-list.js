Template.productList.helpers({
  products: function () {
    return Products.find();
  }
});