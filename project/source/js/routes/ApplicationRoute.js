App.ApplicationRoute = Em.Route.extend({

	renderTemplate: function () {
		this.render();

		this.render('nav', {
			into: 'application',
			outlet: 'nav'
		});
	}
});
