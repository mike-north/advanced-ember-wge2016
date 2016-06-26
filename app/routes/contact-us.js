import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		name: {replace: true},
		email: {replace: true}
	}
});
