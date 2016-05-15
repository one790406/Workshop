/**
 * Created by danny on 2016/5/15.
 */
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};