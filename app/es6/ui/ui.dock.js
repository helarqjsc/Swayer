/* jshint devel:true */

var Dock = {

  // Lock dock default false
  lock: false,

  /**
   * Bind
   */
  bind() {
    $('.dock-lock').on('click', () => {
      this.lock = !this.lock ? true : false;
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