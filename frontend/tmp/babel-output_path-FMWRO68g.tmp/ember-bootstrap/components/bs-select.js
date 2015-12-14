define('ember-bootstrap/components/bs-select', ['exports', 'ember', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  /**
   Extends Ember.Select to add Bootstrap's 'form-control' class.
  
   ### I18n support
  
   Supports translateable properties if [ember-i18n](https://github.com/jamesarosen/ember-i18n) is present.
   See {{#crossLink "Mixins.I18nSupport"}}{{/crossLink}}
  
   @class Select
   @namespace Components
   @extends Ember.Select
   @uses Mixins.I18nSupport
   */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsI18nSupport['default'], {
    tagName: 'select',
    classNames: ['form-control'],

    content: null,
    prompt: null,
    optionValuePath: 'id',
    optionLabelPath: 'title',
    action: _ember['default'].K, // action to fire on change

    value: null,

    init: function init() {
      this._super.apply(this, arguments);
      if (!this.get('content')) {
        this.set('content', []);
      }
    },

    change: function change() {
      var selectEl = this.$().get(0);
      var selectedIndex = selectEl.selectedIndex;
      var content = this.get('content');

      // decrement index by 1 if we have a prompt
      var hasPrompt = !!this.get('prompt');
      var contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;

      var selection = content[contentIndex];

      // set the local, shadowed selection to avoid leaking
      // changes to `selection` out via 2-way binding
      this.set('value', selection);

      var changeCallback = this.get('action');
      changeCallback(selection);
    }

  });
});