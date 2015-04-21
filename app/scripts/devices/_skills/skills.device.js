/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var skillsSamples = {
  all: 470,
  kick: 778,
  hat: 331,
  snare: 468 };

var padPatterns = {
  cols2rows2: {
    pattern: ['all', 'all', 'kick', 'snare'] },
  cols3rows2: {
    pattern: ['all', 'all', 'all', 'kick', 'hat', 'snare'] },
  cols4rows2: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'hat', 'snare', 'all'] },
  cols2rows3: {
    pattern: ['all', 'all', 'kick', 'snare', 'hat', 'all'] },
  cols2rows4: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all'] },
  cols3rows3: {
    pattern: ['all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all'] },
  cols3rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all'] },
  cols4rows3: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all', 'all', 'all'] },
  cols4rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all', 'all', 'all'] } };

var Skills = (function (_React$Component) {
  function Skills() {
    _classCallCheck(this, Skills);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Skills, _React$Component);

  _createClass(Skills, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'device device-skills' }, React.createElement(SkillsHeader, null), React.createElement(SkillsPads, { cols: '3', rows: '4' }), React.createElement(DeviceMenu, null));
    }
  }]);

  return Skills;
})(React.Component);

;

var SkillsHeader = (function (_React$Component2) {
  function SkillsHeader() {
    _classCallCheck(this, SkillsHeader);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(SkillsHeader, _React$Component2);

  _createClass(SkillsHeader, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { className: 'skills-header' },
        React.createElement(
          'div',
          { className: 'container' },
          React.createElement(
            'div',
            { className: 'rows' },
            React.createElement(
              'div',
              { className: 'col-4 text-left' },
              React.createElement('div', {
                className: 'icon skills-menu',
                onClick: DeviceMenu.show })
            ),
            React.createElement(
              'div',
              { className: 'col-4 text-center' },
              React.createElement('div', { className: 'icon random-all' })
            ),
            React.createElement(
              'div',
              { className: 'col-4 text-right' },
              React.createElement('div', { className: 'icon random-one' })
            )
          )
        )
      );
    }
  }]);

  return SkillsHeader;
})(React.Component);

;

var SkillsPads = (function (_React$Component3) {
  function SkillsPads() {
    _classCallCheck(this, SkillsPads);

    if (_React$Component3 != null) {
      _React$Component3.apply(this, arguments);
    }
  }

  _inherits(SkillsPads, _React$Component3);

  _createClass(SkillsPads, [{
    key: 'render',
    value: function render() {
      var cols = this.props.cols,
          rows = this.props.rows,
          obj = padPatterns['cols' + cols + 'rows' + rows].pattern;

      return React.createElement(
        'div',
        { className: 'skills-pads' },
        obj.map(function (i) {
          return React.createElement(SkillsPad, {
            cols: cols,
            rows: rows,
            kind: i });
        })
      );
    }
  }]);

  return SkillsPads;
})(React.Component);

;

var SkillsPad = (function (_React$Component4) {
  function SkillsPad() {
    _classCallCheck(this, SkillsPad);

    if (_React$Component4 != null) {
      _React$Component4.apply(this, arguments);
    }
  }

  _inherits(SkillsPad, _React$Component4);

  _createClass(SkillsPad, [{
    key: 'setAudioFile',
    value: function setAudioFile(kind) {
      var totalFiles = skillsSamples[kind],
          file = Helpers.getRandom(1, totalFiles);

      return 'Skills/' + kind + '/' + file + '.mp3';
    }
  }, {
    key: 'play',
    value: function play(e) {
      Audio.play($(event.target).index(), false);
    }
  }, {
    key: 'render',
    value: function render() {
      var cols = this.props.cols,
          rows = this.props.rows,
          kind = this.props.kind;

      return React.createElement(
        'div',
        {
          className: 'pad audio col-' + cols + ' pad-row-' + rows,
          'data-audio-file': this.setAudioFile(kind),
          'data-audio-length': 'long',
          'data-audio-hit': 'oneshot',
          onClick: this.play },
        React.createElement(
          'p',
          { className: 'show' },
          this.kind
        ),
        React.createElement('img', { src: '/svg/skills/random-one.svg', className: 'refresh' })
      );
    }
  }]);

  return SkillsPad;
})(React.Component);

;