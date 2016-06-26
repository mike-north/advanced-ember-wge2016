/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Filter = require('broccoli-filter');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });


  Commenter.prototype = Object.create(Filter.prototype);
  Commenter.prototype.constructor = Commenter;
  function Commenter(inputNode) {
    Filter.call(this, inputNode);
  }

  Commenter.prototype.extensions = ['js'];
  Commenter.prototype.targetExtension = 'js';

  Commenter.prototype.processString = function(content, relativePath) {
    return "/*(c) 2016 🌭🌮🚀*/\n" + content;
  };

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return new Commenter(app.toTree());
};
