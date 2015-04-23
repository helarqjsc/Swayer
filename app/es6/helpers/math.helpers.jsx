/* jshint devel:true */

'use strict';

class Helpers extends React.Component {

  static getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static getRGBColor() {
    var red, green, blue, rgb;

    red = Helpers.getRandom(0, 200);
    green = Helpers.getRandom(0, 200);
    blue = Helpers.getRandom(0, 200);

    rgb = `rgb(${red}, ${green}, ${blue})`;

    return rgb;
  }

};
