/* jshint devel:true */

'use strict';

var Carousel = {

  // Animate speed
  speed: 333,

  // Default device index
  deviceIndex: 0,

  /**
   * Animate to device
   *
   * @param {Integer} index of device
   */
  animate(index) {
    var // Wrap with devices
      $wrap = $('.workspace .wrap'),
      // Window width
      width = $(window).width();

    // Animate
    $wrap.animate({
      left: width * (index * -1)
    }, Carousel.speed);

    // Show indicator
    this.showIconIndicator(index);
  },

  /**
   * Show icon active indicator
   *
   * @param {Integer} index of device icon in dock
   */
  showIconIndicator(index) {
    // Show indicator on active device icon
    $('.js-device-carousel .dock-device')
      // Before hide indicators
      .removeClass('show-device-indicator')
      .eq(index).addClass('show-device-indicator');
  },

  /**
   * Bind
   */
  bind() {
    // Event to show device
    $('.js-device-carousel .dock-device').on('click', () => {
      // Animate if Dock is unlocked
      if (!Dock.lock) {
        this.animate($(event.target).index());
      }
    });
  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      this.bind();
      this.showIconIndicator(this.deviceIndex);
    });
  },

};

Carousel.init();