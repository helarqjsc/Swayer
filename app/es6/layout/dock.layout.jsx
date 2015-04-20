/* jshint devel:true */

'use strict';

class Dock extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "dock container"},
        <div className="row">
          <DockLock />
          <DockAddDevice />
          <DockDevicesCarousel />
          <DockApplicationMenu />
        </div>
      )
    );
  }
};


class DockLock extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "dock-icon dock-lock col-2"})
    )
  }
};


class DockAddDevice extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "dock-icon dock-add-device col-2"})
    )
  }
};


class DockDevicesCarousel extends React.Component {
  render() {
    return (
      React.createElement('section', {className: "js-device-carousel"}),
      <div>
        <DockDeviceIcon device="skills" active="true" />
        <DockDeviceIcon device="swayer" active="false" />
      </div>
    )
  }
};


class DockDeviceIcon extends React.Component {
  selectDevice(e) {
    console.log(e.target)
    console.log(event.target.dataset.device)
    console.log(event.target.index)
  }

  render() {
    var
      device = this.props.device,
      elClass = `dock-icon dock-device dock-device-${device} col-2`;

    return (
      <div 
        className={elClass} 
        onClick={this.selectDevice}
        data-device={this.props.device}>
        {this.props.active === 'true' ? <DockIconIndicate /> : null}
      </div>
    )
  }
};


class DockIconIndicate extends React.Component {
  render() {
    return (
      React.createElement('div', {className: 'dock-icon-active-dot'})
    )
  }
};


class DockApplicationMenu extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "dock-icon dock-menu js-toggle-menu col-2"})
    )
  }
};


React.render(
  React.createElement(Dock, null),
  document.getElementById('dock')
);