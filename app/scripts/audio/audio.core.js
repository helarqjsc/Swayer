/* jshint devel:true */

var audio = {

  // AudioContext sources
  sources: [],
  // AudioContext contexts
  contexts: [],
  // AudioContext buffers
  buffers: {},

  setFile: function(num, file) {
    'use strict';
    
    var req = [];

    req[num] = new XMLHttpRequest();
    req[num].soundName = num;
    req[num].open('GET', 'samples/' + file, true);
    req[num].responseType = 'arraybuffer';

    req[num].addEventListener('load', function(e) {
      audio.setBuffer(e, num);
    }, false);

    req[num].send();
  },

  setBuffer: function(e, i) {
    'use strict';

    var req = e.target;

    this.buffers[req.soundName] = this.contexts[i].createBuffer(req.response, false);
  },

  setOptions: function(n) {
    'use strict';

    var vol = this.contexts[n].createGainNode();

    this.sources[n] = this.contexts[n].createBufferSource();
    this.sources[n].buffer = this.buffers[n];

    this.sources[n].connect(vol);

    vol.connect(this.contexts[n].destination);
  },

  play: function(n) {
    'use strict';

    setTimeout(function() {
      audio.setOptions(n);
      audio.sources[n].noteOn(0);
    }, 10);
  },

};