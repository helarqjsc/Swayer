/* jshint devel:true */

'use strict';

var skillsSamples = {
  'all': 470,
  'kick': 778,
  'hat': 331,
  'snare': 468,
};

var grid = {
  'cols': 2,
  'rows': 2,
};

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
      'kick', 'snare', 'hat',
      'all', 'all', 'all',
    ],
  },
  'cols3rows4': {
    'pattern': [
      'all', 'all', 'all',
      'all', 'all', 'all',
      'kick', 'snare', 'hat',
      'all', 'all', 'all',
    ],
  },
  'cols4rows3': {
    'pattern': [
      'all', 'all', 'all', 'all',
      'kick', 'snare', 'hat', 'all',
      'all', 'all', 'all', 'all',
    ],
  },
  'cols4rows4': {
    'pattern': [
      'all', 'all', 'all', 'all',
      'all', 'all', 'all', 'all',
      'kick', 'snare', 'hat', 'all',
      'all', 'all', 'all', 'all',
    ],
  },
};

class Skills extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "device device-skills"},
        <SkillsHeader />,
        <SkillsPads cols={grid.cols} rows={grid.rows} />,
        <DeviceMenu />
      )
    );
  }
};


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
              <div className="icon random-one"></div>
            </div>

          </div>
        </div>
      </section>
    );
  }
};

class SkillsPads extends React.Component {

  static shuffle(e) {
    var $device = $(e.target).closest('.device'),
        $pads = $device.find('.skills-pads'),
        $pad = $pads.find('.pad'),

        file, kind = '';

    {$pad.map(function(i) {
      var _this = this;

      kind = $(_this).attr('data-audio-kind');
      file = SkillsPad.setAudioFile(kind);

      $(_this).attr('data-audio-file', file);

      Audio.refresh();
    })}
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


class SkillsPad extends React.Component {

  static setAudioFile(kind) {
    var totalFiles = skillsSamples[kind],
        file = Helpers.getRandom(1, totalFiles);

    return `Skills/${kind}/${file}.mp3`;
  }

  play(e) {
    Audio.play($(event.target).index(), false);
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
        onClick={this.play.bind(this)}>

        <p className="show">
          {this.kind}
        </p>

        <img src="/svg/skills/random-one.svg" className="refresh" />
      </div>
    )
  }
};
