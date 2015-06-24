Template.logIn.events({
	'click button[name=LogIn]' : function(evt,tmpl){

		var id = tmpl.find('input[name=username]').value;
		var pwd = tmpl.find('input[name=password]').value;

	//	Session.set('userName', id)

		amplify.store('userName', id);
		Meteor.loginWithPassword( id,pwd, function(err){
			if (err){
				alert('Login Failed' + err);
			}
			else{
				alert("Login Success");
				Router.go('/koodMain');
			}
		});

	},
	'click button[name=SignUp]' : function(evt,tmpl){
		Router.go('/signUp');
	}
});

Template.signUp.events({
	'click button[name=Save]' : function(evt,tmpl){
		var info = {
			username : tmpl.find('input[name=username]').value
			,password : tmpl.find('input[name=password]').value
			,email : tmpl.find('input[name=email]').value
			,profile : {
				nickname: tmpl.find('input[name=nickname]').value
			}
		};
		Accounts.createUser(info,function(err){
			if (err){
				alert(err);
			}else{
				alert("Account Created");
				Router.go('/');
			}
		});

	}
	,
	'click button[name=Cancel]' : function(evt,tmpl){
		Router.go('/');
	}
});