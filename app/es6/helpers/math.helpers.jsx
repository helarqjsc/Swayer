/* jshint devel:true */

'use strict';

class Helpers extends React.Component {
  static getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};