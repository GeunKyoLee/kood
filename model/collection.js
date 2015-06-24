Recipes = new Mongo.Collection('recipes');

if(Meteor.isClient){
    Meteor.methods({
        nice : function(a){
            Recipes.insert({name:a,email:'난클라이언트'});
        }
    });
}

if(Meteor.isServer){
    Meteor.methods({
        nice : function(a){
            Recipes.insert({name:a,email:'난서버'});
        }
    });
}

Meteor.users.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        return (userId && doc.owner === userId);
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        return doc.owner === userId;
    },
    remove: function (userId, doc) {
        // can only remove your own documents
        return doc.owner !== userId;
    },
    fetch: ['owner']
});

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
    stores: [imageStore]
});


Images.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    },
    download: function(){
        return false;
    }
});

Images.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function(){
        return true;
    }
});