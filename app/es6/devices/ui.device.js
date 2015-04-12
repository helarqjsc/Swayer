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
    toggle($elem) {
        $elem.toggleClass('show');
      },

  },

  /**
   * Append device
   *
   * @param {Object} append device icon of current device
   */
  append($el) {
    // Device name
    var device = $el.attr('add-device'),
      // Workspace wrap with devices
      $wrap = $('.workspace .wrap');

    $wrap.append(`
      <div class="device device-${device}">
        ${device}
      </div>`);

    Dock.icon.append(device);
    Carousel.bind();
  },

  /**
   * Remove device
   *
   * @param {Object} delete button element of current device
   */
  del($el) {
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
  bind() {

    // Event to show device menu
    $('*[show-device-menu]').on('click', () => {
      // Get element from attr `data-js-show`
      var $el = $('.' + $(event.target).attr('show-device-menu'));

      this.menu.toggle($el);
    });

    // Append device
    $('*[add-device]').on('click', () => {
      this.append($(event.target));
    });

    // Delete device event
    $('.js-delete-device').on('click', () => {
      this.del($(event.target));
    });

  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      this.bind();
    });
  },

};

Device.init();