/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Workspace = (function (_React$Component) {
  function Workspace() {
    _classCallCheck(this, Workspace);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Workspace, _React$Component);

  _createClass(Workspace, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'workspace' }, React.createElement(
        'div',
        { className: 'wrap' },
        React.createElement(Skills, null),
        ',',
        React.createElement(Skills, null)
      ));
    }
  }], [{
    key: 'toDevice',
    value: function toDevice() {
      var index = $(event.target).index();

      Workspace.move(index);
    }
  }, {
    key: 'move',
    value: function move(index) {
      var $wrap = $('.workspace .wrap'),
          width = $(window).width(),
          speed = 777;

      $wrap.animate({
        left: width * (index * -1)
      }, speed);
    }
  }]);

  return Workspace;
})(React.Component);

;

React.render(React.createElement(Workspace, null), document.getElementById('workspace'));