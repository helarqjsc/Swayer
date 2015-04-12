/* jshint devel:true */

'use strict';

var Hold = {

  /**
   * Refresh (rebind)
   */
  refresh: function refresh() {
    $('.js-hold').on('mousedown', function () {
      $(event.target).addClass('hold');
    }).on('mouseup', function () {
      $(event.target).removeClass('hold');
    });
  },

  /**
   * Init
   */
  init: function init() {
    var _this = this;

    $(window).load(function () {
      _this.refresh();
    });
  } };

Hold.init();