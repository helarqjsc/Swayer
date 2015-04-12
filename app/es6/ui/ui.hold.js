/* jshint devel:true */

'use strict';

var Hold = {

  /**
   * Refresh (rebind)
   */
  refresh() {
    $('.js-hold').on('mousedown', () => {
      $(event.target).addClass('hold');
    }).on('mouseup', () => {
      $(event.target).removeClass('hold');
    });
  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      this.refresh();
    });
  },

};

Hold.init();