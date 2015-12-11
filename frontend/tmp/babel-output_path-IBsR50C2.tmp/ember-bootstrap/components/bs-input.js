define('ember-bootstrap/components/bs-input', ['exports', 'ember', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  /**
   Extends Ember.TextField to add Bootstrap's 'form-control' class.
  
   ### I18n support
  
   Supports translateable properties if [ember-i18n](https://github.com/jamesarosen/ember-i18n) is present.
   See {{#crossLink "Mixins.I18nSupport"}}{{/crossLink}}
  
   @class Input
   @namespace Components
   @extends Ember.TextField
   @uses Mixins.I18nSupport
   */
  exports['default'] = _ember['default'].TextField.extend(_emberBootstrapMixinsI18nSupport['default'], {
    classNames: ['form-control']
  });
});