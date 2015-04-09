/* jshint devel:true */

!(function() {
  'use strict';

  var device = {

    // Device setting menu
    menu: {

      /**
       * Show or hide menu
       *
       * @param {String} element class to show/hide
       */
      toggle: function($elem) {
        $elem.toggleClass('show');
      },

    },

    /**
     * Bind
     */
    bind: function() {

      // Event to show device menu
      $('*[show-device-menu]').on('click', function() {
        
        // Get element from attr `data-js-show`
        var $showElem = $('.' + $(this).attr('show-device-menu'));

        device.menu.toggle($showElem);
      });

    },

    /**
     * Init
     */
    init: (function() {

      $(window).load(function() {
        device.bind();
      });

    }())

  };

}())