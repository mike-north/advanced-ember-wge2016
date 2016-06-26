import Ember from 'ember';
import fetch from 'ember-network/fetch';

const _URL = 'https://emberconf-state-api.herokuapp.com/api/repositories/10/pulls';

export default Ember.Route.extend({
  model() {
    return fetch(_URL).then((response) => {
      return response.json().then((jsonData) => {
        return jsonData;
      });
    });
  }
});
