/* jshint devel:true */

'use strict';

!(function () {
  'use strict';

  $(window).load(function () {
    $('.js-hold').on('mousedown', function () {
      $(event.target).addClass('hold');
    }).on('mouseup', function () {
      $(event.target).removeClass('hold');
    });
  });
})();