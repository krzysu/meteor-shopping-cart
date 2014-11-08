Template.product.events({
  'click button': function () {
    console.log('this', this);
  }
});


Template.product.helpers({
  data: function() {
    return this;
  },

  state: function() {
    var state = {
      added: false
    }

    return state;
  }
});