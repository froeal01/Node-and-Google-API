define(['views/lists/menuitem'], function(ListMenuItemView){
	var ListMenuView = Backbone.View.extend({
		el : '.left-nav',
		tagName: 'ul',
		className 'nav nav-list lists-nav',

		events:{

		},

		initialize: function(){
			this.collection.on('add', this.render, this);
		},
		render: function(){

		}
	});

	return ListMenuView;
});