/* jshint devel:true */

'use strict';

var Dock = {

  // Lock dock default false
  lock: false,

  /**
   * Bind
   */
  bind: function bind() {
    var _this = this;

    $('.dock-lock').on('click', function () {
      _this.lock = !_this.lock ? true : false;
    });
  },

  /**
   * Init
   */
  init: function init() {
    var _this2 = this;

    $(window).load(function () {
      _this2.bind();
    });
  } };

Dock.init();