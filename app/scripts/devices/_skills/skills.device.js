/* jshint devel:true */

'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

// Total files in each folder
var skillsSamples = {
  all: 470,
  kick: 778,
  hat: 331,
  snare: 468 };

// Different pads patterns depends on
// pads length with columns and rows length
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
    pattern: ['all', 'all', 'all', 'kick', 'hat', 'snare', 'all', 'all', 'all'] },
  cols3rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'kick', 'hat', 'snare', 'all', 'all', 'all'] },
  cols4rows3: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'hat', 'snare', 'all', 'all', 'all', 'all', 'all'] },
  cols4rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'all', 'all', 'kick', 'hat', 'snare', 'all', 'all', 'all', 'all', 'all'] } };

/**
 * Skills device
 */
var Skills = React.createClass({
  displayName: 'Skills',

  getInitialState: function getInitialState() {
    return {
      grid: {
        cols: 4,
        rows: 3 }
    };
  },

  /**
   * Get current skills device pads 
   *
   * @return {Object} DOM element
   */
  _getCurrentDevicePads: function _getCurrentDevicePads($device) {
    return Device._getCurrentDevice().find('.skills-pads');
  },

  /**
   * Get current skills device pad 
   *
   * @return {Object} DOM element
   */
  _getCurrentDevicePad: function _getCurrentDevicePad($device) {
    return Skills._getCurrentDevicePads(Device._getCurrentDevice()).find('.pad');
  },

  /**
   * Get Skills device background color
   *
   * @return {String} RGB color
   */
  _getColor: function _getColor() {
    return Helpers.getRGBColor();
  },

  /**
   * Set Skills device background color
   */
  _setBGColor: function _setBGColor() {
    var $device = $(event.target).closest('.device');

    Helpers._setBGColor($device, this._getColor());
  },

  render: function render() {
    return React.createElement('div', {
      className: 'device device-skills',
      style: { background: this._getColor() }
    }, React.createElement(SkillsHeader, null), React.createElement(SkillsPads, {
      cols: this.state.grid.cols,
      rows: this.state.grid.rows }), React.createElement(DeviceMenu, null));
  }
});

/**
 * Skills header
 */

var SkillsHeader = (function (_React$Component) {
  function SkillsHeader() {
    _classCallCheck(this, SkillsHeader);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(SkillsHeader, _React$Component);

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
              React.createElement('div', {
                className: 'icon random-all',
                onClick: SkillsPads._shuffle })
            ),
            React.createElement(
              'div',
              { className: 'col-4 text-right' },
              React.createElement('div', { className: 'icon random-one',
                onClick: SkillsPad._shuffleOne })
            )
          )
        )
      );
    }
  }]);

  return SkillsHeader;
})(React.Component);

;

/**
 * Field with pads
 */

var SkillsPads = (function (_React$Component2) {
  function SkillsPads() {
    _classCallCheck(this, SkillsPads);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(SkillsPads, _React$Component2);

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
  }], [{
    key: '_shuffle',

    // shuffle all pads in current device
    value: function _shuffle() {
      var $pad = Skills._getCurrentDevicePad(),
          file,
          kind = '';

      {
        $pad.map(function () {
          SkillsPad._setPadFileAttribute(this);
        });
      }

      Audio.refresh();
      Skills._setBGColor();
    }
  }]);

  return SkillsPads;
})(React.Component);

;

/**
 * The one pad
 */

var SkillsPad = (function (_React$Component3) {
  function SkillsPad() {
    _classCallCheck(this, SkillsPad);

    if (_React$Component3 != null) {
      _React$Component3.apply(this, arguments);
    }
  }

  _inherits(SkillsPad, _React$Component3);

  _createClass(SkillsPad, [{
    key: '_play',

    /**
     * Play sample
     * or if pad has class `pad-wants-to-change`
     * then _shuffle pad
     */
    value: function _play() {
      var $pad = $(event.target);

      // console.log(React.findDOMNode(this.refs.pad))

      if (!$pad.hasClass('pad-wants-to-change')) {

        // Second param means that the sample is not loop
        Audio.play($('.pad').index(event.target), false);
      } else {

        SkillsPad.setPadFileAttribute($pad);

        $pad.addClass('refresh-one');

        setTimeout(function () {
          $pad.removeClass('refresh-one');
          Audio.refresh();
        }, 700);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var cols = 12 / this.props.cols,
          rows = this.props.rows,
          kind = this.props.kind;

      return React.createElement(
        'div',
        {
          className: 'pad audio col-' + cols + ' pad-row-' + rows,
          'data-audio-file': SkillsPad._setAudioFile(kind),
          'data-audio-kind': kind,
          'data-audio-length': 'long',
          'data-audio-hit': 'oneshot',
          onClick: this._play.bind(this),
          ref: 'pad' },
        React.createElement(
          'p',
          { className: 'show' },
          this.kind
        ),
        React.createElement('img', { src: '/svg/skills/random-one-black.svg', className: 'refresh' })
      );
    }
  }], [{
    key: '_shuffleOne',

    // shuffle only one pad
    value: function _shuffleOne() {
      var $pad = Skills._getCurrentDevicePad();

      $pad.toggleClass('pad-wants-to-change');
    }
  }, {
    key: '_setPadFileAttribute',

    /**
     * Set `data-audio-kind` attribute to the pad
     * 
     * @param {Object} Pad
     */
    value: function _setPadFileAttribute(pad) {
      var kind = $(pad).attr('data-audio-kind'),
          file = SkillsPad._setAudioFile(kind);

      $(pad).attr('data-audio-file', file);
    }
  }, {
    key: '_setAudioFile',

    /**
     * Set audio file in to pad attribute
     *
     * @param {String} Folder name
     */
    value: function _setAudioFile(kind) {
      var totalFiles = skillsSamples[kind],
          file = Helpers.getRandom(1, totalFiles);

      return 'Skills/' + kind + '/' + file + '.mp3';
    }
  }]);

  return SkillsPad;
})(React.Component);

;