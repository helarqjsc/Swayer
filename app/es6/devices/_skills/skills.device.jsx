/* jshint devel:true */

'use strict';

// Total files in each folder
var skillsSamples = {
  'all': 470,
  'kick': 778,
  'hat': 331,
  'snare': 468,
};

// Different pads patterns depends on
// pads length with columns and rows length
var padPatterns = {
  'cols2rows2': {
    'pattern': [
      'all', 'all',
      'kick', 'snare'
    ],
  },
  'cols3rows2': {
    'pattern': [
      'all', 'all', 'all',
      'kick', 'hat', 'snare'
    ],
  },
  'cols4rows2': {
    'pattern': [
      'all', 'all', 'all', 'all',
      'kick', 'hat', 'snare', 'all',
    ],
  },
  'cols2rows3': {
    'pattern': [
      'all', 'all',
      'kick', 'snare',
      'hat', 'all',
    ],
  },
  'cols2rows4': {
    'pattern': [
      'all', 'all',
      'all', 'all',
      'kick', 'snare',
      'hat', 'all',
    ],
  },
  'cols3rows3': {
    'pattern': [
      'all', 'all', 'all',
      'kick', 'hat', 'snare',
      'all', 'all', 'all',
    ],
  },
  'cols3rows4': {
    'pattern': [
      'all', 'all', 'all',
      'all', 'all', 'all',
      'kick', 'hat', 'snare',
      'all', 'all', 'all',
    ],
  },
  'cols4rows3': {
    'pattern': [
      'all', 'all', 'all', 'all',
      'kick', 'hat', 'snare', 'all',
      'all', 'all', 'all', 'all',
    ],
  },
  'cols4rows4': {
    'pattern': [
      'all', 'all', 'all', 'all',
      'all', 'all', 'all', 'all',
      'kick', 'hat', 'snare', 'all',
      'all', 'all', 'all', 'all',
    ],
  },
};

/**
 * Skills device
 */
class Skills extends React.Component {

  /**
   * Get current skills device pads 
   *
   * @return {Object} DOM element
   */
  static getCurrentDevicePads($device) {
    return Device.getCurrentDevice().find('.skills-pads');
  }

  /**
   * Get current skills device pad 
   *
   * @return {Object} DOM element
   */
  static getCurrentDevicePad($device) {
    return Skills.getCurrentDevicePads(Device.getCurrentDevice()).find('.pad');
  }

  /**
   * Get Skills device background color
   *
   * @return {String} RGB color
   */
  static getColor() {
    return Helpers.getRGBColor();
  }

  /**
   * Set Skills device background color
   */
  static setBGColor() {
    var $device = $(event.target).closest('.device');

    Helpers.setBGColor($device, Skills.getColor());
  }

  render() {
    return (
      React.createElement('div', {
          className: "device device-skills",
          style: {background: Skills.getColor()}
        },
        <SkillsHeader />,
        <SkillsPads cols="3" rows="4" />,
        <DeviceMenu />
      )
    );
  }
};


/**
 * Skills header
 */
class SkillsHeader extends React.Component {

  render() {
    return (
      <section className="skills-header">
        <div className="container">
          <div className="rows">

            <div className="col-4 text-left">
              <div
                className="icon skills-menu"
                onClick={DeviceMenu.show} />
            </div>

            <div className="col-4 text-center">
              <div
                className="icon random-all"
                onClick={SkillsPads.shuffle} />
            </div>

            <div className="col-4 text-right">
              <div className="icon random-one" 
                onClick={SkillsPad.shuffleOne}/>
            </div>

          </div>
        </div>
      </section>
    );
  }
};


/**
 * Field with pads
 */
class SkillsPads extends React.Component {

  // Shuffle all pads in current device
  static shuffle() {
    var $pad = Skills.getCurrentDevicePad(),

        file, kind = '';

    {$pad.map(function() {
      SkillsPad.setPadFileAttribute(this);
    })}

    Audio.refresh();
    Skills.setBGColor();
  }

  render() {
    var cols = this.props.cols,
        rows = this.props.rows,
        obj = padPatterns[`cols${cols}rows${rows}`]['pattern'];

    return (
      <div className="skills-pads">
        {obj.map(function(i) {
          return <SkillsPad
            cols={cols}
            rows={rows}
            kind={i} />
        })}
      </div>
    )
  }
};


/**
 * The one pad
 */
class SkillsPad extends React.Component {

  // Shuffle only one pad
  static shuffleOne() {
    var $pad = Skills.getCurrentDevicePad();

    $pad.toggleClass('pad-wants-to-change');
  }

  /**
   * Set `data-audio-kind` attribute to the pad
   * 
   * @param {Object} Pad
   */
  static setPadFileAttribute(pad) {
    var kind = $(pad).attr('data-audio-kind'),
        file = SkillsPad.setAudioFile(kind);

    $(pad).attr('data-audio-file', file);
  }

  /**
   * Set audio file in to pad attribute
   *
   * @param {String} Folder name
   */
  static setAudioFile(kind) {
    var totalFiles = skillsSamples[kind],
        file = Helpers.getRandom(1, totalFiles);

    return `Skills/${kind}/${file}.mp3`;
  }

  /**
   * Play sample
   * or if pad has class `pad-wants-to-change`
   * then shuffle pad
   */
  play() {
    var $pad = $(event.target);

    // console.log(React.findDOMNode(this.refs.pad))

    if (!$pad.hasClass('pad-wants-to-change')) {

      // Second param means that the sample is not loop
      Audio.play($('.pad').index(event.target), false);

    } else {

      SkillsPad.setPadFileAttribute($pad);

      $pad.addClass('refresh-one');

      setTimeout(function() {
        $pad.removeClass('refresh-one');
        Audio.refresh();
      }, 700);

    }
  }

  render() {
    var cols = 12 / this.props.cols,
        rows = this.props.rows,
        kind = this.props.kind;

    return (
      <div
        className={`pad audio col-${cols} pad-row-${rows}`}
        data-audio-file={SkillsPad.setAudioFile(kind)}
        data-audio-kind={kind}
        data-audio-length="long"
        data-audio-hit="oneshot"
        onClick={this.play.bind(this)}
        ref="pad">

        <p className="show">
          {this.kind}
        </p>

        <img src="/svg/skills/random-one-black.svg" className="refresh" />
      </div>
    )
  }
};
