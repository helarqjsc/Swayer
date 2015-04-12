/* jshint devel:true */

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
   * Bind
   */
  bind() {

    // Event to show device menu
    $('*[show-device-menu]').on('click', () => {

      // Get element from attr `data-js-show`
      var $el = $('.' + $(this).attr('show-device-menu'));

      this.menu.toggle($el);
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