/* jshint devel:true */

'use strict';

// Fastclick
!(function () {
  'use strict';

  window.addEventListener('load', function () {
    FastClick.attach(document.body);
  }, false);
})();