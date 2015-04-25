/* jshint devel:true */

'use strict';

class Helpers {

  static _getRandom(max, min = 1) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static _getRGBColor() {
    var red, green, blue, rgb;

    red = Helpers._getRandom(200);
    green = Helpers._getRandom(200);
    blue = Helpers._getRandom(200);

    rgb = `rgb(${red}, ${green}, ${blue})`;

    return rgb;
  }

  static _setBGColor($elem, color) {
    $elem.css('background', color);
  }

};
