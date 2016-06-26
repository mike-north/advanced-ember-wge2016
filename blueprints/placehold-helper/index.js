/*jshint node:true*/
module.exports = {
  description: 'Generate image placehold handlebars helpers',
   availableOptions: [
    {
      name: 'base',
      type: String,
      default: 'http://placekitten.com'
    }
  ],
  locals: function(options) {
    // Return custom template variables here.
    return {
      baseUrl: options.base
    };
  },
  afterInstall: function(options) {
    debugger;
    // Perform extra work here.
  }
};
