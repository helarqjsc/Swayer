/* jshint devel:true */

!(function() {

  var test = {

    bind: function() {
      'use strict';

      var $elem = $('.test');

      $elem.on('click', function() {
        audio.play($(this).index());
      });
    },

    init: (function() {
      'use strict';

      window.onload = function() {

        $('.audio').each(function(i) {
          var file = $(this).attr('audio-file');

          audio.contexts[i] = new webkitAudioContext();
          audio.setFile(i, file);
        });

        test.bind();
      };
    }())

  };
  
}())