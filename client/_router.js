Router.route('/logIn',{
	path:'/'
});

Router.route('/signUp',{

});

Router.route('/myInfo', {
	waitOn: function () {
		return [Meteor.subscribe("getAllRecipes")];

	},
	data: function () {
		return {
			recipeList: Recipes.find({userName:amplify.store('userName')}).fetch()
		};
	}
});

Router.route('/searchPage', {
	waitOn: function () {
		return [Meteor.subscribe("getAllRecipes")];

	},
	data: function () {
		return {
			recipeList: Recipes.find({recipeName:Session.get('recipeName')}).fetch()
		};
	}
});

Router.route('/menuBar',{

});

Router.route('/sidebar_myInfo',{

});

Router.route('/sideBar_menu',{

});

Router.route('/writeRecipe',{

});

Router.route('/friendList',{

});

Router.route('/recipeListItem',{

});

Router.route('/viewRecipe',{


});

Router.route('/userList',{

	waitOn : function(){
		return [Meteor.subscribe("getAllUsers")];

	},

	data : function(){
		return {
			userList : Meteor.users.find().fetch()
		};
	}
});

Router.route('/userListItem',{

});

Router.route('/koodMain',{
	waitOn : function(){
		return [Meteor.subscribe("getAllRecipes")];

	},
	data : function(){
		return {
			recipeList : Recipes.find().fetch()
		};
	}
});

Router.route('/uploadImage', {
	action: function () {
		if (this.ready())
			this.render('uploadImage');
		else
			this.render('Loading');
	}
});

Router.route('/imageView', {

});