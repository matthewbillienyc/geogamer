define('ember-bootstrap/components/bs-accordion-item', ['exports', 'ember', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/mixins/sub-component', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapMixinsTypeClass, _emberBootstrapMixinsSubComponent, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  /**
   A collapsible/expandable item within an accordion
  
   See {{#crossLink "Components.Accordion"}}{{/crossLink}} for examples.
  
  
   @class AccordionItem
   @namespace Components
   @extends Ember.Component
   @uses Mixins.TypeClass
   @uses Mixins.SubComponent
   @uses Mixins.I18nSupport
   */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsTypeClass['default'], _emberBootstrapMixinsSubComponent['default'], _emberBootstrapMixinsI18nSupport['default'], {
    classNames: ['panel'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'panel'
     * @protected
     */
    classTypePrefix: 'panel',

    /**
     * The title of the accordion item, displayed as a .panel-title element
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * The value of the accordion item, which is used as the value of the `selected` property of the parent {{#crossLink "Components.Accordion"}}{{/crossLink}} component
     *
     * @property value
     * @public
     */
    value: _ember['default'].computed.oneWay('elementId'),

    selected: _ember['default'].computed.alias('parentView.selected'),

    collapsed: _ember['default'].computed('value', 'selected', function () {
      return this.get('value') !== this.get('selected');
    }),

    action: 'selected',

    actions: {
      toggleActive: function toggleActive() {
        var value = this.get('value'),
            previous = this.get('selected'),
            active = this.get('active');
        if (!active) {
          this.set('selected', value);
          this.sendAction('action', value, previous);
        } else {
          this.set('selected', null);
          this.sendAction('action', null, previous);
        }
      }
    }

  });
});