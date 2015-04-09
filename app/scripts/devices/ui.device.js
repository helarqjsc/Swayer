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
      $('*[data-js-show]').on('click', function() {
        // Get element from attr `data-js-show`
        var $showElem = $('.' + $(this).attr('data-js-show'));

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