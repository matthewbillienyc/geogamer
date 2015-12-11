define('frontend/helpers/test-helper', ['exports', 'ember', 'ember-cli-bootstrap/utils/test-helper'], function (exports, _ember, _emberCliBootstrapUtilsTestHelper) {
  exports['default'] = _ember['default'].Handlebars.makeBoundHelper(_emberCliBootstrapUtilsTestHelper['default']);
});