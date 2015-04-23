/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Dock = (function (_React$Component) {
  function Dock() {
    _classCallCheck(this, Dock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Dock, _React$Component);

  _createClass(Dock, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'dock container' }, React.createElement(
        'div',
        { className: 'row' },
        React.createElement(DockLockIcon, null),
        React.createElement(DockAddDeviceIcon, null),
        React.createElement(DockDevicesCarousel, null),
        React.createElement(DockApplicationMenuIcon, null)
      ));
    }
  }]);

  return Dock;
})(React.Component);

;

/**
 * Lock/unlock Dock icon
 */

var DockLockIcon = (function (_React$Component2) {
  function DockLockIcon() {
    _classCallCheck(this, DockLockIcon);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(DockLockIcon, _React$Component2);

  _createClass(DockLockIcon, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'dock-icon dock-lock col-2' });
    }
  }]);

  return DockLockIcon;
})(React.Component);

;

/**
 * Add device icon
 */

var DockAddDeviceIcon = (function (_React$Component3) {
  function DockAddDeviceIcon() {
    _classCallCheck(this, DockAddDeviceIcon);

    if (_React$Component3 != null) {
      _React$Component3.apply(this, arguments);
    }
  }

  _inherits(DockAddDeviceIcon, _React$Component3);

  _createClass(DockAddDeviceIcon, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'dock-icon dock-add-device col-2' });
    }
  }]);

  return DockAddDeviceIcon;
})(React.Component);

;

/**
 * Workspace carousel
 */

var DockDevicesCarousel = (function (_React$Component4) {
  function DockDevicesCarousel() {
    _classCallCheck(this, DockDevicesCarousel);

    if (_React$Component4 != null) {
      _React$Component4.apply(this, arguments);
    }
  }

  _inherits(DockDevicesCarousel, _React$Component4);

  _createClass(DockDevicesCarousel, [{
    key: 'render',
    value: function render() {
      return (React.createElement('section', { className: 'js-device-carousel' }), React.createElement(
        'div',
        null,
        React.createElement(DockDeviceIcon, { device: 'skills', active: 'true' }),
        React.createElement(DockDeviceIcon, { device: 'skills', active: 'false' })
      ));
    }
  }]);

  return DockDevicesCarousel;
})(React.Component);

;

/**
 * Dock device icon
 */

var DockDeviceIcon = (function (_React$Component5) {
  function DockDeviceIcon() {
    _classCallCheck(this, DockDeviceIcon);

    if (_React$Component5 != null) {
      _React$Component5.apply(this, arguments);
    }
  }

  _inherits(DockDeviceIcon, _React$Component5);

  _createClass(DockDeviceIcon, [{
    key: 'render',
    value: function render() {
      var device = this.props.device,
          elClass = 'dock-icon dock-device dock-device-' + device + ' col-2';

      return React.createElement(
        'div',
        {
          className: elClass,
          onClick: Workspace.toDevice,
          'data-device': this.props.device },
        this.props.active === 'true' ? React.createElement(DockIconIndicate, null) : null
      );
    }
  }]);

  return DockDeviceIcon;
})(React.Component);

;

var DockIconIndicate = (function (_React$Component6) {
  function DockIconIndicate() {
    _classCallCheck(this, DockIconIndicate);

    if (_React$Component6 != null) {
      _React$Component6.apply(this, arguments);
    }
  }

  _inherits(DockIconIndicate, _React$Component6);

  _createClass(DockIconIndicate, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'dock-icon-active-dot' });
    }
  }]);

  return DockIconIndicate;
})(React.Component);

;

var DockApplicationMenuIcon = (function (_React$Component7) {
  function DockApplicationMenuIcon() {
    _classCallCheck(this, DockApplicationMenuIcon);

    if (_React$Component7 != null) {
      _React$Component7.apply(this, arguments);
    }
  }

  _inherits(DockApplicationMenuIcon, _React$Component7);

  _createClass(DockApplicationMenuIcon, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', {
        className: 'dock-icon dock-menu js-toggle-menu col-2',
        onClick: ApplicationMenu.show });
    }
  }]);

  return DockApplicationMenuIcon;
})(React.Component);

;

React.render(React.createElement(Dock, null), document.getElementById('dock'));