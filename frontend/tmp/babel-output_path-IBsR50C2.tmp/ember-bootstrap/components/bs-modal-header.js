define('ember-bootstrap/components/bs-modal-header', ['exports', 'ember', 'ember-bootstrap/mixins/modal-closer', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapMixinsModalCloser, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  /**
  
   Modal header element used within {{#crossLink "Components.Modal"}}{{/crossLink}} components. See there for examples.
  
   @class ModalHeader
   @namespace Components
   @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsModalCloser['default'], _emberBootstrapMixinsI18nSupport['default'], {
    classNames: ['modal-header'],

    /**
     * Show a close button (x icon)
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * The title to display in the modal header
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null

  });
});