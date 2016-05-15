/**
 * Created by danny on 2016/5/15.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});
