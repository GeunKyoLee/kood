Template.writeRecipe.events({
    'click button[name=Submit]' : function(evt,tmpl){
        Recipes.insert({
            recipeName: tmpl.find('input[name=recipeName]').value
            ,userName : amplify.store('userName')
           ,ingredientList:tmpl.find('input[name=ingredientList]').value
            ,division:tmpl.find('input[name=division]').value
            ,recipePic: tmpl.find()

    });
        Router.go('/myInfo');
    },

    'click button[name=Cancel]' : function(evt,tmpl){
        Router.go('/myInfo');
    }
});
