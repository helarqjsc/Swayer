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
   * Remove device
   *
   * @param {Object} delete button element of current device
   */
  del: function del($el) {
    var // Current device
    $device = $el.closest('.device'),

    // Device index
    index = $device.index(),

    // Icon in Dock
    $icon = $('.dock .dock-device').eq(index);

    // Remove device and icon
    $device.remove();
    $icon.remove();
  },

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

    // Delete device event
    $('.js-delete-device').on('click', function () {
      _this.del($(event.target));
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