/* jshint devel:true */

'use strict';

var SkillsMenu = {

  grid: {

    cols: function cols() {},

    rows: function rows() {} },

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
      _this.bind();
    });
  } };

SkillsMenu.init();

//