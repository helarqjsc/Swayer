/* jshint devel:true */

'use strict';

var SkillsMenu = {

  grid: {

    cols() {

    },

    rows() {

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
      this.bind();
    });
  },

};

SkillsMenu.init();