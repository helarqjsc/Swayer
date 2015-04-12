/* jshint devel:true */

'use strict';

var Skills = {

  render: {

    cols: 3,
    rows: 4,

    device: function device() {
      // Bootstrap col size
      var col = 12 / this.cols;

      for (var i = 0; i < this.rows * this.cols; i++) {
        // Append one pad
        $('.skills-pads').append('\n          <div class="pad js-pad js-hold audio col-' + col + ' pad-row-' + this.rows + '"\n            audio-file="1.mp3"\n            audio-duration="long"\n            audio-continue="oneshot">\n          </div>');
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
      // gradientFrom = this.getRandomRGBA(),
      // gradientTo = this.getRandomRGBA();

      $('.device-skills').css('background', bg);
      // $('.about-menu').css('background', bg);
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
      _this.render.device();
      _this.bind();
    });
  } };

Skills.init();

//