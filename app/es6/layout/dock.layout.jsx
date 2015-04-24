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
class DockLockIcon extends React.Component {

  handleClick() {
    this.props.locked = this.props.locked ? false : true;
    // console.log('handle: ' + this.props.locked)
  }

  render() {
    // var cx = React.addons.classSet;
    // var classes = cx({
    //   'dock-lock': !this.props.locked,
    //   'dock-unlock': this.props.locked
    // });

    // console.log(classes);
    // console.log(this.props.locked);

    // return (
    //   React.createElement('div', {
    //     className: `dock-icon ${classes} col-2`,
    //     onClick: this.handleClick.bind(this)
    //   })
    // )

    return (
      React.createElement('div', {
        className: this.props.locked === this.props.locked ? 'dock-icon dock-lock col-2' : 'dock-icon dock-unlock col-2',
        // className: classes,
        onClick: this.handleClick.bind(this)
      })
    )
  }
};


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
class DockDeviceIcon extends React.Component {
  render() {
    var
      device = this.props.device,
      elClass = `dock-icon dock-device dock-device-${device} col-2`;

    return (
      <div 
        className={elClass} 
        onClick={Workspace.toDevice}
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