import Ember from 'ember';

export function dogUrl(params, hash) {
  let { w, h } = hash;
  let baseUrl = 'http://placehold.it';
  return `${baseUrl}/${w}/${h}`;
}

export default Ember.Helper.helper(dogUrl);