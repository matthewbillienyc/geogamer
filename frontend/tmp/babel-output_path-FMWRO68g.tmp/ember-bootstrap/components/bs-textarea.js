define('ember-bootstrap/components/bs-textarea', ['exports', 'ember', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  /**
   Extends Ember.TextArea to add Bootstrap's 'form-control' class.
  
   ### I18n support
  
   Supports translateable properties if [ember-i18n](https://github.com/jamesarosen/ember-i18n) is present.
   See {{#crossLink "Mixins.I18nSupport"}}{{/crossLink}}
  
   @class Textarea
   @namespace Components
   @extends Ember.TextArea
   @uses Mixins.I18nSupport
   */
  exports['default'] = _ember['default'].TextArea.extend(_emberBootstrapMixinsI18nSupport['default'], {
    classNames: ['form-control']
  });
});