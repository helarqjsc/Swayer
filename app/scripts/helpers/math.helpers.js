/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Helpers = (function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, null, [{
    key: '_getRandom',
    value: function _getRandom(max) {
      var min = arguments[1] === undefined ? 1 : arguments[1];

      return Math.floor(Math.random() * (max - min)) + min;
    }
  }, {
    key: '_getRGBColor',
    value: function _getRGBColor() {
      var red, green, blue, rgb;

      red = Helpers._getRandom(200);
      green = Helpers._getRandom(200);
      blue = Helpers._getRandom(200);

      rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

      return rgb;
    }
  }, {
    key: '_setBGColor',
    value: function _setBGColor($elem, color) {
      $elem.css('background', color);
    }
  }]);

  return Helpers;
})();

;