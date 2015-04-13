/* jshint devel:true */

'use strict';

var SkillsMenu = {

  grid: {

    distance: 10,

    xpos: 0,
    ypos: 0,

    old: {
      x: 0,
      y: 0 },

    change: function change(e) {
      var x = e.pageX,
          y = e.pageY,
          cols = 0;

      if (x > this.old.x) {
        if (this.old.x < x + this.distance) {
          this.xpos = this.xpos + 1;
        }
      } else if (x < this.old.x) {
        this.xpos = this.xpos - 1;
      }

      if (cols > 0) {
        cols = (this.xpos / this.distance).toFixed(0);
        Skills.render.cols = +cols;
        Skills.render.pads();
        console.log(this.xpos);
        console.log(cols);
      }

      // console.log(cols)

      // if (Skills.render.cols < 4) {
      // Skills.render.cols = +cols;
      // Skills.render.pads();
      // console.log('if ' + Skills.render.cols);
      // }

      // console.log(Skills.render.cols);

      // console.log((Skills.render.cols + +cols));

      // Skills.render.cols = (Skills.render.cols + +cols);
      // Skills.render.pads();

      this.old.x = x;
    } },

  /**
   * Bind
   */
  bind: function bind() {

    //
    $('.js-skills-cols, .js-skills-rows').on('mousemove', function (e) {
      SkillsMenu.grid.change(e);
    });
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