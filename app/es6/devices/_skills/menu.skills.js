/* jshint devel:true */

'use strict';

var SkillsMenu = {

  /**
   * Bind
   */
  bind() {

      // Shuffle all pads
      $('.js-skills-random-all').on('click', (e) => {
        Skills.render.pads($(event.target));
      });

      // Shuffle only one pad
      $('.js-skills-random-one').on('click', (e) => {
        Skills.shuffle = !Skills.shuffle ? true : false;
        Skills.render.shuffleOnePad($(event.target));
      });

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