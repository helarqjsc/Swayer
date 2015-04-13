/* jshint devel:true */

'use strict';

var SkillsMenu = {

  grid: {

    // pos: {
    //   startX: 0,
    //   startY: 0,
    //   currentX: 0,
    //   currentY: 0,
    // },

    // start(e) {
    //   this.pos.startX = e.pageX;
    //   this.pos.startY = e.pageY;
    //   // console.log('start')
    // },

    change(e) {

    },

    end(e) {
      // this.pos.startX = 0;
      // this.pos.startY = 0;
      // console.log('end')
    },

  },

  /**
   * Bind
   */
  bind() {

    //
    $('.js-customize-pads-grid')
      .on('mousedown', (e) => {
        // SkillsMenu.grid.start(e);
      })
      .on('mousemove', (e) => {
        // SkillsMenu.grid.change(e);
      })
      .on('mouseup', (e) => {
        // SkillsMenu.grid.end(e);
      });

  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      this.bind();
    });
  },

};

SkillsMenu.init();