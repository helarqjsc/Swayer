/* jshint devel:true */

'use strict';

var skillsSamples = {
  all: 470,
  kick: 778,
  hat: 331,
  snare: 468 };

var padPatterns = {
  cols2rows2: {
    pattern: ['all', 'all', 'kick', 'snare'] },
  cols3rows2: {
    pattern: ['all', 'all', 'all', 'kick', 'hat', 'snare'] },
  cols4rows2: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'hat', 'snare', 'all'] },
  cols2rows3: {
    pattern: ['all', 'all', 'kick', 'snare', 'hat', 'all'] },
  cols2rows4: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all'] },
  cols3rows3: {
    pattern: ['all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all'] },
  cols3rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all'] },
  cols4rows3: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all', 'all', 'all'] },
  cols4rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all', 'all', 'all'] } };

var Skills = {

  // Work with sample
  sample: {

    /**
     * Get random file from the folder
     *
     * @return {Integer} file number
     */
    getRndFile: function getRndFile(kind) {
      // Total audio files in folder
      var totalFilesInFolder = skillsSamples[kind];

      return Math.floor(Math.random() * (totalFilesInFolder - 1)) + 1;
    },

    /**
     * Get file kind
     *
     * @param {Integer} pads cols
     * @param {Integer} pads rows
     * @param {Integer} current pad number
     *
     * @return {String} audio file kind (folder name)
     */
    getKind: function getKind(cols, rows, i) {
      return padPatterns['cols' + cols + 'rows' + rows].pattern[i];
    },

    /**
     * Get file and file path
     */
    getFile: function getFile(cols, rows, i) {
      var // Kind of sample, ex: all, kick, hat, snare
      kind = this.getKind(cols, rows, i),

      // Random number of file
      file = this.getRndFile(kind);

      return 'Skills/' + kind + '/' + file + '.mp3';
    } },

  render: {

    cols: 4,
    rows: 4,

    pads: function pads() {
      // Bootstrap col size
      var col = 12 / this.cols,

      // Full path to audio file
      file = '',
          kind = '';

      for (var i = 0; i < this.rows * this.cols; i++) {

        file = Skills.sample.getFile(this.cols, this.rows, i);
        kind = Skills.sample.getKind(this.cols, this.rows, i);

        // Append one pad
        $('.skills-pads').append('\n          <div class="pad js-pad js-hold audio col-' + col + ' pad-row-' + this.rows + '"\n            audio-file="' + file + '"\n            audio-duration="long"\n            audio-continue="oneshot">\n            ' + kind + '\n          </div>');
      }

      // After creating all pads
      // we have to rebind events
      Audio.refresh();

      Hold.refresh();

      this.setBgColor();
    },

    getRandomColor: function getRandomColor() {
      return (Math.random() * (123 - 1) + 1).toFixed(0);
    },

    getRandomRGBA: function getRandomRGBA() {
      var red,
          green,
          blue = 0,
          rgb = '';

      red = this.getRandomColor();
      green = this.getRandomColor();
      blue = this.getRandomColor();

      return rgb = 'rgba(' + red + ', ' + green + ', ' + blue + ', 1)';
    },

    setBgColor: function setBgColor() {
      var bg = this.getRandomRGBA();

      $('.device-skills').css('background', bg);
    }

  },

  /**
   * Bind
   */
  bind: function bind() {

    //
    $('.class').on('click', function () {});
  },

  /**
   * Init
   */
  init: function init() {
    var _this = this;

    $(window).load(function () {
      _this.render.pads();
      _this.bind();
    });
  } };

Skills.init();

//