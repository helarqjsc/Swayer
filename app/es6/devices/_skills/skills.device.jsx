/* jshint devel:true */

'use strict';

var skillsSamples = {
  'all': 470,
  'kick': 778,
  'hat': 331,
  'snare': 468,
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
        <SkillsPads />,
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
                onClick={DeviceMenu.show}>
              </div>
            </div>

            <div className="col-4 text-center">
              <div className="icon random-all"></div>
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
  render() {
    return (
      <div className="skills-pads">
        <SkillsPad />
      </div>
      // React.createElement('div', {className: "skills-pads"}, {pads});
    )
  }
};


class SkillsPad extends React.Component {

  setAudioFile() {
    return "Skills/all/3.mp3";
  }
  setAudioDuration() {
    return "long";
  }
  setAudioContinue() {
    return "oneshot";
  }

  play(e) {
    Audio.play($(event.target).index(), false);
  }

  render() {
    var kind = 'ki',
      cols = 4,
      rows = 4;

    return (
      <div 
        className="pad audio col-4 pad-row-4"
        onClick={this.play}
        data-audio-file={this.setAudioFile()}
        data-audio-duration={this.setAudioDuration}
        data-audio-continue={this.setAudioContinue}>

        <p className="show">
          {this.kind}
        </p>

        <img src="/svg/skills/random-one.svg" className="refresh" />
      </div>
    )
  }
};
