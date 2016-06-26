/*(c) 2016 🌭🌮🚀*/
"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('wge/app', ['exports', 'ember', 'wge/resolver', 'ember-load-initializers', 'wge/config/environment'], function (exports, _ember, _wgeResolver, _emberLoadInitializers, _wgeConfigEnvironment) {

	define('math', [], function () {
		return {
			'default': Math,
			Pi: Math.PI
		};
	});

	var App = undefined;

	_ember['default'].MODEL_FACTORY_INJECTIONS = true;

	App = _ember['default'].Application.extend({
		modulePrefix: _wgeConfigEnvironment['default'].modulePrefix,
		podModulePrefix: _wgeConfigEnvironment['default'].podModulePrefix,
		Resolver: _wgeResolver['default']
	});

	(0, _emberLoadInitializers['default'])(App, _wgeConfigEnvironment['default'].modulePrefix);

	exports['default'] = App;
});
/*globals define:true*/
define('wge/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'wge/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _wgeConfigEnvironment) {

  var name = _wgeConfigEnvironment['default'].APP.name;
  var version = _wgeConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('wge/controllers/contact-us', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		queryParams: ['name', 'email'],
		name: '',
		email: ''
	});
});
define('wge/helpers/auto-time-ago', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports.autoTimeAgo = autoTimeAgo;
  var inject = _ember['default'].inject;

  function autoTimeAgo(params, hash) {
    var value = hash.value;

    var mVal = (0, _moment['default'])(value);
    var t = this.get('time.current');
    var now = (0, _moment['default'])(t);
    return now.to(mVal) + (' (' + t + ') ');
  }

  exports['default'] = _ember['default'].Helper.extend({
    time: inject.service(),
    onNewUser: _ember['default'].observer('time.current', function () {
      this.recompute();
    }),
    compute: function compute(params, hash) {
      return autoTimeAgo.call(this, params, hash);
    }
  });
});
define('wge/helpers/cat-url', ['exports', 'ember'], function (exports, _ember) {
  exports.dogUrl = dogUrl;

  function dogUrl(params, hash) {
    var w = hash.w;
    var h = hash.h;

    var baseUrl = 'http://placekitten.com';
    return baseUrl + '/' + w + '/' + h;
  }

  exports['default'] = _ember['default'].Helper.helper(dogUrl);
});
define('wge/helpers/dog-url', ['exports', 'ember'], function (exports, _ember) {
  exports.dogUrl = dogUrl;

  function dogUrl(params, hash) {
    var w = hash.w;
    var h = hash.h;

    var baseUrl = 'http://placehold.it';
    return baseUrl + '/' + w + '/' + h;
  }

  exports['default'] = _ember['default'].Helper.helper(dogUrl);
});
define('wge/helpers/is-after', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/is-before', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/is-between', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/is-same-or-after', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/is-same-or-before', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/is-same', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/moment-calendar', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('wge/helpers/moment-format', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/moment-from-now', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/moment-to-now', ['exports', 'ember', 'wge/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_wgeConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('wge/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('wge/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('wge/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('wge/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'wge/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _wgeConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_wgeConfigEnvironment['default'].APP.name, _wgeConfigEnvironment['default'].APP.version)
  };
});
define('wge/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('wge/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('wge/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('wge/initializers/export-application-global', ['exports', 'ember', 'wge/config/environment'], function (exports, _ember, _wgeConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_wgeConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _wgeConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_wgeConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('wge/initializers/fastboot/ajax', ['exports', 'ember'], function (exports, _ember) {
  var get = _ember['default'].get;

  var nodeAjax = function nodeAjax(options) {
    var httpRegex = /^https?:\/\//;
    var protocolRelativeRegex = /^\/\//;
    var protocol = get(this, 'fastboot.request.protocol') + ':';

    if (protocolRelativeRegex.test(options.url)) {
      options.url = protocol + options.url;
    } else if (!httpRegex.test(options.url)) {
      try {
        options.url = protocol + '//' + get(this, 'fastboot.request.host') + options.url;
      } catch (fbError) {
        throw new Error('You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: ' + fbError.message);
      }
    }

    najax(options);
  };

  exports['default'] = {
    name: 'ajax-service',

    initialize: function initialize(application) {
      application.register('ajax:node', nodeAjax, { instantiate: false });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
      application.inject('adapter', 'fastboot', 'service:fastboot');
    }
  };
});
/* globals najax */
define("wge/initializers/fastboot/dom-helper-patches", ["exports"], function (exports) {
  /*globals Ember, URL*/
  exports["default"] = {
    name: "dom-helper-patches",

    initialize: function initialize(App) {
      // TODO: remove me
      Ember.HTMLBars.DOMHelper.prototype.protocolForURL = function (url) {
        var protocol = URL.parse(url).protocol;
        return protocol == null ? ':' : protocol;
      };

      // TODO: remove me https://github.com/tildeio/htmlbars/pull/425
      Ember.HTMLBars.DOMHelper.prototype.parseHTML = function (html) {
        return this.document.createRawHTMLSection(html);
      };
    }
  };
});
define('wge/initializers/fastboot/error-handler', ['exports', 'ember'], function (exports, _ember) {

  /**
   * Initializer to attach an `onError` hook to your app running in fastboot. It catches any run loop
   * exceptions and other errors and prevents the node process from crashing.
   *
   */
  exports['default'] = {
    name: 'error-handler',

    initialize: function initialize(application) {
      if (!_ember['default'].onerror) {
        // if no onerror handler is defined, define one for fastboot environments
        _ember['default'].onerror = function (err) {
          var errorMessage = 'There was an error running your app in fastboot. More info about the error: \n ' + (err.stack || err);
          _ember['default'].Logger.error(errorMessage);
        };
      }
    }
  };
});
define('wge/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('wge/initializers/route-base', ['exports', 'wge/routes/custom-base', 'wge/models/wickedgood'], function (exports, _wgeRoutesCustomBase, _wgeModelsWickedgood) {
  exports.initialize = initialize;

  function initialize(application) {
    application.register('route:basic', _wgeRoutesCustomBase['default']);

    application.register('conference:wge', _wgeModelsWickedgood['default']);
    application.inject('route', 'foo', 'conference:wge');
  }

  exports['default'] = {
    name: 'route-base',
    initialize: initialize
  };
});
define('wge/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('wge/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("wge/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('wge/instance-initializers/route-base', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize() /* appInstance */{
    // appInstance.inject('route', 'foo', 'service:foo');
  }

  exports['default'] = {
    name: 'route-base',
    initialize: initialize
  };
});
define('wge/locations/none', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  var reads = _ember['default'].computed.reads;
  var service = _ember['default'].inject.service;
  var get = _ember['default'].get;
  var getOwner = _ember['default'].getOwner;
  exports['default'] = _ember['default'].NoneLocation.extend({
    implementation: 'fastboot',
    fastboot: service(),

    _fastbootHeadersEnabled: computed(function () {
      var config = getOwner(this).resolveRegistration('config:environment');
      return !!get(config, 'fastboot.fastbootHeaders');
    }),

    _redirectCode: computed(function () {
      var TEMPORARY_REDIRECT_CODE = 307;
      var config = getOwner(this).resolveRegistration('config:environment');
      return get(config, 'fastboot.redirectCode') || TEMPORARY_REDIRECT_CODE;
    }),

    _response: reads('fastboot.response'),
    _request: reads('fastboot.request'),

    setURL: function setURL(path) {
      if (get(this, 'fastboot.isFastBoot')) {
        var currentPath = get(this, 'path');
        var isInitialPath = !currentPath || currentPath.length === 0;
        var isTransitioning = currentPath !== path;
        var response = get(this, '_response');

        if (isTransitioning && !isInitialPath) {
          var protocol = get(this, '_request.protocol');
          var host = get(this, '_request.host');
          var redirectURL = protocol + '://' + host + path;

          response.statusCode = this.get('_redirectCode');
          response.headers.set('location', redirectURL);
        }

        // for testing and debugging
        if (get(this, '_fastbootHeadersEnabled')) {
          response.headers.set('x-fastboot-path', path);
        }
      }

      this._super.apply(this, arguments);
    }
  });
});
define('wge/models/wickedgood', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Object.extend({
		year: 2016
	});
});
define('wge/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('wge/router', ['exports', 'ember', 'wge/config/environment'], function (exports, _ember, _wgeConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _wgeConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('blog');
    this.route('contact-us');
  });

  exports['default'] = Router;
});
define('wge/routes/application', ['exports', 'ember'], function (exports, _ember) {

	// import { default as math, Pi } from 'math';

	// math.sqrt(4); // 2
	// console.log(Pi); // 3.145926...

	exports['default'] = _ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			this._super.apply(this, arguments);
			// console.log('Should be 2', math.sqrt(4));
			// console.log('Should be PI', Pi);
		}
	});
});
define('wge/routes/blog', ['exports', 'ember', 'ember-network/fetch'], function (exports, _ember, _emberNetworkFetch) {

  var _URL = 'https://emberconf-state-api.herokuapp.com/api/repositories/10/pulls';

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return (0, _emberNetworkFetch['default'])(_URL).then(function (response) {
        return response.json().then(function (jsonData) {
          return jsonData;
        });
      });
    }
  });
});
define('wge/routes/contact-us', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		queryParams: {
			name: { replace: true },
			email: { replace: true }
		}
	});
});
define('wge/routes/custom-base', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		afterModel: function afterModel() {
			this._super.apply(this, arguments);
			console.log('Basic!!!1one');
			console.log(this.get('foo.year'));
		}
	});
});
define('wge/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('wge/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('wge/services/fastboot', ['exports', 'ember'], function (exports, _ember) {
  var deprecate = _ember['default'].deprecate;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var deprecatingAlias = computed.deprecatingAlias;
  var readOnly = computed.readOnly;

  var RequestObject = _ember['default'].Object.extend({
    init: function init() {
      this._super.apply(this, arguments);

      var request = this.request;
      delete this.request;

      this.cookies = request.cookies;
      this.headers = request.headers;
      this.queryParams = request.queryParams;
      this.path = request.path;
      this.protocol = request.protocol;
      this._host = function () {
        return request.host();
      };
    },

    host: computed(function () {
      return this._host();
    })
  });

  var Shoebox = _ember['default'].Object.extend({
    put: function put(key, value) {
      _ember['default'].assert('shoebox.put is only invoked from the FastBoot rendered application', this.get('fastboot.isFastBoot'));
      _ember['default'].assert('the provided key is a string', typeof key === 'string');

      var fastbootInfo = this.get('fastboot._fastbootInfo');
      if (!fastbootInfo.shoebox) {
        fastbootInfo.shoebox = {};
      }

      fastbootInfo.shoebox[key] = value;
    },

    retrieve: function retrieve(key) {
      if (this.get('fastboot.isFastBoot')) {
        var shoebox = this.get('fastboot._fastbootInfo.shoebox');
        if (!shoebox) {
          return;
        }

        return shoebox[key];
      }

      var shoeboxItem = this.get(key);
      if (shoeboxItem) {
        return shoeboxItem;
      }

      var $el = _ember['default'].$('#shoebox-' + key);
      if (!$el.length) {
        return;
      }
      var valueString = $el.text();
      if (!valueString) {
        return;
      }

      shoeboxItem = JSON.parse(valueString);
      this.set(key, shoeboxItem);

      return shoeboxItem;
    }
  });

  exports['default'] = _ember['default'].Service.extend({
    cookies: deprecatingAlias('request.cookies', { id: 'fastboot.cookies-to-request', until: '0.9.9' }),
    headers: deprecatingAlias('request.headers', { id: 'fastboot.headers-to-request', until: '0.9.9' }),

    init: function init() {
      this._super.apply(this, arguments);

      var shoebox = Shoebox.create({ fastboot: this });
      this.set('shoebox', shoebox);
    },

    host: computed(function () {
      deprecate('Usage of fastboot service\'s `host` property is deprecated.  Please use `request.host` instead.', false, { id: 'fastboot.host-to-request', until: '0.9.9' });

      return this._fastbootInfo.request.host();
    }),

    response: readOnly('_fastbootInfo.response'),

    request: computed(function () {
      if (!get(this, 'isFastBoot')) return null;
      return RequestObject.create({ request: get(this, '_fastbootInfo.request') });
    }),

    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    }),

    deferRendering: function deferRendering(promise) {
      _ember['default'].assert('deferRendering requires a promise or thennable object', typeof promise.then === 'function');
      this._fastbootInfo.deferRendering(promise);
    }
  });
});
/* global FastBoot */
define('wge/services/moment', ['exports', 'ember', 'wge/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _wgeConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_wgeConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('wge/services/time', ['exports', 'ember'], function (exports, _ember) {

  var UPDATE_INTERVAL = 5000;

  exports['default'] = _ember['default'].Service.extend({
    // current
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.set('current', new Date().valueOf());
      if (typeof FastBoot === 'undefined') {
        this._task = setInterval(function () {
          _this.set('current', new Date().valueOf());
        }, UPDATE_INTERVAL);
      }
    },
    willDestroy: function willDestroy() {
      if (this._task) {
        clearInterval(this._task);
      }
      this._super.apply(this, arguments);
    }
  });
});
/*globals setInterval:true clearInterval:true*/
define("wge/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 41
            }
          },
          "moduleName": "wge/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 40
            }
          },
          "moduleName": "wge/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Blog");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 52
            }
          },
          "moduleName": "wge/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Contact Us");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "wge/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "logo");
        var el3 = dom.createTextNode("\n		🚀Acme\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "nav-menu");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["tagName", "li"], 0, null, ["loc", [null, [6, 2], [6, 41]]]], ["block", "link-to", ["blog"], ["tagName", "li"], 1, null, ["loc", [null, [7, 2], [7, 40]]]], ["block", "link-to", ["contact-us"], ["tagName", "li"], 2, null, ["loc", [null, [8, 2], [8, 52]]]], ["content", "outlet", ["loc", [null, [12, 0], [12, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("wge/templates/blog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "wge/templates/blog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("wge/templates/components/x-foo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 60
          }
        },
        "moduleName": "wge/templates/components/x-foo.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("This component has no javascript explicitly defined");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("wge/templates/contact-us", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 4
          }
        },
        "moduleName": "wge/templates/contact-us.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "name");
        var el3 = dom.createTextNode("\n		Name\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "email");
        var el3 = dom.createTextNode("\n		Email\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 15], [7, 19]]]]], [], []]], ["loc", [null, [7, 1], [7, 21]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [14, 15], [14, 20]]]]], [], []]], ["loc", [null, [14, 1], [14, 22]]]], ["inline", "auto-time-ago", [], ["value", 1466962579348], ["loc", [null, [18, 1], [18, 38]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("wge/templates/custom-base", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "wge/templates/custom-base.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("wge/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 9
          }
        },
        "moduleName": "wge/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'src');
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["attribute", "src", ["subexpr", "cat-url", [], ["w", "400", "h", "400"], ["loc", [null, [3, 9], [3, 36]]]]], ["content", "x-foo", ["loc", [null, [5, 0], [5, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('wge/thing/tests/modules/thing/helpers/notcat-url.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/thing/helpers/notcat-url.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/thing/helpers/notcat-url.js should pass jshint.\nmodules/thing/helpers/notcat-url.js: line 1, col 18, Missing semicolon.\n\n1 error');
  });
});
define('wge/utils/resolve-later', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = resolveLater;
  var RSVP = _ember['default'].RSVP;

  function resolveLater(time) {
    return new RSVP.Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('wge/config/environment', ['ember'], function(Ember) {
  return FastBoot.config();
});

/* jshint ignore:end */

/* jshint ignore:start */


define('~fastboot/app-factory', ['wge/app', 'wge/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
//# sourceMappingURL=wge.map