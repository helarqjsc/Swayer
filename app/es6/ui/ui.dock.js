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
    append(device) {
      // Code of icon
      var code = `
      <div class="dock-icon dock-device dock-device-${device} active col-2">
        <div class="dock-icon-active-dot"></div>
      </div>`;

      // Append icon to the dock
      $('.js-device-carousel').append(code);
    },
  },

  /**
   * Bind
   */
  bind() {
    $('.dock-lock').on('click', () => {
      this.lock = !this.lock ? true : false;
      $('.dock-lock').toggleClass('lock');
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

Dock.init();