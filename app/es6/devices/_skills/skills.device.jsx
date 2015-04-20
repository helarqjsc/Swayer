/* jshint devel:true */

'use strict';

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
                onClick={DeviceMenu.show}></div>
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
      React.createElement('div', {className: "skills-pads"},
        <SkillsPad />,
        <SkillsPad />,
        <SkillsPad />,
        <SkillsPad />,
        <SkillsPad />,
        <SkillsPad />
      )
    )
  }
};


class SkillsPad extends React.Component {
  render() {
    return (
      <div className="pad audio col-2 pad-row-4">1</div>
    )
  }
};
