define('ember-bootstrap/components/bs-modal-body', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
  
   Modal body element used within {{#crossLink "Components.Modal"}}{{/crossLink}} components. See there for examples.
  
   @class ModalBody
   @namespace Components
   @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['modal-body']
  });
});