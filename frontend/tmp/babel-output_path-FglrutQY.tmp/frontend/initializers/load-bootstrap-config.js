define('frontend/initializers/load-bootstrap-config', ['exports', 'frontend/config/environment', 'ember-bootstrap/config'], function (exports, _frontendConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_frontendConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});