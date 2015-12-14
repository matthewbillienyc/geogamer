define('ember-bootstrap/mixins/modal-closer', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    /**
     * @class Bootstrap.SubComponent
     */
    exports['default'] = _ember['default'].Mixin.create({
        targetObject: _ember['default'].computed.alias('parentView.parentView.parentView'),
        action: 'close',
        actions: {
            close: function close() {
                this.sendAction();
            }
        }
    });
});