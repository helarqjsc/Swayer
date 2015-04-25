/* jshint devel:true */

'use strict';

var SkillsMenu = {

  /**
   * Bind
   */
  bind: function bind() {

    // Shuffle all pads
    $('.js-skills-random-all').on('click', function (e) {
      Skills.render.pads($(event.target));
    });

    // Shuffle only one pad
    $('.js-skills-random-one').on('click', function (e) {
      Skills.shuffle = !Skills.shuffle ? true : false;
      Skills.render.shuffleOnePad($(event.target));
    });

    //
    $('.js-customize-pads-grid').on('mousedown', function (e) {}).on('mousemove', function (e) {}).on('mouseup', function (e) {});
  },

  /**
   * Init
   */
  init: function init() {
    var _this = this;

    $(window).load(function () {
      _this.bind();
    });
  } };

SkillsMenu.init();

// SkillsMenu.grid.start(e);

// SkillsMenu.grid.change(e);

// SkillsMenu.grid.end(e);