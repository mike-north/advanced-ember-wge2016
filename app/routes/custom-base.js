	import Ember from 'ember';

export default Ember.Route.extend({

	afterModel() {
		this._super(...arguments);
		console.log('Basic!!!1one');
		console.log(this.get('foo.year'));
	}
});
