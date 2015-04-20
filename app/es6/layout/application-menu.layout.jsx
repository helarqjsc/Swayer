/* jshint devel:true */

'use strict';

var body = document.querySelector('body');

class ApplicationMenu extends React.Component {
  static show() {
    body.setAttribute('class', 'show-application-menu');
  }
  static hide() {
    body.removeAttribute('class', 'show-application-menu');
  }
  render() {
    return (
      React.createElement('div', {className: "application-menu"},
        <ApplicationMenuCloseBtn />
      )
    );
  }
};


class ApplicationMenuCloseBtn extends React.Component {
  render() {
    return (
      <div onClick={ApplicationMenu.hide}>
        Close
      </div>
    );
  }
};

React.render(
  React.createElement(ApplicationMenu, null),
  document.getElementById('applicationMenu')
);