/* jshint devel:true */

'use strict';

!(function() {
  "use strict";

  $(window).load(() => {
    $('.js-hold').on('mousedown', () => {
      $(event.target).addClass('hold');
    }).on('mouseup', () => {
      $(event.target).removeClass('hold');
    });
  });

}());