/* jshint devel:true */

'use strict';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var Audio = {

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
  createContext(i) {
    this.contexts.push(new webkitAudioContext());
    // this.contexts[i] = new webkitAudioContext();
  },

  /**
   * Create WebkiaAudioContext
   *
   * @param {Integer} Number of array
   * @param {String} File name
   */
  setFile(num, file) {
    var req = [];

    req[num] = new XMLHttpRequest();
    req[num].soundName = num;
    req[num].open('GET', 'samples/' + file, true);
    req[num].responseType = 'arraybuffer';

    req[num].addEventListener('load', function(e) {
      Audio.setBuffer(e, num);
    }, false);

    req[num].send();
  },

  /**
   * Set buffer
   *
   * @param {Object} Request
   * @param {Integer} Number of context
   */
  setBuffer(e, i) {
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
  setOptions(n) {
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
  play(n, loop) {
    this.setOptions(n);
    this.sources[n].loop = loop;
    this.sources[n].noteOn(0);
  },

  /**
   * Stop audio
   *
   * @param {Integer} Number of array
   */
  stop(n) {
    this.sources[n].noteOff(0);
  },

  /**
   * Refresh (rebind) audio
   */
  refresh() {
    // Clear
    Audio.contexts.length = 0;

    // For each audio element
    $('.audio').each(function(i) {
      var file = $(this).attr('data-audio-file');

      // Create context...
      Audio.createContext(i);

      // ...and set file
      Audio.setFile(i, file);
    });
  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      this.refresh();
    });
  }
};

Audio.init();