/* jshint devel:true */

'use strict';

var Dock = {

  // Lock dock default false
  lock: false,

  icon: {

    /**
     * Append device icon
     *
     * @param {Strinf} device name
     */
    append: function append(device) {
      // Code of icon
      var code = '\n      <div class="dock-icon dock-device dock-device-' + device + ' active col-2">\n        <div class="dock-icon-active-dot"></div>\n      </div>';

      // Append icon to the dock
      $('.js-device-carousel').append(code);
    } },

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