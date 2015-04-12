/* jshint devel:true */

var ApplicationMenu = {

  render: {

    devices: ['skills', 'swayer'],

    DevicesList() {
      var code, device;

      for (var i in this.devices) {
          device = this.devices[i];
          code = `<div class="col-4">
          <div class="device-icon ${device}"></div>
          <p>
            ${device}
          </p>
        </div>`;
        $('.js-insert-devices').append(code);
      }
    },

  },

  /**
   * Show or hide application menu
   */
  toggle() {
    $('body').toggleClass('show-application-menu');
  },

  /**
   * Bind
   */
  bind() {
    // Open or close menu
    $('.js-toggle-menu').on('click', () => {
      this.toggle();
    });
  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      this.render.DevicesList();
      this.bind();
    });
  },

};

ApplicationMenu.init();