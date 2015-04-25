/* jshint devel:true */

'use strict';

class Dock extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "dock container"},
        <div className="row">
          <DockLockIcon locked={false} />
          <DockAddDeviceIcon />
          <DockDevicesCarousel />
          <DockApplicationMenuIcon />
        </div>
      )
    );
  }
};

/**
 * Lock/unlock Dock icon
 */
var DockLockIcon = React.createClass({

  getInitialState() {
    return {
      locked: false
    };
  },

  handleClick() {
    this.setState({locked: !this.state.locked});
  },

  render() {
    var classString = 'dock-icon dock-lock col-2 ';

    if (this.state.locked) {
      classString += 'lock';
    }

    return (
      <div 
        className={classString} 
        onClick={this.handleClick}
        locked={this.state.locked} />
    )
  }
});


/**
 * Add device icon
 */
class DockAddDeviceIcon extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "dock-icon dock-add-device col-2"})
    )
  }
};


/**
 * Workspace carousel
 */
class DockDevicesCarousel extends React.Component {

  render() {
    return (
      React.createElement('section', {className: "js-device-carousel"}),
      <div>
        <DockDeviceIcon device="skills" active="true" />
        <DockDeviceIcon device="skills" active="false" />
      </div>
    )
  }
};

/**
 * Dock device icon
 */
var DockDeviceIcon = React.createClass({
  
  getInitialState() {
    return {
      active: false
    };
  },

  _selectDevice() {
    Workspace.toDevice();

    this.setState({active: !this.state.active});
  },

  render() {
    var
      device = this.props.device,
      elClass = `dock-icon dock-device dock-device-${device} col-2`;

    return (
      <div 
        className={elClass} 
        onClick={this._selectDevice}
        data-device={this.props.device}>
        {this.state.active === true ? <DockIconIndicate /> : null}
      </div>
    )
  }
});


class DockIconIndicate extends React.Component {
  render() {
    return (
      React.createElement('div', {className: 'dock-icon-active-dot'})
    )
  }
};


class DockApplicationMenuIcon extends React.Component {
  render() {
    return (
      <div 
        className="dock-icon dock-menu js-toggle-menu col-2"
        onClick={ApplicationMenu.show}>
      </div>
    )
  }
};


React.render(
  React.createElement(Dock, null),
  document.getElementById('dock')
);