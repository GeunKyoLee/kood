Template.sideBar_myinfo.helpers({
    userName : function(){
      //  return Session.get('userName')
        		return amplify.store('userName')
    }
});