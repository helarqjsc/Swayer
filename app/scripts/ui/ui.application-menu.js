/* jshint devel:true */

'use strict';

var ApplicationMenu = {

  render: {

    devices: ['skills', 'swayer'],

    DevicesList: function DevicesList() {
      // Append code and device name
      var code, device;

      for (var i in this.devices) {
        device = this.devices[i];
        code = '\n          <div class="col-4">\n            <div class="device-icon ' + device + '" \n              add-device="' + device + '"></div>\n            <p>\n              ' + device + '\n            </p>\n          </div>';
        $('.js-insert-devices').append(code);
      }
    } },

  /**
   * Show or hide application menu
   */
  toggle: function toggle() {
    $('body').toggleClass('show-application-menu');
  },

  /**
   * Bind
   */
  bind: function bind() {
    var _this = this;

    // Open or close menu
    $('.js-toggle-menu').on('click', function () {
      _this.toggle();
    });
  },

  /**
   * Init
   */
  init: function init() {
    var _this2 = this;

    $(window).load(function () {
      _this2.render.DevicesList();
      _this2.bind();
    });
  } };

ApplicationMenu.init();