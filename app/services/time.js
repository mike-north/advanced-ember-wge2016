/*globals setInterval:true clearInterval:true*/
import Ember from 'ember';

const UPDATE_INTERVAL = 5000;

export default Ember.Service.extend({
  // current
  init() {
    this._super(...arguments);
    this.set('current', new Date().valueOf());
    if (typeof FastBoot === 'undefined') {
      this._task = setInterval(() => {
        this.set('current', new Date().valueOf());
      }, UPDATE_INTERVAL);
    }
  },
  willDestroy() {
    if (this._task) {
      clearInterval(this._task);
    }
    this._super(...arguments);
  }
});
