define('ember-cli-bootstrap/utils/test-helper', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = testHelper;

  function testHelper(value, options) {
    return new _ember['default'].Handlebars.SafeString('you just used the test-helper with a value of: <b>' + value + '</b>');
  }

  ;
});