define('frontend/initializers/test-breadcrumbs', ['exports', 'frontend/helpers/test-breadcrumbs'], function (exports, _frontendHelpersTestBreadcrumbs) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    debugger;
    Ember.Handlebars.registerHelper('test-breadcrumbs', _frontendHelpersTestBreadcrumbs['default']);
  }

  ;

  exports['default'] = {
    name: 'test-breadcrumbs',
    initialize: initialize
  };
});