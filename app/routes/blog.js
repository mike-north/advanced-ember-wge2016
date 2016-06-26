import Ember from 'ember';
import resolveLater from '../utils/resolve-later';

export default Ember.Route.extend({
	model() {
		return resolveLater(2000);
	}
});
