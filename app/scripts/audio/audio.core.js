/* jshint devel:true */

'use strict';

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
  createContext: function createContext(i) {
    this.contexts[i] = new webkitAudioContext();
  },

  /**
   * Create WebkiaAudioContext
   *
   * @param {Integer} Number of array
   * @param {String} File name
   */
  setFile: function setFile(num, file) {
    var req = [];

    req[num] = new XMLHttpRequest();
    req[num].soundName = num;
    req[num].open('GET', 'samples/' + file, true);
    req[num].responseType = 'arraybuffer';

    req[num].addEventListener('load', function (e) {
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
  setBuffer: function setBuffer(e, i) {
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
  setOptions: function setOptions(n) {
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
  play: function play(n, loop) {
    this.setOptions(n);
    this.sources[n].loop = loop;
    this.sources[n].noteOn(0);
  },

  /**
   * Stop audio
   *
   * @param {Integer} Number of array
   */
  stop: function stop(n) {
    this.sources[n].noteOff(0);
  },

  /**
   * Refresh (rebind) audio
   */
  refresh: function refresh() {
    // For each audio element
    $('.audio').each(function (i) {
      var file = $(this).attr('audio-file');

      // Create context...
      Audio.createContext(i);
      // ...and set file
      Audio.setFile(i, file);
    });

    Audio.bind();
  },

  /**
   * Bind event on audio elemet
   *
   * Touch start and end
   */
  bind: function bind() {
    var $elem = $('.js-pad'),
        loop; // loop or not sample

    $elem
    // Event to play
    .on('mousedown', function () {
      // Check loop or not sample
      loop = $(event.target).attr('audio-continue') === 'loop' ? true : false;
      // Play
      Audio.play($(event.target).index(), loop);
    })
    // Event to stop
    .on('mouseup', function () {
      var duration = $(event.target).attr('audio-duration');

      if (duration === 'short') {
        Audio.stop($(event.target).index());
      }
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
  }
};

Audio.init();