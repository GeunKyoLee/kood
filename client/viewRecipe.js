Template.viewRecipe.helpers({
    userName : function(){
        //  return Session.get('userName')
        return amplify.store('userName')
    }
});
