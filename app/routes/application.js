import Ember from 'ember';

import { default as math, Pi } from 'math';

math.sqrt(4); // 2
console.log(Pi) // 3.145926...

export default Ember.Route.extend({
	beforeModel() {
		this._super(...arguments);
		console.log('Should be 2', math.sqrt(4));
		console.log('Should be PI', Pi);
	}
});
