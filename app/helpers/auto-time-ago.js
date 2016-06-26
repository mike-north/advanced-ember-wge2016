import Ember from 'ember';
import moment from 'moment';

const { inject } = Ember;

export function autoTimeAgo(params, hash) {
  let { value } = hash;
  let mVal = moment(value);
  let t = this.get('time.current');
  let now = moment(t);
  return now.to(mVal) + ` (${t}) `;
}

export default Ember.Helper.extend({
  time: inject.service(),
  onNewUser: Ember.observer('time.current', function() {
    this.recompute();
  }),
  compute(params, hash) {
    return autoTimeAgo.call(this, params, hash);
  }
});