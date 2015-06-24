/**
 * Created by woo on 2015-06-15.
 */

Template.recipeListItem.events({
    'click button[name=btn_delete]' : function(evt,tmpl) {
        Recipes.remove({_id:this._id});
    }
});