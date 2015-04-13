/* jshint devel:true */

'use strict';

var skillsSamples = {
  'all': 470,
  'kick': 778,
  'hat': 331,
  'snare': 468,
};

var Skills = {

  // Work with sample
  sample: {

    /**
     * Get random file from the folder
     *
     * @return {Integer} file number
     */
    getRndFile(kind) {
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
      getKind(cols, rows, i) {
        return padPatterns[`cols${cols}rows${rows}`]['pattern'][i];
      },

      /**
       * Get file and file path
       */
      getFile(cols, rows, i) {
        var // Kind of sample, ex: all, kick, hat, snare
          kind = this.getKind(cols, rows, i),
          // Random number of file
          file = this.getRndFile(kind);

        return `Skills/${kind}/${file}.mp3`;
      },
  },

  // Render
  render: {

    cols: 4, // Pads collums
    rows: 4, // Pads rows

    // Render pads surface
    pads($elem) {

      // Current device and pads
      var $device, $pads;

      if ($elem !== undefined) {

        $device = $elem.closest('.device-skills');
        $pads = $device.find('.skills-pads');

      } else if ($elem === undefined) {

        $device = $('.device-skills');
        $pads = $('.skills-pads');

      }

      this.appendPads($pads);

      $device.css('background', this.getRandomRGBA());

      // After creating all pads
      // we have to rebind events
      Audio.refresh();

      // Refresh (rebind) touch event on the pads
      Hold.refresh();
    },

    appendPads($pads) {
      
      var col = 12 / this.cols, // Bootstrap col size
        file = '', // Full path to audio file
        kind = '', // Sample kind
        show = 'show'; // Class to show labels on the pads

      // Clear before append
      $pads.html('');

      // For each pad
      for (var i = 0; i < (this.rows * this.cols); i++) {

        // Get full path to the audio file
        file = Skills.sample.getFile(this.cols, this.rows, i);
        // Get kind
        kind = Skills.sample.getKind(this.cols, this.rows, i);

        // Show pad labes for kick, hat and snare only
        if (kind === 'kick' || kind === 'hat' || kind === 'snare') {
          show = 'show';
        } else {
          show = 'hide'
        }

        // Append one pad
        $pads.append(`
          <div class="pad js-pad js-hold audio col-${col} pad-row-${this.rows}"
            audio-file="${file}"
            audio-duration="long"
            audio-continue="oneshot">
            <p class="${show}">
              ${kind}
            </p>
          </div>`);
      };
    },

    /**
     * Get random color
     *
     * @return {Integer} random number from 1 to 123
     */
    getRandomColor() {
      return (Math.random() * (123 - 1) + 1).toFixed(0);
    },

    /**
     * Get RGBA
     *
     * @return {String} generate RGBA from random colors
     */
    getRandomRGBA() {
      var red, green, blue = 0,
        rgb = '';

      red = this.getRandomColor();
      green = this.getRandomColor();
      blue = this.getRandomColor();

      return rgb = 'rgba(' + red + ', ' + green + ', ' + blue + ', 1)';
    },

  },

  /**
   * Bind
   */
  bind() {

    //
    $('.class').on('click', () => {
      //
    });

  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      this.render.pads();
      this.bind();
    });
  },

};

Skills.init();