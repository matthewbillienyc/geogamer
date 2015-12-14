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
define('ember-bootstrap/components/bs-accordion', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   Bootstrap-style accordion group, with collapsible/expandable items.
   See http://getbootstrap.com/components/#btn-groups
  
   Use as a block level component with any number of {{#crossLink "Components.AccordionItem"}}{{/crossLink}} components as children:
  
   ```handlebars
    \{{#bs-accordion selected=selected}}
        \{{#bs-accordion-item value="1" title="First item"}}
          <p>Lorem ipsum...</p>
        \{{/bs-accordion-item}}
        \{{#bs-accordion-item value="2" title="Second item"}}
          <p>Lorem ipsum...</p>
        \{{/bs-accordion-item}}
        \{{#bs-accordion-item value="3" title="Third item"}}
          <p>Lorem ipsum...</p>
        \{{/bs-accordion-item}}
    \{{/bs-accordion}}
  
    <p>Selected accordion item: \{{selected}}</p>
   ```
  
  
   @class Accordion
   @namespace Components
   @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['panel-group'],
    ariaRole: 'tablist',

    /**
     * The value of the currently selected accordion item
     *
     * @property selected
     * @public
     */
    selected: null,

    actions: {
      selected: function selected(currentValue, previousValue) {
        this.sendAction('action', currentValue, previousValue);
      }
    }

  });
});
define('ember-bootstrap/components/bs-alert', ['exports', 'ember', 'ember-bootstrap/mixins/type-class'], function (exports, _ember, _emberBootstrapMixinsTypeClass) {
    'use strict';

    /**
     Implements Bootstrap alerts, see http://getbootstrap.com/components/#alerts
    
     By default it is a user dismissible alert with a fade out animation, both of which can be disabled. Be sure to set the
     `type` property for proper styling.
    
     ```hbs
     {{#bs-alert type="success"}}
        <strong>Well done!</strong> You successfully read this important alert message.
     {{/bs-alert}}
     ```
    
     @class Alert
     @namespace Components
     @extends Ember.Component
     @uses Mixins.TypeClass
     */
    exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsTypeClass['default'], {
        classNameBindings: ['alert', 'fade', 'in'],

        /**
         * A dismissible alert will have a close button in the upper right corner, that the user can click to dismiss
         * the alert.
         *
         * @property dismissible
         * @type boolean
         * @default true
         * @public
         */
        dismissible: true,

        /**
         * If true the alert is completely hidden. Will be set when the fade animation has finished.
         *
         * @property dismissed
         * @type boolean
         * @default false
         * @readonly
         * @protected
         */
        dismissed: false,

        /**
         * This property indicates if the alert is visible. If false it might still be in the DOM until the fade animation
         * has completed. Can be set to change the visibility of the alert box.
         *
         * @property visible
         * @type boolean
         * @default true
         * @public
         */
        visible: true,

        /**
         * Set to false to disable the fade out animation when hiding the alert.
         *
         * @property fade
         * @type boolean
         * @default true
         * @public
         */
        fade: true,

        /**
         * Computed property to set the alert class to the component div. Will be false when dismissed to have the component
         * div (which cannot be removed form DOM by the component itself) without any markup.
         *
         * @property alert
         * @type boolean
         * @private
         */
        alert: _ember['default'].computed.not('dismissed'),
        'in': _ember['default'].computed.and('visible', 'fade'),

        /**
         * @property classTypePrefix
         * @type String
         * @default 'alert'
         * @protected
         */
        classTypePrefix: 'alert',

        /**
         * The duration of the fade out animation
         *
         * @property fadeDuration
         * @type integer
         * @default 150
         * @public
         */
        fadeDuration: 150,

        actions: {
            dismiss: function dismiss() {
                this.hide();
            }
        },

        _onVisibleChange: _ember['default'].observer('visible', function () {
            if (this.get('visible')) {
                this.show();
            } else {
                this.hide();
            }
        }),

        /**
         * Call to make the alert visible again after it has been hidden
         *
         * @method show
         * @public
         */
        show: function show() {
            this.setProperties({
                dismissed: false,
                visible: true
            });
        },

        /**
         * Call to hide the alert. If the `fade` property is true, this will fade out the alert before being finally
         * dismissed.
         *
         * @method hide
         * @public
         */
        hide: function hide() {
            if (this.get('fade')) {
                this.set('visible', false);
                _ember['default'].run.later(this, function () {
                    if (!this.get('isDestroyed')) {
                        this.set('dismissed', true);
                    }
                }, this.get('fadeDuration'));
            } else {
                this.setProperties({
                    dismissed: true,
                    visible: false
                });
            }
        }

    });
});
define('ember-bootstrap/components/bs-button-group', ['exports', 'ember', 'ember-bootstrap/mixins/size-class', 'ember-bootstrap/mixins/component-parent'], function (exports, _ember, _emberBootstrapMixinsSizeClass, _emberBootstrapMixinsComponentParent) {
    'use strict';

    /**
     Bootstrap-style button group, that visually groups buttons, and optionally adds radio/checkbox like behaviour.
     See http://getbootstrap.com/components/#btn-groups
    
     Use as a block level component with any number of {{#crossLink "Components.Button"}}{{/crossLink}} components as children:
    
     ```handlebars
     {{#bs-button-group}}
        {{#bs-button}}1{{/bs-button}}
        {{#bs-button}}2{{/bs-button}}
        {{#bs-button}}3{{/bs-button}}
     {{/bs-button-group}}
     ```
    
     ### Radio-like behaviour
    
     Use the `type` property set to "radio" to make the child buttons toggle like radio buttons, i.e. only one button can be active.
     Set the `value` property of the buttons to something meaningful. The `value` property of the button group will then reflect
     the value of the active button:
    
     ```handlebars
     {{#bs-button-group value=buttonGroupValue type="radio"}}
        {{#bs-button value=1}}1{{/bs-button}}
        {{#bs-button value=2}}2{{/bs-button}}
        {{#bs-button value=3}}3{{/bs-button}}
     {{/bs-button-group}}
    
     You selected: {{buttonGroupValue}}!
     ```
    
     ### Checkbox-like behaviour
    
     Set `type` to "checkbox" to make any number of child buttons selectable. The `value` property will be an array
     of all the values of the active buttons:
    
     ```handlebars
     {{#bs-button-group value=buttonGroupValue type="checkbox"}}
        {{#bs-button value=1}}1{{/bs-button}}
        {{#bs-button value=2}}2{{/bs-button}}
        {{#bs-button value=3}}3{{/bs-button}}
     {{/bs-button-group}}
    
     You selected:
     <ul>
     {{#each value in buttonGroupValue}}
        <li>{{value}}</li>
     {{/each}}
     </ul>
     ```
    
     @class ButtonGroup
     @namespace Components
     @extends Ember.Component
     @uses Mixins.SizeClass
     */
    exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsComponentParent['default'], _emberBootstrapMixinsSizeClass['default'], {

        /**
         * @type string
         * @property ariaRole
         * @default 'group'
         * @protected
         */
        ariaRole: 'group',

        /**
         * @property classNames
         * @type array
         * @default ['btn-group']
         * @protected
         */
        classNames: ['btn-group'],

        /**
         * @property classNameBindings
         * @type array
         * @protected
         */
        classNameBindings: ['vertical:btn-group-vertical', 'justified:btn-group-justified'],

        /**
         * @property classTypePrefix
         * @type String
         * @default 'btn-group'
         * @protected
         */
        classTypePrefix: 'btn-group',

        /**
         * Set to true for a vertically stacked button group, see http://getbootstrap.com/components/#btn-groups-vertical
         *
         * @property vertical
         * @type boolean
         * @default false
         * @public
         */
        vertical: false,

        /**
         * Set to true for the buttons to stretch at equal sizes to span the entire width of its parent.
         *
         * *Important*: You have to wrap every button component in a `div class="btn-group">`:
         *
         * ```handlebars
         * <div class="btn-group" role="group">
         * {{#bs-button}}My Button{{/bs-button}}
         * </div>
         * ```
         *
         * See http://getbootstrap.com/components/#btn-groups-justified
         *
         * @property justified
         * @type boolean
         * @default false
         * @public
         */
        justified: false,

        /**
         * The type of the button group specifies how child buttons behave and how the `value` property will be computed:
         *
         * ### null
         * If `type` is not set (null), the button group will add no functionality besides Bootstrap styling
         *
         * ### radio
         * if `type` is set to "radio", the buttons will behave like radio buttons:
         * * the buttons will toggle (`toggle` property of the child buttons will be set to true)
         * * only one button may be active
         * * the `value` property of the button group will reflect the `value` property of the active button
         *
         * ### checkbox
         * if `type` is set to "checkbox", the buttons will behave like checkboxes:
         * * the buttons will toggle (`toggle` property of the child buttons will be set to true)
         * * any number of buttons may be active
         * * the `value` property of the button group will be an array containing the `value` properties of all active buttons
         *
         * @property type
         * @type string
         * @default null
         * @public
         */
        type: null,

        /**
         * The value of the button group, computed by its child buttons.
         * See the {{#crossLink "Button-Group/type:attribute"}}`type` property{{/crossLink}} for how the value property is constructed.
         *
         * When you set the value, the corresponding buttons will be activated:
         * * use a single value for a radio button group to activate the button with the same value
         * * use an array of values for a checkbox button group to activate all the buttons with values contained in the array
         *
         * @property value
         * @type array|any
         * @public
         */
        value: undefined,

        _syncValueToActiveButtons: _ember['default'].observer('value', 'children.@each.value', '_inDOM', function () {
            if (!this._inDOM) {
                return;
            }
            var value = this.get('value'),
                values = _ember['default'].A(!_ember['default'].isArray(value) ? [value] : value);
            this.get('children').forEach(function (button) {
                button.set('active', values.contains(button.get('value')));
            });
        }),

        /**
         * Child buttons that are active (pressed)
         * @property activeChildren
         * @type array
         * @protected
         */
        activeChildren: _ember['default'].computed.filterBy('children', 'active', true),

        lastActiveChildren: null,
        newActiveChildren: _ember['default'].computed.setDiff('activeChildren', 'lastActiveChildren'),
        _observeButtons: _ember['default'].observer('activeChildren.[]', 'type', function () {
            var type = this.get('type');

            if (!this._inDOM || type !== 'radio' && type !== 'checkbox') {
                return;
            }

            //var lastActiveChild = this.get('lastActiveChildren.firstObject')

            _ember['default'].run.scheduleOnce('actions', this, function () {
                // the button that just became active
                var newActive, lastActive, value;

                switch (type) {
                    case 'radio':
                        newActive = _ember['default'].A(this.get('newActiveChildren')).objectAt(0);
                        if (newActive) {
                            value = newActive.get('value');
                        } else {
                            lastActive = this.get('lastActiveChildren.firstObject');
                            if (lastActive) {
                                lastActive.set('active', true);
                            }
                        }
                        break;
                    case 'checkbox':
                        value = this.get('activeChildren').mapBy('value');
                        break;
                }
                if (value) {
                    this.set('value', value);
                }
                // remember activeChildren, used as a replacement for a before observer as they will be deprecated in the future...
                this.set('lastActiveChildren', _ember['default'].A(this.get('activeChildren').slice()));
            });
        }),

        _observeType: _ember['default'].observer('type', 'children.[]', function () {
            if (this.get('type') === 'radio' || this.get('type') === 'checkbox') {
                // set all child buttons to toggle
                this.get('children').forEach(function (button) {
                    button.set('toggle', true);
                });
            }
        }),

        init: function init() {
            this._super();
            this.set('lastActiveChildren', _ember['default'].A());
        },

        _inDOM: false,

        didInsertElement: function didInsertElement() {
            this.set('_inDOM', true);
            this.get('activeChildren');
        }
    });
});
define('ember-bootstrap/components/bs-button', ['exports', 'ember', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/mixins/size-class', 'ember-bootstrap/mixins/i18n-support', 'ember-bootstrap/mixins/component-child'], function (exports, _ember, _emberBootstrapMixinsTypeClass, _emberBootstrapMixinsSizeClass, _emberBootstrapMixinsI18nSupport, _emberBootstrapMixinsComponentChild) {
  'use strict';

  /**
   Implements a HTML button element, with support for all [Bootstrap button CSS styles](http://getbootstrap.com/css/#buttons)
   as well as advanced functionality such as button states.
  
   ### Basic Usage
  
   ```hbs
   \{{#bs-button type="primary" icon="glyphicon glyphicon-download"}}
      Downloads
   \{{/bs-button}}
   ```
  
   ### Actions
  
   Set the action property of the component to send an action to your controller. The following parameters will be sent:
   * value: the button's value, see the `value` property
   * event: the browsers event object
   * callback: a function that may be called from the action handler to supply a Promise to the button component for automatic state handling
  
   ```hbs
   \{{#bs-button type="primary" icon="glyphicon glyphicon-download" action="download"}}
      Download
   \{{/bs-button}}
   ```
  
   ### States
  
   Use the `textState` property to change the label of the button. You can bind it to a controller property to set a "loading" state for example.
   The label of the button will be taken from the `<state>Text` property.
  
   ```hbs
   \{{bs-button type="primary" icon="glyphicon glyphicon-download" textState=buttonState defaultText="Download" loadingText="Loading..." action="download"}}
   ```
  
   ```js
   App.ApplicationController = Ember.Controller.extend({
     buttonState: "default"
     actions: {
       download: function() {
         this.set("buttonState", "loading");
       }
     }
   });
   ```
  
   ### Promise support for automatic state change
  
   When using the callback function of the click action to supply a Promise for any asynchronous operation the button will
   manage its `textState` property automatically, changing its value according to the state of the promise:
   "default" > "pending" > "resolved"/"rejected"
  
   ```hbs
   \{{bs-button type="primary" icon="glyphicon glyphicon-download" defaultText="Download" pendingText="Loading..." resolvedText="Completed!" rejectedText="Oups!?" action="download"}}
   ```
  
   ```js
   App.ApplicationController = Ember.Controller.extend({
     actions: {
       download: function(actionParam, evt, cb) {
         promise = new Ember.RSVP.Promise(...);
         cb(promise);
       }
     }
   });
   ```
  
   ### I18n support
  
   Supports translateable properties if [ember-i18n](https://github.com/jamesarosen/ember-i18n) is present.
   See {{#crossLink "Mixins.I18nSupport"}}{{/crossLink}}
  
  
   @class Button
   @namespace Components
   @extends Ember.Component
   @uses Mixins.TypeClass
   @uses Mixins.SizeClass
   @uses Mixins.I18nSupport
  */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsComponentChild['default'], _emberBootstrapMixinsTypeClass['default'], _emberBootstrapMixinsSizeClass['default'], _emberBootstrapMixinsI18nSupport['default'], {
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['active', 'block:btn-block'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'btn'
     * @protected
     */
    classTypePrefix: 'btn',

    attributeBindings: ['disabled', 'buttonType:type'],

    /**
     * Default label of the button. Not need if used as a block component
     *
     * @property defaultText
     * @type string
     * @public
     */
    defaultText: null,

    /**
     * Property to disable the button
     *
     * @property disabled
     * @type boolaen
     * @default false
     * @public
     */
    disabled: false,

    /**
     * Set the type of the button, either 'button' or 'submit'
     *
     * @property buttonType
     * @type String
     * @default 'button'
     * @public
     */
    buttonType: 'button',

    /**
     * Set the 'active' class to apply active/pressed CSS styling
     *
     * @property active
     * @type boolean
     * @default false
     * @public
     */
    active: false,

    /**
     * Property for block level buttons
     *
     * See the [Bootstrap docs](http://getbootstrap.com/css/#buttons-sizes)
     * @property block
     * @type boolean
     * @default false
     * @public
     */
    block: false,

    /**
     * If toggle property is true, clicking the button will toggle the active state
     *
     * @property toggle
     * @type boolean
     * @default false
     * @public
     */
    toggle: false,

    /**
     * If button is active and this is set, the icon property will match this property
     *
     * @property iconActive
     * @type String
     * @public
     */
    iconActive: null,

    /**
     * If button is inactive and this is set, the icon property will match this property
     *
     * @property iconInactive
     * @type String
     * @public
     */
    iconInactive: null,

    /**
     * Class(es) (e.g. glyphicons or font awesome) to use as a button icon
     * This will render a <i class="{{icon}}"></i> element in front of the button's label
     *
     * @property icon
     * @type String
     * @readonly
     * @protected
     */
    icon: _ember['default'].computed('active', function () {
      if (this.get('active')) {
        return this.get('iconActive');
      } else {
        return this.get('iconInactive');
      }
    }),

    /**
     * Supply a value that will be associated with this button. This will be send
     * as a parameter of the default action triggered when clicking the button
     *
     * @property value
     * @type any
     * @public
     */
    value: null,

    /**
     * State of the button. The button's label (if not used as a block component) will be set to the
     * `<state>Text` property.
     * This property will automatically be set when using a click action that supplies the callback with an promise
     *
     * @property textState
     * @type String
     * @default 'default'
     * @protected
     */
    textState: 'default',

    /**
     * Set this to true to reset the state. A typical use case is to bind this attribute with ember-data isDirty flag.
     *
     * @property reset
     * @type boolean
     * @public
     */
    reset: null,

    /**
     * This will reset the state property to 'default', and with that the button's label to defaultText
     *
     * @method resetState
     * @protected
     */
    resetState: function resetState() {
      this.set('textState', 'default');
    },

    resetObserver: _ember['default'].observer('reset', function () {
      if (this.get('reset')) {
        _ember['default'].run.scheduleOnce('actions', this, function () {
          this.set('textState', 'default');
        });
      }
    }),

    text: _ember['default'].computed('textState', 'defaultText', 'pendingText', 'resolvedText', 'rejectedText', function () {
      return this.getWithDefault(this.get('textState') + 'Text', this.get('defaultText'));
    }),

    /**
     * Click handler. This will send the default "action" action, with the following parameters:
     * * value of the button (that is the value of the "value" property)
     * * original event object of the click event
     * * callback: call that with a promise object, and the buttons state will automatically set to "pending", "resolved" and/or "rejected"
     *
     * @method click
     * @protected
     * @param evt
     */
    click: function click(evt) {
      if (this.get('toggle')) {
        this.toggleProperty('active');
      }
      var that = this;
      var callback = function callback(promise) {
        if (promise) {
          that.set('textState', 'pending');
          promise.then(function () {
            if (!that.get('isDestroyed')) {
              that.set('textState', 'resolved');
            }
          }, function () {
            if (!that.get('isDestroyed')) {
              that.set('textState', 'rejected');
            }
          });
        }
      };
      this.sendAction('action', this.get('value'), evt, callback);
    },

    init: function init() {
      this._super();
      this.get('reset');
    }

  });
});
define('ember-bootstrap/components/bs-collapse', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   An Ember component that mimics the behaviour of Bootstrap's collapse.js plugin, see http://getbootstrap.com/javascript/#collapse
  
   ```hbs
   {{#bs-collapse collapsed=collapsed}}
    <div class="well">
      <h2>Collapse</h2>
      <p>This is collapsible content</p>
    </div>
   {{/bs-collapse}}
   ```
  
   @class Collapse
   @namespace Components
   @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({

    classNameBindings: ['collapse', 'in', 'collapsing'],
    attributeBindings: ['style'],

    /**
     * Collapsed/expanded state
     *
     * @property collapsed
     * @type boolean
     * @default true
     * @public
     */
    collapsed: true,

    /**
     * True if this item is expanded
     *
     * @property active
     * @protected
     */
    active: false,

    collapse: _ember['default'].computed.not('transitioning'),
    collapsing: _ember['default'].computed.alias('transitioning'),
    'in': _ember['default'].computed.and('collapse', 'active'),

    /**
     * true if the component is currently transitioning
     *
     * @property transitioning
     * @type boolean
     * @protected
     */
    transitioning: false,

    /**
     * @property collapseSize
     * @type number
     * @protected
     */
    collapseSize: null,

    /**
     * The size of the element when collapsed. Defaults to 0.
     *
     * @property collapsedSize
     * @type number
     * @default 0
     * @public
     */
    collapsedSize: 0,

    /**
     * The size of the element when expanded. When null the value is calculated automatically to fit the containing elements.
     *
     * @property expandedSize
     * @type number
     * @default null
     * @public
     */
    expandedSize: null,

    /**
     * Usually the size (height) of the element is only set while transitioning, and reseted afterwards. Set to true to always set a size.
     *
     * @property resetSizeWhenNotCollapsing
     * @type boolean
     * @default true
     * @private
     */
    resetSizeWhenNotCollapsing: true,

    /**
     * The direction (height/width) of the collapse animation.
     * When setting this to 'width' you should also define custom CSS transitions for the width property, as the Bootstrap
     * CSS does only support collapsible elements for the height direction.
     *
     * @property collapseDimension
     * @type string
     * @default 'height'
     * @public
     */
    collapseDimension: 'height',

    style: _ember['default'].computed('collapseSize', function () {
      var size = this.get('collapseSize'),
          dimension = this.get('collapseDimension');
      if (_ember['default'].isEmpty(size)) {
        return new _ember['default'].Handlebars.SafeString('');
      }
      return new _ember['default'].Handlebars.SafeString(dimension + ': ' + size + 'px');
    }),

    /**
     * Triggers the show transition
     * 
     * @method show
     * @protected
     */
    show: function show() {
      var complete = function complete() {
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.sendAction('didShow');
      };

      this.sendAction('willShow');

      this.setProperties({
        transitioning: true,
        collapseSize: this.get('collapsedSize'),
        active: true
      });

      if (!_ember['default'].$.support.transition) {
        return complete.call(this);
      }

      this.$().one('bsTransitionEnd', _ember['default'].run.bind(this, complete))
      // @todo: make duration configurable
      .emulateTransitionEnd(350);

      _ember['default'].run.next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.getExpandedSize('show'));
        }
      });
    },

    /**
     * Get the size of the element when expanded
     *
     * @method getExpandedSize
     * @param $action
     * @returns number
     * @private
     */
    getExpandedSize: function getExpandedSize($action) {
      var expandedSize = this.get('expandedSize');
      if (_ember['default'].isPresent(expandedSize)) {
        return expandedSize;
      }

      var collapseElement = this.$(),
          prefix = $action === 'show' ? 'scroll' : 'offset',
          measureProperty = _ember['default'].String.camelize(prefix + '-' + this.get('collapseDimension'));
      return collapseElement[0][measureProperty];
    },

    /**
     * Triggers the hide transition
     *
     * @method hide
     * @protected
     */
    hide: function hide() {

      var complete = function complete() {
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.sendAction('didHide');
      };

      this.sendAction('willHide');

      this.setProperties({
        transitioning: true,
        collapseSize: this.getExpandedSize('hide'),
        active: false
      });

      if (!_ember['default'].$.support.transition) {
        return complete.call(this);
      }

      this.$().one('bsTransitionEnd', _ember['default'].run.bind(this, complete))
      // @todo: make duration configurable
      .emulateTransitionEnd(350);

      _ember['default'].run.next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.get('collapsedSize'));
        }
      });
    },

    _onCollapsedChange: _ember['default'].observer('collapsed', function () {
      var collapsed = this.get('collapsed'),
          active = this.get('active');
      if (collapsed !== active) {
        return;
      }
      if (collapsed === false) {
        this.show();
      } else {
        this.hide();
      }
    }),

    _onInit: _ember['default'].on('init', function () {
      this.set('active', !this.get('collapsed'));
    }),

    _updateCollapsedSize: _ember['default'].observer('collapsedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('collapsedSize'));
      }
    }),

    _updateExpandedSize: _ember['default'].observer('expandedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && !this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('expandedSize'));
      }
    })

  });
});
define('ember-bootstrap/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _emberBootstrapComponentsBsButton, _emberBootstrapMixinsDropdownToggle) {
  'use strict';

  /**
   Button component with that can act as a dropdown toggler.
  
   See {{#crossLink "Components.Dropdown"}}{{/crossLink}} for examples.
  
   @class DropdownButton
   @namespace Components
   @extends Components.Button
   @uses Mixins.DropdownToggle
   */
  exports['default'] = _emberBootstrapComponentsBsButton['default'].extend(_emberBootstrapMixinsDropdownToggle['default']);
});
define('ember-bootstrap/components/bs-dropdown-menu', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   Component for the dropdown menu.
  
   See {{#crossLink "Components.Dropdown"}}{{/crossLink}} for examples.
  
   @class DropdownMenu
   @namespace Components
   @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({

    /**
     * Defaults to a `<ul>` tag. Change for other types of dropdown menus.
     *
     * @property tagName
     * @type string
     * @default ul
     * @public
     */
    tagName: 'ul',
    classNames: ['dropdown-menu'],
    classNameBindings: ['alignClass'],

    /**
     * @property ariaRole
     * @default menu
     * @type string
     * @protected
     */
    ariaRole: 'menu',

    /**
     * Alignment of the menu, either "left" or "right"
     *
     * @property align
     * @type string
     * @default left
     * @public
     */
    align: 'left',

    alignClass: _ember['default'].computed('align', function () {
      if (this.get('align') !== 'left') {
        return 'dropdown-menu-' + this.get('align');
      }
    })

  });
});
define('ember-bootstrap/components/bs-dropdown-toggle', ['exports', 'ember', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _ember, _emberBootstrapMixinsDropdownToggle) {
    'use strict';

    /**
     Anchor element that triggers the parent dropdown to open.
     Use {{#crossLink "Components.DropdownButton"}}{{/crossLink}} if you want a button instead of an anchor tag.
    
     See {{#crossLink "Components.Dropdown"}}{{/crossLink}} for examples.
    
    
     @class DropdownToggle
     @namespace Components
     @extends Ember.Component
     @uses Mixins.DropdownToggle
     */
    exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsDropdownToggle['default'], {
        /**
         * Defaults to a `<a>` tag. Change for other types of dropdown toggles.
         *
         * @property tagName
         * @type string
         * @default a
         * @public
         */
        tagName: 'a',

        attributeBindings: ['href'],

        /**
         * Computed property to generate a `href="#"` attribute when `tagName` is "a".
         *
         * @property href
         * @type string
         * @readonly
         * @protected
         */
        href: _ember['default'].computed('tagName', function () {
            if (this.get('tagName').toUpperCase() === 'A') {
                return '#';
            }
        }),

        click: function click(e) {
            e.preventDefault();
            this.sendAction();
        }

    });
});
define('ember-bootstrap/components/bs-dropdown', ['exports', 'ember', 'ember-bootstrap/components/bs-dropdown-button', 'ember-bootstrap/mixins/component-parent'], function (exports, _ember, _emberBootstrapComponentsBsDropdownButton, _emberBootstrapMixinsComponentParent) {
    'use strict';

    /**
     Bootstrap style dropdown menus, consisting of a toggle element, and the dropdown menu itself.
     See http://getbootstrap.com/components/#dropdowns
    
     Use this component together with two sub components, a dropdown toggle (`Components.DropdownToggle` or
     `Components.DropdownButton` component) and a dropdown menu (`Components.DropdownMenu`) component:
    
     ```hbs
     <nav class="navbar navbar-default navbar-static">
       <div class="container-fluid">
         <ul class="nav navbar-nav">
           {{#bs-dropdown tagName="li"}}
             {{#bs-dropdown-toggle}}Dropdown <span class="caret"></span>{{/bs-dropdown-toggle}}
             {{#bs-dropdown-menu}}
               <li>{{#link-to "index"}}Something{{/link-to}}</li>
               <li>{{#link-to "index"}}Something different{{/link-to}}</li>
             {{/bs-dropdown-menu}}
           {{/bs-dropdown}}
         </ul>
       </div>
     </nav>
     ```
    
     ### Button dropdowns
    
     To use a button as the dropdown toggle element (see http://getbootstrap.com/components/#btn-dropdowns), use the
     `Components.DropdownButton` component as the toggle:
    
     ```hbs
     {{#bs-dropdown}}
       {{#bs-dropdown-button}}Dropdown <span class="caret"></span>{{/bs-dropdown-button}}
       {{#bs-dropdown-menu}}
         <li>{{#link-to "index"}}Something{{/link-to}}</li>
         <li>{{#link-to "index"}}Something different{{/link-to}}</li>
       {{/bs-dropdown-menu}}
     {{/bs-dropdown}}
     ```
    
     It has all the functionality of a `Components.Button` with additional dropdown support.
    
     ### Split button dropdowns
    
     To have a regular button with a dropdown button as in http://getbootstrap.com/components/#btn-dropdowns-split, use a
     `Components.Button` component and a `Components.DropdownButton`:
    
     ```hbs
     {{#bs-dropdown}}
       {{#bs-button}}Dropdown{{/bs-button}}
       {{#bs-dropdown-button}}Dropdown <span class="caret"></span>{{/bs-dropdown-button}}
       {{#bs-dropdown-menu}}
         <li>{{#link-to "index"}}Something{{/link-to}}</li>
         <li>{{#link-to "index"}}Something different{{/link-to}}</li>
       {{/bs-dropdown-menu}}
     {{/bs-dropdown}}
     ```
    
     @class Dropdown
     @namespace Components
     @extends Ember.Component
     */
    exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsComponentParent['default'], {
        classNameBindings: ['open', 'containerClass'],

        /**
         * This property reflects the state of the dropdown, whether it is open or closed.
         *
         * @property open
         * @default false
         * @type boolean
         * @public
         */
        open: false,

        /**
         * By default clicking on an open dropdown menu will close it. Set this property to false for the menu to stay open.
         *
         * @property closeOnMenuClick
         * @default true
         * @type boolean
         * @public
         */
        closeOnMenuClick: true,

        /**
         * jQuery click event name, namespaced to this component's instance to prevent interference between multiple dropdowns.
         *
         * @property clickEventName
         * @type string
         * @private
         */
        clickEventName: undefined,

        /**
         * A computed property to generate the suiting class for the dropdown container, either "dropdown" or "btn-group".
         *
         * @property containerClass
         * @type string
         * @readonly
         * @protected
         */
        containerClass: _ember['default'].computed('toggleType', function () {
            return this.get('toggleType') === 'button' ? 'btn-group' : 'dropdown';
        }),

        /**
         * This property is "button" if the toggle element is an instance of {{#crossLink "Components.DropdownButton"}}{{/crossLink}}, otherwise "toggle".
         *
         * @property toggleType
         * @type string
         * @readonly
         * @protected
         */
        toggleType: _ember['default'].computed('children.[]', function () {
            if (this.get('children').any(function (view) {
                return view instanceof _emberBootstrapComponentsBsDropdownButton['default'];
            })) {
                return 'button';
            }
            return 'toggle';
        }),

        actions: {
            toggleDropdown: function toggleDropdown() {
                this.toggleProperty('open');
            },

            openDropdown: function openDropdown() {
                this.set('open', true);
            },

            closeDropdown: function closeDropdown() {
                this.set('open', false);
            }
        },

        handleClickEvents: _ember['default'].observer('open', function () {
            if (this.get('open')) {
                _ember['default'].$(document).on(this.clickEventName, _ember['default'].run.bind(this, this.closeOnClickHandler));
            } else {
                _ember['default'].$(document).off(this.clickEventName);
            }
        }),

        willDestroyElement: function willDestroyElement() {
            _ember['default'].$(document).off(this.clickEventName);
        },

        init: function init() {
            this._super();
            // click event name that is namespaced to our component instance, so multiple dropdowns do not interfere
            // with each other
            this.clickEventName = 'click.' + this.get('elementId');
        },

        /**
         * Handler for click events to close the dropdown
         *
         * @method closeOnClickHandler
         * @param e
         * @protected
         */
        closeOnClickHandler: function closeOnClickHandler(e) {
            var $target = _ember['default'].$(e.target);
            if (!this.get('isDestroyed') && $target.closest(this.$().find('.dropdown-toggle')).length === 0 && ($target.closest(this.$().find('.dropdown-menu')).length === 0 || this.get('closeOnMenuClick'))) {
                this.set('open', false);
            }
        }
    });
});
define('ember-bootstrap/components/bs-form-element', ['exports', 'ember', 'ember-bootstrap/components/bs-form-group', 'ember-bootstrap/components/bs-form', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapComponentsBsFormGroup, _emberBootstrapComponentsBsForm, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  var nonTextFieldControlTypes = _ember['default'].A(['checkbox', 'select', 'select2', 'textarea']);

  /**
   Sub class of `Components.FormGroup` that adds automatic form layout markup and form validation features.
  
   ### Form layout
  
   The appropriate Bootstrap markup for the given `formLayout` and `controlType` is automatically generated to easily
   create forms without coding the default Bootstrap form markup by hand:
  
   ```hbs
   \{{#bs-form formLayout="horizontal" action="submit"}}
     \{{bs-form-element controlType="email" label="Email" placeholder="Email" value=email}}
     \{{bs-form-element controlType="password" label="Password" placeholder="Password" value=password}}
     \{{bs-form-element controlType="checkbox" label="Remember me" value=rememberMe}}
     \{{bs-button defaultText="Submit" type="primary" buttonType="submit"}}
   \{{/bs-form}}
   ```
  
   ### Form validation
  
   In the following example the control elements of the three form elements value will be bound to the properties
   (given by `property`) of the form's `model`, which in this case is its controller (see `model=this`):
  
   ```hbs
   \{{#bs-form formLayout="horizontal" model=this action="submit"}}
     \{{bs-form-element controlType="email" label="Email" placeholder="Email" property="email"}}
     \{{bs-form-element controlType="password" label="Password" placeholder="Password" property="password"}}
     \{{bs-form-element controlType="checkbox" label="Remember me" property="rememberMe"}}
     \{{bs-button defaultText="Submit" type="primary" buttonType="submit"}}
   \{{/bs-form}}
   ```
  
   By using this indirection in comparison to directly binding the `value` property, you get the benefit of automatic
   form validation, given that your `model` is implementing [ember-validations](https://github.com/dockyard/ember-validations).
  
   In the example above the `model` was our controller itself, so the control elements were bound to the appropriate
   properties of our controller. A controller implementing validations on those properties could look like this:
  
   ```js
   import Ember from 'ember';
   import EmberValidations from 'ember-validations';
  
   export default Ember.Controller.extend(EmberValidations,{
     email: null,
     password: null,
     rememberMe: false,
     validations: {
       email: {
         presence: true,
         format: {
           with: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
         }
       },
       password: {
         presence: true,
         length: { minimum: 6, maximum: 10}
       },
       comments: {
         length: { minimum: 5, maximum: 20}
       }
     }
   });
   ```
  
   If the `showValidation` property is `true` (which is automatically the case if a `focusOut` event is captured from the
   control element or the containing `Components.Form` was submitted with its `model` failing validation) and there are
   validation errors for the `model`'s `property`, the appropriate Bootstrap validation markup (see
   http://getbootstrap.com/css/#forms-control-validation) is applied:
  
   * `validation` is set to 'error', which will set the `has-error` CSS class
   * the `errorIcon` feedback icon is displayed if `controlType` is a text field
   * the validation messages are displayed as Bootstrap `help-block`s
  
   As soon as the validation is successful again...
  
   * `validation` is set to 'success', which will set the `has-success` CSS class
   * the `successIcon` feedback icon is displayed if `controlType` is a text field
   * the validation messages are removed
  
   ### I18n support
  
   Supports translateable properties if [ember-i18n](https://github.com/jamesarosen/ember-i18n) is present.
   See {{#crossLink "Mixins.I18nSupport"}}{{/crossLink}}
  
  
   @class FormElement
   @namespace Components
   @extends Components.FormGroup
   @uses Mixins.I18nSupport
   */
  exports['default'] = _emberBootstrapComponentsBsFormGroup['default'].extend(_emberBootstrapMixinsI18nSupport['default'], {
    /**
     * Text to display within a `<label>` tag.
     *
     * @property label
     * @type string
     * @public
     */
    label: null,

    /**
     * The type of the control widget.
     * Supported types:
     *
     * * 'text'
     * * 'checkbox'
     * * 'select'
     * * 'select2' (needs [ember-select-2](https://github.com/iStefo/ember-select-2))
     * * 'textarea'
     * * any other type will use an input tag with the `controlType` value as the type attribute (for e.g. HTML5 input
     * types like 'email'), and the same layout as the 'text' type
     *
     * @property controlType
     * @type string
     * @public
     */
    controlType: 'text',

    /**
     * The value of the control element is bound to this property. You can bind it to some controller property to
     * get/set the control element's value:
     *
     * ```hbs
     * {{bs-form-element controlType="email" label="Email" placeholder="Email" value=email}}
     * ```
     *
     * Note: you loose the ability to validate this form element by directly binding to its value. It is recommended
     * to use the `property` feature instead.
     *
     *
     * @property value
     * @public
     */
    value: null,

    /**
     The property name of the form element's `model` (by default the `model` of its parent `Components.Form`) that this
     form element should represent. The control element's value will automatically be bound to the model property's
     value.
      Using this property enables form validation on this element.
      @property property
     @type string
     @public
     */
    property: null,

    /**
     * Control element's HTML5 placeholder attribute
     *
     * @property placeholder
     * @type string
     * @public
     */
    placeholder: null,

    /**
     * Control element's name attribute
     *
     * @property name
     * @type string
     * @public
     */
    name: null,

    /**
     * An array of objects containing the selection of choices for multiple choice style form controls, e.g. select
     * boxes.
     *
     * ```hbs
     * {{bs-form-element controlType="select" choices=countries choiceLabelProperty="name" choiceValueProperty="id" label="Country" value=selectedCountry}}
     * ```
     *
     * Be sure to also set the `choiceValueProperty` and `choiceLabelProperty` properties.
     *
     * @property choices
     * @type array
     * @public
     */
    choices: _ember['default'].A(),

    /**
     * The property of the `choices` array of objects, containing the value of the choice, e.g. the select box option.
     *
     * @property choiceValueProperty
     * @type string
     * @public
     */
    choiceValueProperty: null,

    /**
     * The property of the `choices` array of objects, containing the label of the choice, e.g. the select box option.
     *
     * @property choiceLabelProperty
     * @type string
     * @public
     */
    choiceLabelProperty: null,

    /**
     * Textarea's rows attribute (ignored for other `controlType`s)
     *
     * @property rows
     * @type integer
     * @default 5
     * @public
     */
    rows: 5,

    /**
     * Textarea's cols attribute (ignored for other `controlType`s)
     *
     * @property cols
     * @type integer
     * @public
     */
    cols: null,

    /**
     * The model used for validation. Defaults to the parent `Components.Form`'s `model`
     *
     * @property model
     * @public
     */
    model: _ember['default'].computed.alias('form.model'),

    /**
     * The array of error messages from the `model`'s validation.
     *
     * @property errors
     * @type array
     * @protected
     */
    errors: null,

    /**
     * @property hasErrors
     * @type boolean
     * @readonly
     * @protected
     */
    hasErrors: _ember['default'].computed.gt('errors.length', 0),

    /**
     * @property hasValidator
     * @type boolean
     * @readonly
     * @protected
     */
    hasValidator: _ember['default'].computed.notEmpty('model.validate'),

    /**
     * If `true` form validation markup is rendered (requires a validatable `model`).
     *
     * @property showValidation
     * @type boolean
     * @default false
     * @public
     */
    showValidation: false,

    /**
     * @property showErrors
     * @type boolean
     * @readonly
     * @protected
     */
    showErrors: _ember['default'].computed.and('showValidation', 'hasErrors'),

    /**
     * The validation ("error" or "success") or null if no validation is to be shown. Automatically computed from the
     * models validation state.
     *
     * @property validation
     * @readonly
     * @type string
     * @protected
     */
    validation: _ember['default'].computed('hasErrors', 'hasValidator', 'showValidation', function () {
      if (!this.get('showValidation') || !this.get('hasValidator')) {
        return null;
      }
      return this.get('hasErrors') ? 'error' : 'success';
    }),

    /**
     * @property hasLabel
     * @type boolean
     * @readonly
     * @protected
     */
    hasLabel: _ember['default'].computed.notEmpty('label'),

    /**
     * True for text field `controlType`s
     *
     * @property useIcons
     * @type boolean
     * @readonly
     * @public
     */
    useIcons: _ember['default'].computed('controlType', function () {
      return !nonTextFieldControlTypes.contains(this.get('controlType'));
    }),

    /**
     * The form layout used for the markup generation (see http://getbootstrap.com/css/#forms):
     *
     * * 'horizontal'
     * * 'vertical'
     * * 'inline'
     *
     * Defaults to the parent `form`'s `formLayout` property.
     *
     * @property formLayout
     * @type string
     * @public
     */
    formLayout: _ember['default'].computed.alias('form.formLayout'),

    /**
     * @property isVertical
     * @type boolean
     * @readonly
     * @protected
     */
    isVertical: _ember['default'].computed.equal('formLayout', 'vertical'),

    /**
     * @property isHorizontal
     * @type boolean
     * @readonly
     * @protected
     */
    isHorizontal: _ember['default'].computed.equal('formLayout', 'horizontal'),

    /**
     * @property isInline
     * @type boolean
     * @readonly
     * @protected
     */
    isInline: _ember['default'].computed.equal('formLayout', 'inline'),

    /**
     * The Bootstrap grid class for form labels within a horizontal layout form. Defaults to the value of the same
     * property of the parent form. The corresponding grid class for form controls is automatically computed.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @default 'col-md-4'
     * @public
     */
    horizontalLabelGridClass: _ember['default'].computed.oneWay('form.horizontalLabelGridClass'),

    /**
     * Computed property that specifies the Bootstrap grid class for form controls within a horizontal layout form.
     *
     * @property horizontalInputGridClass
     * @type string
     * @readonly
     * @protected
     */
    horizontalInputGridClass: _ember['default'].computed('horizontalLabelGridClass', function () {
      var parts = this.get('horizontalLabelGridClass').split('-');
      _ember['default'].assert('horizontalInputGridClass must match format bootstrap grid column class', parts.length === 3);
      parts[2] = 12 - parts[2];
      return parts.join('-');
    }),

    /**
     * Computed property that specifies the Bootstrap offset grid class for form controls within a horizontal layout
     * form, that have no label.
     *
     * @property horizontalInputOffsetGridClass
     * @type string
     * @readonly
     * @protected
     */
    horizontalInputOffsetGridClass: _ember['default'].computed('horizontalLabelGridClass', function () {
      var parts = this.get('horizontalLabelGridClass').split('-');
      parts.splice(2, 0, 'offset');
      return parts.join('-');
    }),

    /**
     * Reference to the parent `Components.Form` class.
     *
     * @property form
     * @protected
     */
    form: _ember['default'].computed(function () {
      return this.nearestOfType(_emberBootstrapComponentsBsForm['default']);
    }),

    layoutName: _ember['default'].computed('formLayout', 'controlType', function () {
      var formLayout = this.getWithDefault('formLayout', 'vertical'),
          inputLayout,
          controlType = this.get('controlType');

      switch (true) {
        case nonTextFieldControlTypes.contains(controlType):
          inputLayout = controlType;
          break;
        default:
          inputLayout = 'default';
      }

      return 'components/form-element/' + formLayout + '/' + inputLayout;
    }),

    _rerender: _ember['default'].observer('layoutName', function () {
      this.rerender();
    }),

    /**
     * Listen for focusOut events from the control element to automatically set `showValidation` to true to enable
     * form validation markup rendering.
     *
     * @event focusOut
     */
    focusOut: function focusOut() {
      this.set('showValidation', true);
    },

    init: function init() {
      this._super();
      if (!_ember['default'].isBlank(this.get('property'))) {
        _ember['default'].Binding.from("model." + this.get('property')).to('value').connect(this);
        _ember['default'].Binding.from("model.errors." + this.get('property')).to('errors').connect(this);
      }
    }
  });
});
define('ember-bootstrap/components/bs-form-group', ['exports', 'ember', 'ember-bootstrap/config'], function (exports, _ember, _emberBootstrapConfig) {
  'use strict';

  /**
   This component renders a `<div class="form-group">` element, with support for validation states and feedback icons.
   Use as a block level component:
  
   ```hbs
   {{#bs-form-group validation=firstNameValidation}}
      <label class="control-label">First name</label>
      {{bs-input type="text" value=firstname}}
   {{/bs-form-group}}
   ```
  
   If the `validation` property is set to some state (usually Bootstrap's predefined states "success",
   "warning" or "error"), the appropriate styles will be added, together with a feedback icon.
   See http://getbootstrap.com/css/#forms-control-validation
  
   @class FormGroup
   @namespace Components
   @extends Ember.Component
  */
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['form-group'],
    classNameBindings: ['validationClass', 'hasFeedback'],

    /**
     * Whether to show validation state icons.
     * See http://getbootstrap.com/css/#forms-control-validation
     *
     * @property useIcons
     * @type boolean
     * @default true
     * @public
     */
    useIcons: true,

    /**
     * Computed property which is true if the form group is in a validation state
     *
     * @property hasValidation
     * @type boolean
     * @public
     * @readonly
     */
    hasValidation: _ember['default'].computed.notEmpty('validation'),

    /**
     * Computed property which is true if the form group is showing a validation icon
     *
     * @property hasFeedback
     * @type boolean
     * @public
     * @readonly
     */
    hasFeedback: _ember['default'].computed.and('hasValidation', 'useIcons', 'hasIconForValidationState'),

    /**
     * The icon classes to be used for a feedback icon in a "success" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationSuccessIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
     *   formValidationSuccessIcon: 'fa fa-check'
     * }
     * ```
     *
     * @property successIcon
     * @type string
     * @default 'glyphicon glyphicon-ok'
     * @public
     */
    successIcon: _emberBootstrapConfig['default'].formValidationSuccessIcon,

    /**
     * The icon classes to be used for a feedback icon in a "error" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationErrorIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
     *   formValidationErrorIcon: 'fa fa-times'
     * }
     * ```
     *
     * @property errorIcon
     * @type string
     * @public
     */
    errorIcon: _emberBootstrapConfig['default'].formValidationErrorIcon,

    /**
     * The icon classes to be used for a feedback icon in a "warning" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationWarningIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
     *   formValidationWarningIcon: 'fa fa-warning'
     * }
     * ```
     *
     * @property warningIcon
     * @type string
     * @public
     */
    warningIcon: _emberBootstrapConfig['default'].formValidationWarningIcon,

    /**
     * The icon classes to be used for a feedback icon in a "info" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationInfoIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
     *   formValidationInfoIcon: 'fa fa-info-circle
     * }
     * ```
     *
     * The "info" validation state is not supported in Bootstrap CSS, but can be easily added
     * using the following LESS style:
     * ```less
     * .has-info {
     *   .form-control-validation(@state-info-text; @state-info-text; @state-info-bg);
     * }
     * ```
     *
     * @property infoIcon
     * @type string
     * @public
     */
    infoIcon: _emberBootstrapConfig['default'].formValidationInfoIcon,

    iconName: _ember['default'].computed('validation', function () {
      var validation = this.get('validation') || 'success';
      return this.get(validation + 'Icon');
    }),

    hasIconForValidationState: _ember['default'].computed.notEmpty('iconName'),

    /**
     * Set to a validation state to render the form-group with a validation style.
     * See http://getbootstrap.com/css/#forms-control-validation
     *
     * The default states of "success", "warning" and "error" are supported by Bootstrap out-of-the-box.
     * But you can use custom states as well. This will set a has-<state> class, and (if `useIcons`is true)
     * a feedback whose class is taken from the <state>Icon property
     *
     * @property validation
     * @type string
     * @public
     */
    validation: null,

    validationClass: _ember['default'].computed('validation', function () {
      var validation = this.get('validation');
      if (!_ember['default'].isBlank(validation)) {
        return 'has-' + this.get('validation');
      }
    })
  });
});
define('ember-bootstrap/components/bs-form', ['exports', 'ember', 'ember-bootstrap/components/bs-form-element'], function (exports, _ember, _emberBootstrapComponentsBsFormElement) {
    'use strict';

    /**
     Render a form with the appropriate Bootstrap layout class (see `formLayout`).
     Allows setting a `model` that nested `Components.FormElement`s can access, and that can provide form validation through
     [ember-validations](https://github.com/dockyard/ember-validations)
    
     You can use whatever markup you like within the form:
    
     ```hbs
     {{#bs-form action="submit"}}
       {{#bs-form-group validation=firstNameValidation}}
         <label class="control-label">First name</label>
         {{bs-input type="text" value=firstname}}
       {{/bs-form-group}}
     {{/bs-form}}
     ```
    
     However to benefit from features such as automatic form markup, validations and validation markup, use `Components.FormElement`
     as nested components. See below for an example.
    
     ### Submitting the form
    
     When the form is submitted (e.g. by clicking a submit button), the event will be intercepted and the default action
     will be sent to the controller.
     When an [ember-validations](https://github.com/dockyard/ember-validations) validated model is supplied, validations
     rules are evaluated before, and if those fail, the "invalid" action is sent instead of the default "action".
    
     ### Use with Components.FormElement
    
     When using `Components.FormElement`s with their `property` set to property names of the form's validation enabled
     `model`, you gain some additional powerful features:
     * the appropriate Bootstrap markup for the given `formLayout` and the form element's `controlType` is automatically generated
     * markup for validation states and error messages is generated based on the model's validation, when submitting the form
     with an invalid validation, or when focusing out of invalid inputs
    
     ```hbs
     {{#bs-form formLayout="horizontal" model=this action="submit"}}
       {{bs-form-element controlType="email" label="Email" placeholder="Email" property="email"}}
       {{bs-form-element controlType="password" label="Password" placeholder="Password" property="password"}}
       {{bs-form-element controlType="checkbox" label="Remember me" property="rememberMe"}}
       {{bs-button defaultText="Submit" type="primary" buttonType="submit"}}
     {{/bs-form}}
     ```
    
     See the `Components.FormElement` API docs for further information.
    
     @class Form
     @namespace Components
     @extends Ember.Component
    */
    exports['default'] = _ember['default'].Component.extend({
        tagName: 'form',
        classNameBindings: ['layoutClass'],
        ariaRole: 'form',

        /**
         * Bootstrap form class name (computed)
         *
         * @property layoutClass
         * @type string
         * @readonly
         * @protected
         *
         */
        layoutClass: _ember['default'].computed('formLayout', function () {
            var layout = this.get('formLayout');
            return layout === 'vertical' ? 'form' : 'form-' + layout;
        }),

        /**
         * Set a model that this form should represent. This serves several purposes:
         *
         * * child `Components.FormElement`s can access and bind to this model by their `property`
         * * when the model supports validation by using the [ember-validations](https://github.com/dockyard/ember-validations) mixin,
         * child `Components.FormElement`s will look at the validation information of their `property` and render their form group accordingly.
         * Moreover the form's `submit` event handler will validate the model and deny submitting if the model is not validated successfully.
         *
         * @property model
         * @type Ember.Object
         * @public
         */
        model: null,

        /**
         * Set the layout of the form to either "vertical", "horizontal" or "inline". See http://getbootstrap.com/css/#forms-inline and http://getbootstrap.com/css/#forms-horizontal
         *
         * @property formLayout
         * @type string
         * @public
         */
        formLayout: 'vertical',

        /**
         * Check if the `model` has a validate method, i.e. supports validation by using [ember-validations](https://github.com/dockyard/ember-validations)
         *
         * @property hasValidator
         * @type boolean
         * @readonly
         * @protected
         */
        hasValidator: _ember['default'].computed.notEmpty('model.validate'),

        /**
         * The Bootstrap grid class for form labels. This is used by the `Components.FormElement` class as a default for the
         * whole form.
         *
         * @property horizontalLabelGridClass
         * @type string
         * @default 'col-md-4'
         * @public
         */
        horizontalLabelGridClass: 'col-md-4',

        /**
         * If set to true pressing enter will submit the form, even if no submit button is present
         *
         * @property submitOnEnter
         * @type boolean
         * @default false
         * @public
         */
        submitOnEnter: false,

        /**
         * An array of `Components.FormElement`s that are children of this form.
         *
         * @property childFormElements
         * @type Array
         * @readonly
         * @protected
         */
        childFormElements: _ember['default'].computed.filter('childViews', function (view) {
            return view instanceof _emberBootstrapComponentsBsFormElement['default'];
        }),

        /**
         * Submit handler that will send the default action ("action") to the controller when submitting the form.
         *
         * If there is a supplied `model` that supports validation (`hasValidator`) the model will be validated before, and
         * only if validation is successful the default action will be sent. Otherwise an "invalid" action will be sent, and
         * all the `showValidation` property of all child `Components.FormElement`s will be set to true, so error state and
         * messages will be shown automatically.
         *
         * @event submit
         */
        submit: function submit(e) {
            var that = this;
            if (e) {
                e.preventDefault();
            }
            if (!this.get('hasValidator')) {
                return this.sendAction();
            } else {
                return this.get('model').validate().then(function () {
                    if (that.get('model.isValid')) {
                        return that.sendAction();
                    }
                })['catch'](function () {
                    that.get('childFormElements').setEach('showValidation', true);
                    return that.sendAction('invalid');
                });
            }
        },

        keyPress: function keyPress(e) {
            var code = e.keyCode || e.which;
            if (code === 13 && this.get('submitOnEnter')) {
                this.$().submit();
            }
        }
    });
});
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
define('ember-bootstrap/components/bs-modal-dialog', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /*
    Internal component for modal's markup and event handling. Should not be used directly.
  
    @class ModalDialog
    @namespace Components
    @extends Ember.Component
    @private
  */
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['modal'],
    classNameBindings: ['fade', 'in'],
    attributeBindings: ['tabindex'],
    ariaRole: 'dialog',
    tabindex: '-1',

    /**
     * The title of the modal, visible in the modal header. Is ignored if `header` is false.
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * Display a close button (x icon) in the corner of the modal header.
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Used to apply Bootstrap's "in" class
     *
     * @property in
     * @type boolean
     * @default false
     * @private
     */
    'in': false,

    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    keyboard: true,

    /**
     * Generate a modal header component automatically. Set to false to disable. In this case you would want to include an
     * instance of {{#crossLink "Components.ModalHeader"}}{{/crossLink}} in the components block template
     *
     * @property header
     * @type boolean
     * @default true
     * @public
     */
    header: true,

    /**
     * Generate a modal body component automatically. Set to false to disable. In this case you would want to include an
     * instance of {{#crossLink "Components.ModalBody"}}{{/crossLink}} in the components block template.
     *
     * Always set this to false if `header` and/or `footer` is false!
     *
     * @property header
     * @type boolean
     * @default true
     * @public
     */
    body: true,

    /**
     * Generate a modal footer component automatically. Set to false to disable. In this case you would want to include an
     * instance of {{#crossLink "Components.ModalFooter"}}{{/crossLink}} in the components block template
     *
     * @property header
     * @type boolean
     * @default true
     * @public
     */
    footer: true,

    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    backdropClose: true,

    /**
     * Name of the size class
     *
     * @property sizeClass
     * @type string
     * @private
     */
    sizeClass: _ember['default'].computed('size', function () {
      var size = this.get('size');
      return _ember['default'].isBlank(size) ? null : 'modal-' + size;
    }),

    keyDown: function keyDown(e) {
      var code = e.keyCode || e.which;
      if (code === 27 && this.get('keyboard')) {
        this.sendAction('close');
      }
    },

    click: function click(e) {

      if (e.target !== e.currentTarget || !this.get('backdropClose')) {
        return;
      }

      this.sendAction('close');
    }

  });
});
define('ember-bootstrap/components/bs-modal-footer', ['exports', 'ember', 'ember-bootstrap/mixins/modal-closer', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapMixinsModalCloser, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  /**
  
   Modal footer element used within {{#crossLink "Components.Modal"}}{{/crossLink}} components. See there for examples.
  
   @class ModalFooter
   @namespace Components
   @extends Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsModalCloser['default'], _emberBootstrapMixinsI18nSupport['default'], {
    tagName: 'form',
    classNames: ['modal-footer'],

    /**
     * The title of the default close button. Will be ignored (i.e. no close button) if you provide your own block
     * template.
     *
     * @property closeTitle
     * @type string
     * @default 'Ok'
     * @public
     */
    closeTitle: 'Ok',

    /**
     * The title of the submit button (primary button). Will be ignored (i.e. no button) if set to null or if you provide
     * your own block template.
     *
     * @property submitTitle
     * @type string
     * @default null
     * @public
     */
    submitTitle: null,

    hasSubmitButton: _ember['default'].computed.notEmpty('submitTitle'),

    /**
     * Set to true to disable the submit button. If you bind this to some property that indicates if submitting is allowed
     * (form validation for example) this can be used to prevent the user from pressing the submit button.
     *
     * @property submitDisabled
     * @type boolean
     * @default false
     * @public
     */
    submitDisabled: false,

    /**
     * The action to send to the parent modal component when the modal footer's form is submitted
     *
     * @property submitAction
     * @type string
     * @default 'submit'
     * @private
     */
    submitAction: 'submit',

    submit: function submit(e) {
      e.preventDefault();
      // send to parent bs-modal component
      this.sendAction('submitAction');
    }

  });
});
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
define('ember-bootstrap/components/bs-modal', ['exports', 'ember', 'ember-bootstrap/mixins/i18n-support'], function (exports, _ember, _emberBootstrapMixinsI18nSupport) {
  'use strict';

  var Modal = {};

  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;

  var observeOpen = function observeOpen() {
    if (this.get('open')) {
      this.show();
    } else {
      this.hide();
    }
  };

  /**
  
   Component for creating [Bootstrap modals](http://getbootstrap.com/javascript/#modals). Creating a simple modal is easy:
  
   ```hbs
   {{#bs-modal title="Simple Dialog"}}
     Hello world!
   {{/bs-modal}}
   ```
  
   This will automatically create the appropriate markup, with a modal header containing the title, and a footer containing
   a default "Ok" button, that will close the modal automatically (unless you set `autoClose` to false).
  
   A modal created this way will be visible at once. You can use the `{{#if ...}}` helper to hide all modal elements form
   the DOM until needed. Or you can bind the `open` property to trigger showing and hiding the modal:
  
   ```hbs
   {{#bs-modal open=openModal title="Simple Dialog"}}
     Hello world!
   {{/bs-modal}}
   ```
  
   ### Custom Markup
  
   To customize your modal markup you can use the following sub components:
  
   {{#crossLink "Components.ModalBody"}}{{/crossLink}}
   {{#crossLink "Components.ModalHeader"}}{{/crossLink}}
   {{#crossLink "Components.ModalFooter"}}{{/crossLink}}
  
   In the example above, these are generated for you automatically. Whenever you use one of these by yourself you should
   set the appropriate property (`body`, `footer`, `header`) to false to prevent their automatic generation. Note that
   in any case where you use a custom sub component, you must also use a custom {{#crossLink "Components.ModalBody"}}{{/crossLink}}!
  
   A common use case is to customize the buttons in the footer. Most often you will have a cancel button that closes the
   model without action, and a submit button that triggers some action. The footer component supports this case by letting
   you customize the button titles, the rest (triggering close or submit actions) automatically set up:
  
   ```hbs
   {{#bs-modal body=false footer=false title="Attention" submitAction=(action "submit")}}
     {{#bs-modal-body}}Are you sure?{{/bs-modal-body}}
     {{bs-modal-footer closeTitle="Cancel" submitTitle="Ok"}}
   {{/bs-modal}}
   ```
  
   If you further want to customize your modal elements, you can supply custom templates for your footer and header, as in
   the following example:
  
   ```hbs
   {{#bs-modal body=false footer=false header=false submitAction=(action "submit")}}
     {{#bs-modal-header}}
       <h4 class="modal-title"><i class="glyphicon glyphicon-alert"></i> Alert</h4>
     {{/bs-modal-header}}
     {{#bs-modal-body}}Are you absolutely sure you want to do that???{{/bs-modal-body}}
     {{#bs-modal-footer as |footer|}}
       {{#bs-button action=(action "close" target=footer) type="danger"}}Oh no, forget it!{{/bs-button}}
       {{#bs-button buttonType="submit" type="success"}}Yeah!{{/bs-button}}
     {{/bs-modal-footer}}
   {{/bs-modal}}
   ```
  
   Note the use of the action helper of the close button that triggers the close action on the modal footer component
   instead of on the controller, which will bubble up to the modal component and close the modal.
  
   ### Modals with forms
  
   There is a special case when you have a form inside your modals body: you probably do not want to have a submit button
   within your form but instead in your modal footer. Hover pressing the submit button outside of your form would not
   trigger the form data to be submitted. In the example below this would not trigger the submit action of the form, an
   thus bypass the form validation feature of the form component.
  
   ```hbs
   {{#bs-modal title="Form Example" body=false footer=false}}
     {{#bs-modal-body}}
       {{#bs-form action=(action "submit") model=this}}
         {{bs-form-element controlType="text" label="first name" property="firstname"}}
         {{bs-form-element controlType="text" label="last name" property="lastname"}}
       {{/bs-form}}
     {{/bs-modal-body}}
     {{bs-modal-footer closeTitle=(t "contact.label.cancel") submitTitle=(t "contact.label.ok")}}
   {{/bs-modal}}
   ```
  
   The modal component supports this common case by triggering the submit event programmatically on the body's form if
   present whenever the footer's submit button is pressed, so the example above will work as expected.
  
   ### Modals inside wormhole
  
   Modals make use of the [ember-wormhole](https://github.com/yapplabs/ember-wormhole) addon, which will be installed
   automatically alongside ember-bootstrap. This is used to allow the modal to be placed in deeply nested
   components/templates where it belongs to logically, but to have the actual DOM elements within a special container
   element, which is a child of ember's root element. This will make sure that modals always overlay the whole app, and
   are not effected by parent elements with `overflow: hidden` for example.
  
   @class Modal
   @namespace Components
   @extends Ember.Component
  */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsI18nSupport['default'], {

    /**
     * Visibility of the modal. Toggle to to show/hide with CSS transitions.
     *
     * @property open
     * @type boolean
     * @default true
     * @public
     */
    open: true,

    /**
     * The title of the modal, visible in the modal header. Is ignored if `header` is false.
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * Display a close button (x icon) in the corner of the modal header.
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Used to apply Bootstrap's "in" class
     *
     * @property in
     * @type boolean
     * @default false
     * @private
     */
    'in': false,

    /**
     * Use a semi-transparent modal background to hide the rest of the page.
     *
     * @property backdrop
     * @type boolean
     * @default true
     * @public
     */
    backdrop: true,

    /**
     * @property showBackdrop
     * @type boolean
     * @default false
     * @private
     */
    showBackdrop: false,

    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    keyboard: true,

    /**
     * If true clicking a close button will hide the modal automatically.
     * If you want to handle hiding the modal by yourself, you can set this to false and use the closeAction to
     * implement your custom logic.
     *
     * @property autoClose
     * @type boolean
     * @default true
     * @public
     */
    autoClose: true,

    /**
     * Generate a modal header component automatically. Set to false to disable. In this case you would want to include an
     * instance of {{#crossLink "Components.ModalHeader"}}{{/crossLink}} in the components block template
     *
     * @property header
     * @type boolean
     * @default true
     * @public
     */
    header: true,

    /**
     * Generate a modal body component automatically. Set to false to disable. In this case you would want to include an
     * instance of {{#crossLink "Components.ModalBody"}}{{/crossLink}} in the components block template.
     *
     * Always set this to false if `header` and/or `footer` is false!
     *
     * @property header
     * @type boolean
     * @default true
     * @public
     */
    body: true,

    /**
     * Generate a modal footer component automatically. Set to false to disable. In this case you would want to include an
     * instance of {{#crossLink "Components.ModalFooter"}}{{/crossLink}} in the components block template
     *
     * @property header
     * @type boolean
     * @default true
     * @public
     */
    footer: true,

    /**
     * The id of the `.modal` element.
     *
     * @property modalId
     * @type string
     * @readonly
     * @private
     */
    modalId: _ember['default'].computed('elementId', function () {
      return this.get('elementId') + '-modal';
    }),

    /**
     * The jQuery object of the `.modal` element.
     *
     * @property modalElement
     * @type object
     * @readonly
     * @private
     */
    modalElement: _ember['default'].computed('modalId', function () {
      return _ember['default'].$('#' + this.get('modalId'));
    }).volatile(),

    /**
     * The id of the backdrop element.
     *
     * @property backdropId
     * @type string
     * @readonly
     * @private
     */
    backdropId: _ember['default'].computed('elementId', function () {
      return this.get('elementId') + '-backdrop';
    }),

    /**
     * The jQuery object of the backdrop element.
     *
     * @property backdropElement
     * @type object
     * @readonly
     * @private
     */
    backdropElement: _ember['default'].computed('backdropId', function () {
      return _ember['default'].$('#' + this.get('backdropId'));
    }).volatile(),

    /**
     * Use CSS transitions when showing/hiding the modal?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    usesTransition: _ember['default'].computed('fade', function () {
      return _ember['default'].$.support.transition && this.get('fade');
    }),

    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    backdropClose: true,

    /**
     * The action to be sent when the modal footer's submit button (if present) is pressed.
     * Note that if your modal body contains a form (e.g. {{#crossLink "Components.Form"}}{{/crossLink}}) this action will
     * not be triggered. Instead a submit event will be triggered on the form itself. See the class description for an
     * example.
     *
     * @property submitAction
     * @type string
     * @default null
     * @public
     */
    submitAction: null,

    /**
     * The action to be sent when the modal is closing.
     * This will be triggered by pressing the modal header's close button (x button) or the modal footer's close button.
     * Note that this will happen before the modal is hidden from the DOM, as the fade transitions will still need some
     * time to finish. Use the `closedAction` if you need the modal to be hidden when the action triggers.
     *
     * You can set `autoClose` to false to prevent closing the modal automatically, and do that in your closeAction by
     * setting `open` to false.
     *
     * @property closeAction
     * @type string
     * @default null
     * @public
     */
    closeAction: null,

    /**
     * The action to be sent after the modal has been completely hidden (including the CSS transition).
     *
     * @property closedAction
     * @type string
     * @default null
     * @public
     */
    closedAction: null,

    /**
     * The action to be sent after the modal has been completely shown (including the CSS transition).
     *
     * @property openedAction
     * @type string
     * @default null
     * @public
     */
    openedAction: null,

    actions: {
      close: function close() {

        if (this.get('autoClose')) {
          this.set('open', false);
        }
        this.sendAction('closeAction');
      },
      submit: function submit() {
        var form = this.get('modalElement').find('.modal-body form');
        if (form.length > 0) {
          // trigger submit event on body form
          form.trigger('submit');
        } else {
          // if we have no form, we send a submit action
          this.sendAction('submitAction');
        }
      }

    },

    _observeOpen: _ember['default'].observer('open', observeOpen),

    /**
     * Show the modal
     *
     * @method show
     * @private
     */
    show: function show() {

      //this.checkScrollbar()
      //this.setScrollbar()

      _ember['default'].$('body').addClass('modal-open');

      this.resize();

      var callback = function callback() {

        this.get('modalElement').show().scrollTop(0);

        this.handleUpdate();

        //if (transition) {
        //    that.$element[0].offsetWidth // force reflow
        //}

        this.set('in', true);

        //this.enforceFocus()

        if (this.get('usesTransition')) {
          this.get('modalElement').one('bsTransitionEnd', _ember['default'].run.bind(this, function () {
            this.get('modalElement').trigger('focus');
          })).emulateTransitionEnd(Modal.TRANSITION_DURATION);
        } else {
          this.get('modalElement').trigger('focus');
        }

        this.sendAction('openedAction');
      };
      _ember['default'].run.scheduleOnce('afterRender', this, this.handleBackdrop, callback);
    },

    /**
     * Hide the modal
     *
     * @method hide
     * @private
     */
    hide: function hide() {

      this.resize();

      this.set('in', false);

      if (this.get('usesTransition')) {
        this.get('modalElement').one('bsTransitionEnd', _ember['default'].run.bind(this, this.hideModal)).emulateTransitionEnd(Modal.TRANSITION_DURATION);
      } else {
        this.hideModal();
      }
    },

    /**
     * Clean up after modal is hidden and call closedAction
     *
     * @method hideModal
     * @private
     */
    hideModal: function hideModal() {
      this.get('modalElement').hide();
      this.handleBackdrop(function () {
        _ember['default'].$('body').removeClass('modal-open');
        //that.resetAdjustments()
        //that.resetScrollbar()
        //that.trigger('hidden');

        this.sendAction('closedAction');
      });
    },

    /**
     * SHow/hide the backdrop
     *
     * @method handleBackdrop
     * @param callback
     * @private
     */
    handleBackdrop: function handleBackdrop(callback) {
      var doAnimate = this.get('usesTransition');

      if (this.get('open') && this.get('backdrop')) {
        this.set('showBackdrop', true);

        if (!callback) {
          return;
        }

        var waitForFade = function waitForFade() {
          var $backdrop = this.get('backdropElement');
          _ember['default'].assert('Backdrop element should be in DOM', $backdrop && $backdrop.length > 0);

          if (doAnimate) {
            $backdrop.one('bsTransitionEnd', _ember['default'].run.bind(this, callback)).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION);
          } else {
            callback.call(this);
          }
        };

        _ember['default'].run.scheduleOnce('afterRender', this, waitForFade);
      } else if (!this.get('open') && this.get('backdrop')) {
        var $backdrop = this.get('backdropElement');
        _ember['default'].assert('Backdrop element should be in DOM', $backdrop && $backdrop.length > 0);

        var callbackRemove = function callbackRemove() {
          this.set('showBackdrop', false);
          if (callback) {
            callback.call(this);
          }
        };
        if (doAnimate) {
          $backdrop.one('bsTransitionEnd', _ember['default'].run.bind(this, callbackRemove)).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback.call(this);
      }
    },

    /**
     * Attach/Detach resize event listeners
     *
     * @method resize
     * @private
     */
    resize: function resize() {
      if (this.get('open')) {
        _ember['default'].$(window).on('resize.bs.modal', _ember['default'].run.bind(this, this.handleUpdate));
      } else {
        _ember['default'].$(window).off('resize.bs.modal');
      }
    },

    handleUpdate: function handleUpdate() {
      this.adjustDialog();
    },

    adjustDialog: function adjustDialog() {
      //var modalIsOverflowing = this.get('element')[0].scrollHeight > document.documentElement.clientHeight;
      //
      //this.get('element').css({
      //    paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      //    paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
      //});
    },

    didInsertElement: function didInsertElement() {

      if (this.get('open')) {
        this.show();
      }
    },

    willDestroyElement: function willDestroyElement() {
      _ember['default'].$(window).off('resize.bs.modal');
      _ember['default'].$('body').removeClass('modal-open');
    }

  });
});
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
define('ember-bootstrap/config', ['exports'], function (exports) {
    'use strict';

    var Config = {
        formValidationSuccessIcon: 'glyphicon glyphicon-ok',
        formValidationErrorIcon: 'glyphicon glyphicon-remove',
        formValidationWarningIcon: 'glyphicon glyphicon-warning-sign',
        formValidationInfoIcon: 'glyphicon glyphicon-info-sign',

        load: function load(config) {
            for (var property in this) {
                if (this.hasOwnProperty(property) && typeof this[property] !== 'function' && typeof config[property] !== 'undefined') {
                    this[property] = config[property];
                }
            }
        }
    };

    exports['default'] = Config;
});
define('ember-bootstrap/helpers/is-equal', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.isEqual = isEqual;

  function isEqual(params) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(isEqual);
});
define('ember-bootstrap/helpers/is-not', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.isNot = isNot;

  function isNot(params /*, hash*/) {
    return !params[0];
  }

  exports['default'] = _ember['default'].Helper.helper(isNot);
});
define('ember-bootstrap/helpers/read-path', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.readPath = readPath;

  function readPath(params /*, hash*/) {
    return _ember['default'].get(params[0], params[1]);
  }

  exports['default'] = _ember['default'].Helper.helper(readPath);
});
define('ember-bootstrap/initializers/modals-container', ['exports'], function (exports) {
  /*globals document */
  'use strict';

  var hasDOM = typeof document !== 'undefined';

  function appendContainerElement(rootElementId, id) {
    if (!hasDOM) {
      return;
    }

    var rootEl = document.querySelector(rootElementId);
    var modalContainerEl = document.createElement('div');
    modalContainerEl.id = id;
    rootEl.appendChild(modalContainerEl);
  }

  function initialize() {
    var application = arguments[1] || arguments[0];
    var modalContainerElId = 'ember-bootstrap-modal-container';
    appendContainerElement(application.rootElement, modalContainerElId);
  }

  exports['default'] = {
    name: 'modals-container',
    initialize: initialize
  };
});
define('ember-bootstrap/mixins/component-child', ['exports', 'ember', 'ember-bootstrap/mixins/component-parent'], function (exports, _ember, _emberBootstrapMixinsComponentParent) {
  'use strict';

  /**
   * Mixin for components that act as a child component in a parent-child relationship of components
   *
   * @class ComponentChild
   * @namespace Mixins
   */
  exports['default'] = _ember['default'].Mixin.create({

    _didInsertElement: _ember['default'].on('didInsertElement', function () {
      var parent = this.nearestOfType(_emberBootstrapMixinsComponentParent['default']);
      if (parent) {
        parent.registerChild(this);
      }
    }),

    _willDestroyElement: _ember['default'].on('willDestroyElement', function () {
      var parent = this.nearestOfType(_emberBootstrapMixinsComponentParent['default']);
      if (parent) {
        parent.removeChild(this);
      }
    })

  });
});
define('ember-bootstrap/mixins/component-parent', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * Mixin for components that act as a parent component in a parent-child relationship of components
   *
   * @class ComponentParent
   * @namespace Mixins
   */
  exports['default'] = _ember['default'].Mixin.create({

    /**
     * Array of registered child components
     *
     * @property children
     * @type array
     * @protected
     */
    children: null,

    _onInit: _ember['default'].on('init', function () {
      this.set('children', _ember['default'].A());
    }),

    /**
     * Register a component as a child of this parent
     *
     * @method registerChild
     * @param child
     * @public
     */
    registerChild: function registerChild(child) {
      _ember['default'].run.schedule('sync', this, function () {
        this.get('children').addObject(child);
      });
    },

    /**
     * Remove the child component from this parent component
     *
     * @method removeChild
     * @param child
     * @public
     */
    removeChild: function removeChild(child) {
      this.get('children').removeObject(child);
    }
  });
});
define('ember-bootstrap/mixins/dropdown-toggle', ['exports', 'ember', 'ember-bootstrap/mixins/component-child'], function (exports, _ember, _emberBootstrapMixinsComponentChild) {
  'use strict';

  /**
   * Mixin for components that act as dropdown toggles.
   *
   * @class DropdownToggle
   * @namespace Mixins
   */
  exports['default'] = _ember['default'].Mixin.create(_emberBootstrapMixinsComponentChild['default'], {
    classNames: ['dropdown-toggle'],
    attributeBindings: ['data-toggle'],
    /**
     * @property ariaRole
     * @default button
     * @type string
     * @protected
     */
    ariaRole: 'button',

    'data-toggle': 'dropdown',

    targetObject: _ember['default'].computed.alias('parentView'),

    /**
     * The default action is set to "toggleDropdown" on the parent {{#crossLink "Components.Dropdown"}}{{/crossLink}}
     *
     * @property action
     * @default toggleDropdown
     * @type string
     * @protected
     */
    action: 'toggleDropdown'
  });
});
define('ember-bootstrap/mixins/i18n-support', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    /**
     Mixin for internationalization support.
    
     Currently supported is only [ember-i18n](https://github.com/jamesarosen/ember-i18n):
     If Ember.I18n is present, this mixin will simply export `Ember.I18n.TranslateableProperties`, maiking all
     components that use this mixin inherit the translateable properties functionality of `Ember.I18n.TranslateableProperties`.
     See https://github.com/jamesarosen/ember-i18n#translate-properties-on-any-object.
    
     ```hbs
     {{bs-button defaultTextTranslation="label.translated"}}
     ```
    
     @class I18nSupport
     @namespace Mixins
     */

    var Mixin;

    switch (true) {
        case _ember['default'].isPresent(_ember['default'].I18n):
            Mixin = _ember['default'].I18n.TranslateableProperties;
            break;
        default:
            Mixin = _ember['default'].Mixin.create();
    }

    exports['default'] = Mixin;
});
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
define('ember-bootstrap/mixins/size-class', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * Mixin to set the appropriate class for components with different sizes.
   *
   *
   * @class SizeClass
   * @namespace Mixins
   */
  exports['default'] = _ember['default'].Mixin.create({
    /**
     * Prefix for the size class, e.g. "btn" for button size classes ("btn-lg", "btn-sm" etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: null,
    classNameBindings: ['sizeClass'],
    sizeClass: _ember['default'].computed('size', function () {
      var prefix = this.get('classTypePrefix'),
          size = this.get('size');
      return _ember['default'].isBlank(size) ? null : prefix + '-' + size;
    }),

    /**
     * Property for size styling, set to 'lg', 'sm' or 'xs'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null
  });
});
define('ember-bootstrap/mixins/sub-component', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @class SubComponent
   * @namespace Mixins
   */
  exports['default'] = _ember['default'].Mixin.create({
    targetObject: _ember['default'].computed.alias('parentView')
  });
});
define('ember-bootstrap/mixins/type-class', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * Mixin to set the appropriate class for components with differently styled types ("success", "danger" etc.)
   *
   * @class TypeClass
   * @namespace Mixins
   */
  exports['default'] = _ember['default'].Mixin.create({
    /**
     * Prefix for the type class, e.g. "btn" for button type classes ("btn-primary2 etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: null,
    classNameBindings: ['typeClass'],
    typeClass: _ember['default'].computed('type', function () {
      var prefix = this.get('classTypePrefix'),
          type = this.get('type') || 'default';
      return prefix + '-' + type;
    }),

    /**
     * Property for type styling
     *
     * For the available types see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-options) (use without "btn-" prefix)
     *
     * @property type
     * @type String
     * @default 'default'
     * @public
     */
    type: 'default'
  });
});
define('ember-bootstrap', ['ember-bootstrap/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-cli-app-version/components/app-version', ['exports', 'ember', 'ember-cli-app-version/templates/app-version'], function (exports, _ember, _emberCliAppVersionTemplatesAppVersion) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',
    layout: _emberCliAppVersionTemplatesAppVersion['default']
  });
});
define('ember-cli-app-version/initializer-factory', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = initializerFactory;

  var classify = _ember['default'].String.classify;

  function initializerFactory(name, version) {
    var registered = false;

    return function () {
      if (!registered && name && version) {
        var appName = classify(name);
        _ember['default'].libraries.register(appName, version);
        registered = true;
      }
    };
  }
});
define("ember-cli-app-version/templates/app-version", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modules/ember-cli-app-version/templates/app-version.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "version", ["loc", [null, [1, 0], [1, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-cli-app-version', ['ember-cli-app-version/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-cli-content-security-policy', ['ember-cli-content-security-policy/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-wormhole/components/ember-wormhole', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;
  var observer = _ember['default'].observer;
  var run = _ember['default'].run;

  exports['default'] = _ember['default'].Component.extend({
    to: computed.alias('destinationElementId'),
    destinationElementId: null,
    destinationElement: computed('destinationElementId', 'renderInPlace', function () {
      return this.get('renderInPlace') ? this.element : document.getElementById(this.get('destinationElementId'));
    }),
    renderInPlace: false,

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._firstNode = this.element.firstChild;
      this._lastNode = this.element.lastChild;
      this.appendToDestination();
    },

    willDestroyElement: function willDestroyElement() {
      var _this = this;

      this._super.apply(this, arguments);
      var firstNode = this._firstNode;
      var lastNode = this._lastNode;
      run.schedule('render', function () {
        _this.removeRange(firstNode, lastNode);
      });
    },

    destinationDidChange: observer('destinationElement', function () {
      var destinationElement = this.get('destinationElement');
      if (destinationElement !== this._firstNode.parentNode) {
        run.schedule('render', this, 'appendToDestination');
      }
    }),

    appendToDestination: function appendToDestination() {
      var destinationElement = this.get('destinationElement');
      if (!destinationElement) {
        var destinationElementId = this.get('destinationElementId');
        if (destinationElementId) {
          throw new Error('ember-wormhole failed to render into \'#' + this.get('destinationElementId') + '\' because the element is not in the DOM');
        }
        throw new Error('ember-wormhole failed to render content because the destinationElementId was set to an undefined or falsy value.');
      }
      this.appendRange(destinationElement, this._firstNode, this._lastNode);
    },

    appendRange: function appendRange(destinationElement, firstNode, lastNode) {
      while (firstNode) {
        destinationElement.insertBefore(firstNode, null);
        firstNode = firstNode !== lastNode ? lastNode.parentNode.firstChild : null;
      }
    },

    removeRange: function removeRange(firstNode, lastNode) {
      var node = lastNode;
      do {
        var next = node.previousSibling;
        if (node.parentNode) {
          node.parentNode.removeChild(node);
          if (node === firstNode) {
            break;
          }
        }
        node = next;
      } while (node);
    }

  });
});
define('ember-wormhole', ['ember-wormhole/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});
//# sourceMappingURL=addons.map