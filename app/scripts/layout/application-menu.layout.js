/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var body = document.querySelector('body');

var ApplicationMenu = (function (_React$Component) {
  function ApplicationMenu() {
    _classCallCheck(this, ApplicationMenu);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ApplicationMenu, _React$Component);

  _createClass(ApplicationMenu, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'application-menu' }, React.createElement(ApplicationMenuCloseBtn, null));
    }
  }], [{
    key: 'show',
    value: function show() {
      body.setAttribute('class', 'show-application-menu');
    }
  }, {
    key: 'hide',
    value: function hide() {
      body.removeAttribute('class', 'show-application-menu');
    }
  }]);

  return ApplicationMenu;
})(React.Component);

;

var ApplicationMenuCloseBtn = (function (_React$Component2) {
  function ApplicationMenuCloseBtn() {
    _classCallCheck(this, ApplicationMenuCloseBtn);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(ApplicationMenuCloseBtn, _React$Component2);

  _createClass(ApplicationMenuCloseBtn, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { onClick: ApplicationMenu.hide },
        'Close'
      );
    }
  }]);

  return ApplicationMenuCloseBtn;
})(React.Component);

;

React.render(React.createElement(ApplicationMenu, null), document.getElementById('applicationMenu'));