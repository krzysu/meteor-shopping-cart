Template.product.events({

  'click button': function(event, template) {

    var id = template.data._id;

    if(Products.findOne(id).inCart) {
      // remove
      Products.update(id, {
        $set: {inCart: false}
      });

      Cart.remove(id);
    }
    else {
      // add
      Products.update(id, {
        $set: {inCart: true}
      });

      Cart.insert(template.data);
    }

  }

});


Template.product.helpers({

  data: function() {
    return this;
  }

});