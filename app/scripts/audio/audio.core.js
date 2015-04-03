/* jshint devel:true */

var audio = {

  // AudioContext sources
  sources: [],
  // AudioContext contexts
  contexts: [],
  // AudioContext buffers
  buffers: {},

  /**
   * Create WebkitAudioContext
   *
   * @param {Integer} Number of array
   */
  createContext: function(i) {
    'use strict';

    this.contexts[i] = new webkitAudioContext();
  },

  /**
   * Create WebkiaAudioContext
   *
   * @param {Integer} Number of array
   * @param {String} File name
   */
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

  /**
   * Set buffer
   *
   * @param {Object} Request
   * @param {Integer} Number of context
   */
  setBuffer: function(e, i) {
    'use strict';

    var req = e.target;

    this.buffers[req.soundName] = this.contexts[i].createBuffer(req.response, false);
  },

  /**
   * Set audio options
   *
   * Options: volume. Todo: delay, eq, pan, etc.
   *
   * @param {Integer} Number of array
   */
  setOptions: function(n) {
    'use strict';

    var vol = this.contexts[n].createGainNode();

    this.sources[n] = this.contexts[n].createBufferSource();
    this.sources[n].buffer = this.buffers[n];

    this.sources[n].connect(vol);

    vol.connect(this.contexts[n].destination);
  },

  /**
   * Play audio
   *
   * @param {Integer} Number of array
   */
  play: function(n) {
    'use strict';

    this.setOptions(n);
    this.sources[n].noteOn(0);
  },

};