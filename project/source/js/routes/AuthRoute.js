App.AuthRoute = Ember.Route.extend({

	renderTemplate: function () {
		this.render('auth', {into: 'application', outlet: 'primary'});
	}
});
