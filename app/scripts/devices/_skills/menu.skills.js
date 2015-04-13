/* jshint devel:true */

'use strict';

var SkillsMenu = {

  /**
   * Bind
   */
  bind: function bind() {

    $('.js-skills-random-all').on('click', function (e) {
      Skills.render.pads($(event.target));
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