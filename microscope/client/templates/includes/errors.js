/**
 * Created by danny on 2016/5/15.
 */
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

Template.error.onRendered(function() {
    var error = this.data;
    Meteor.setTimeout(function () {
        Errors.remove(error._id);
    }, 3000);
});