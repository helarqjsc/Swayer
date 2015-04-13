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

    change: function change(e) {},

    end: function end(e) {} },

  /**
   * Bind
   */
  bind: function bind() {

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

// this.pos.startX = 0;
// this.pos.startY = 0;
// console.log('end')

// SkillsMenu.grid.start(e);

// SkillsMenu.grid.change(e);

// SkillsMenu.grid.end(e);