/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Helpers = (function (_React$Component) {
  function Helpers() {
    _classCallCheck(this, Helpers);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Helpers, _React$Component);

  _createClass(Helpers, null, [{
    key: 'getRandom',
    value: function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }, {
    key: 'getRGBColor',
    value: function getRGBColor() {
      var red, green, blue, rgb;

      red = Helpers.getRandom(0, 200);
      green = Helpers.getRandom(0, 200);
      blue = Helpers.getRandom(0, 200);

      rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

      return rgb;
    }
  }]);

  return Helpers;
})(React.Component);

;