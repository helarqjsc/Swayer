/* jshint devel:true */

'use strict';

class Device extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "device"},
        <Skills />,
        <DeviceMenu />
      )
    );
  }
};


class DeviceMenu extends React.Component {
  render() {
    return (
      <section class="device-menu">  
        <button>
          Close
        </button>

        <button class="js-delete-device">
          delete device
        </button>
      </section>
    );
  }
};

