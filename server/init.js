Meteor.startup(function() {
    if(Recipes.find().count() == 0){
        Recipes.insert({recipePic: "http://dummyimage.com/140x140/000/fff" , recipeGrade: "asd", recipeName: "recipename1" , userName:"abc"});
        Recipes.insert({recipePic: "http://dummyimage.com/140x140/000/fff" , recipeGrade: "asd", recipeName: "recipename2" , userName:"abc"});
        console.log('It is Okay');
    }
});