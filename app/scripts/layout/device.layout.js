/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Device = (function (_React$Component) {
  function Device() {
    _classCallCheck(this, Device);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Device, _React$Component);

  _createClass(Device, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'device' }, React.createElement(Skills, null), React.createElement(DeviceMenu, null));
    }
  }]);

  return Device;
})(React.Component);

;

var DeviceMenu = (function (_React$Component2) {
  function DeviceMenu() {
    _classCallCheck(this, DeviceMenu);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(DeviceMenu, _React$Component2);

  _createClass(DeviceMenu, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { 'class': 'device-menu' },
        React.createElement(
          'button',
          { 'show-device-menu': 'device-menu' },
          'Close'
        ),
        React.createElement(
          'button',
          { 'class': 'js-delete-device' },
          'delete device'
        )
      );
    }
  }]);

  return DeviceMenu;
})(React.Component);

;