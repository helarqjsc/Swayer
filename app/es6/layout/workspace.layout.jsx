/* jshint devel:true */

'use strict';

class Device extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "workspace"},
        <div className="wrap">
          <Skills />
        </div>
      )
    );
  }
};


class DeviceMenu extends React.Component {

  static show(e) {
    var $device = $(e.target).closest('.device'),
      $menu = $device.find('.device-menu');

    $menu.addClass('show');
  }

  hide(e) {
    var $menu = $(e.target).closest('.device-menu');

    $menu.removeClass('show');
  }

  render() {
    return (
      React.createElement('div', {className: "device-menu"},
        <p onClick={this.hide}>
          Close
        </p>
      )
    );
  }
};


React.render(
  React.createElement(Device, null),
  document.getElementById('workspace')
);