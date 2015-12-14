define('frontend/initializers/test-helper', ['exports', 'frontend/helpers/test-helper'], function (exports, _frontendHelpersTestHelper) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    Ember.Handlebars.registerHelper('test-helper', _frontendHelpersTestHelper['default']);
  }

  ;

  exports['default'] = {
    name: 'test-helper',
    initialize: initialize
  };
});