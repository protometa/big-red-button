
var Buttons = new Mongo.Collection('buttons')

if (Meteor.isClient) {

  Template.button.helpers({
    state: function () {
      return Buttons.findOne('big-red').counter % 2
    }
  });

  Template.button.events({
    'click button': function () {
      // increment the counter when button is clicked
      Buttons.update('big-red', {$inc: {counter: 1}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Buttons.findOne('big-red')) {
      Buttons.insert({_id: 'big-red', counter: 0})
    };
  });
}
