/* jshint devel:true */

!(function() {
  'use strict';

  var carousel = {

    // Animate speed
    speed: 333,

    // Default device index
    deviceIndex: 0,

    /**
     * Animate to device
     *
     * @param {Integer} index of device
     */
    animate: function(index) {
      var // Wrap with devices
        $wrap = $('.workspace .wrap'),
        // Window width
        width = $(window).width();

      // Animate
      $wrap.animate({
        left: width * (index * -1)
      }, carousel.speed);

      // Show indicator
      this.showIconIndicator(index);
    },

    /**
     * Show icon active indicator
     *
     * @param {Integer} index of device icon in dock
     */
    showIconIndicator: function(index) {
      // Show indicator on active device icon
      $('.js-device-carousel .dock-device')
        // Before hide indicators
        .removeClass('show-device-indicator')
        .eq(index).addClass('show-device-indicator');
    },

    /**
     * Bind
     */
    bind: function() {

      // Event to show device
      $('.js-device-carousel .dock-device').on('click', function() {
        carousel.animate($(this).index());
      });

    },

    /**
     * Init
     */
    init: (function() {

      $(window).load(function() {
        carousel.bind();
        carousel.showIconIndicator(carousel.deviceIndex);
      });

    }())

  };

}())