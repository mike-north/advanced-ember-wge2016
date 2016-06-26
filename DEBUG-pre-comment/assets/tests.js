define('wge/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('wge/tests/controllers/contact-us.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/contact-us.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/contact-us.js should pass jshint.');
  });
});
define('wge/tests/helpers/auto-time-ago.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/auto-time-ago.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/auto-time-ago.js should pass jshint.');
  });
});
define('wge/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('wge/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('wge/tests/helpers/dog-url.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/dog-url.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/dog-url.js should pass jshint.');
  });
});
define('wge/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'wge/tests/helpers/start-app', 'wge/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _wgeTestsHelpersStartApp, _wgeTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _wgeTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _wgeTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('wge/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('wge/tests/helpers/resolver', ['exports', 'wge/resolver', 'wge/config/environment'], function (exports, _wgeResolver, _wgeConfigEnvironment) {

  var resolver = _wgeResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _wgeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _wgeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('wge/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('wge/tests/helpers/start-app', ['exports', 'ember', 'wge/app', 'wge/config/environment'], function (exports, _ember, _wgeApp, _wgeConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _wgeConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _wgeApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('wge/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('wge/tests/initializers/route-base.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/route-base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/route-base.js should pass jshint.');
  });
});
define('wge/tests/instance-initializers/route-base.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | instance-initializers/route-base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/route-base.js should pass jshint.');
  });
});
define('wge/tests/models/wickedgood.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/wickedgood.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/wickedgood.js should pass jshint.');
  });
});
define('wge/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('wge/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('wge/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('wge/tests/routes/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blog.js should pass jshint.');
  });
});
define('wge/tests/routes/contact-us.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact-us.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact-us.js should pass jshint.');
  });
});
define('wge/tests/routes/custom-base.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/custom-base.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/custom-base.js should pass jshint.');
  });
});
define('wge/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('wge/tests/services/time.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/time.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/time.js should pass jshint.');
  });
});
define('wge/tests/test-helper', ['exports', 'wge/tests/helpers/resolver', 'ember-qunit'], function (exports, _wgeTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_wgeTestsHelpersResolver['default']);
});
define('wge/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('wge/tests/unit/controllers/contact-us-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:contact-us', 'Unit | Controller | contact us', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('wge/tests/unit/controllers/contact-us-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/contact-us-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contact-us-test.js should pass jshint.');
  });
});
define('wge/tests/unit/initializers/route-base-test', ['exports', 'ember', 'wge/initializers/route-base', 'qunit'], function (exports, _ember, _wgeInitializersRouteBase, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | route base', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _wgeInitializersRouteBase['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('wge/tests/unit/initializers/route-base-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/initializers/route-base-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/route-base-test.js should pass jshint.');
  });
});
define('wge/tests/unit/instance-initializers/route-base-test', ['exports', 'ember', 'wge/instance-initializers/route-base', 'qunit', 'wge/tests/helpers/destroy-app'], function (exports, _ember, _wgeInstanceInitializersRouteBase, _qunit, _wgeTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | route base', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _wgeTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _wgeInstanceInitializersRouteBase.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('wge/tests/unit/instance-initializers/route-base-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/route-base-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/route-base-test.js should pass jshint.');
  });
});
define('wge/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('wge/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('wge/tests/unit/routes/blog-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:blog', 'Unit | Route | blog', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('wge/tests/unit/routes/blog-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/blog-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/blog-test.js should pass jshint.');
  });
});
define('wge/tests/unit/routes/contact-us-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact-us', 'Unit | Route | contact us', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('wge/tests/unit/routes/contact-us-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/contact-us-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-us-test.js should pass jshint.');
  });
});
define('wge/tests/unit/routes/custom-base-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:custom-base', 'Unit | Route | custom base', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('wge/tests/unit/routes/custom-base-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/custom-base-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/custom-base-test.js should pass jshint.');
  });
});
define('wge/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('wge/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('wge/tests/unit/services/time-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:time', 'Unit | Service | time', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('wge/tests/unit/services/time-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/time-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/time-test.js should pass jshint.');
  });
});
define('wge/tests/unit/utils/resolve-later-test', ['exports', 'wge/utils/resolve-later', 'qunit'], function (exports, _wgeUtilsResolveLater, _qunit) {

  (0, _qunit.module)('Unit | Utility | resolve later');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _wgeUtilsResolveLater['default'])();
    assert.ok(result);
  });
});
define('wge/tests/unit/utils/resolve-later-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/resolve-later-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/resolve-later-test.js should pass jshint.');
  });
});
define('wge/tests/utils/resolve-later.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/resolve-later.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/resolve-later.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('wge/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map