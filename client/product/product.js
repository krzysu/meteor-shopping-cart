Template.product.events({

  'click button': function(event, template) {

    Products.update(template.data._id, {
      $set: {inCart: true}
    });

    Cart.insert(template.data);
  }

});


Template.product.helpers({

  data: function() {
    return this;
  }

});