import BasicRoute from '../routes/custom-base';
import WG from '../models/wickedgood';


export function initialize(application) {
  application.register('route:basic', BasicRoute);

  application.register('conference:wge', WG);
  application.inject('route', 'foo', 'conference:wge');
}

export default {
  name: 'route-base',
  initialize
};
