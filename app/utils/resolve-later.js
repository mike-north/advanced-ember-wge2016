import Ember from 'ember';

const { RSVP } = Ember;

export default function resolveLater(time) {
  return new RSVP.Promise((resolve) => {
  	setTimeout(resolve, time);
  });
}
