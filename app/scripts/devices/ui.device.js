/* jshint devel:true */

'use strict';

var Device = {

  // Device setting menu
  menu: {

    /**
     * Show or hide menu
     *
     * @param {String} element class to show/hide
     */
    toggle: function toggle($elem) {
      $elem.toggleClass('show');
    } },

  /**
   * Bind
   */
  bind: function bind() {
    var _this = this;

    // Event to show device menu
    $('*[show-device-menu]').on('click', function () {

      // Get element from attr `data-js-show`
      var $el = $('.' + $(event.target).attr('show-device-menu'));

      _this.menu.toggle($el);
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

Device.init();