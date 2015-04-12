/* jshint devel:true */

var dock = {

  // Lock dock default false
  lock: false,

  bind: function() {
    'use strict';

    $('.dock-lock').on('click', function() {
      dock.lock = !dock.lock ? true : false;
    });
  },

  init: (function() {
    'use strict';

    window.onload = function() {
      dock.bind();
    };
    
  }())

};