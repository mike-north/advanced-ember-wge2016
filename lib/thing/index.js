/*jshint node:true*/
module.exports = {
  name: 'thing',

  isDevelopingAddon: function() {
    return true;
  },
  included: function(app) {
  	if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
	  	app.import('vendor/wickedgood-shim.js', {
	  		prepend: true
	  	});
	  }
  }
};
