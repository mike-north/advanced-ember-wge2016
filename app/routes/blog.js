import Ember from 'ember';
import resolveLater from '../utils/resolve-later';
import fetch from 'ember-network/fetch';

const URL = 'https://emberconf-state-api.herokuapp.com/api/repositories/10/pulls';

export default Ember.Route.extend({
  model() {
    return fetch(URL).then((response) => {
      return response.json().then((jsonData) => {
        return jsonData;
      });
    })
  }
});
