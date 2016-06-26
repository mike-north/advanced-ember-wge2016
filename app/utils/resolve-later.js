const { RSVP } = Ember;

export default function resolveLater(time) {
  return new RSVP.Promise((resolve, reject) => {
  	setTimeout(resolve, time);
  });
}
