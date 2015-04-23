/* jshint devel:true */

'use strict';

class Workspace extends React.Component {

  static toDevice() {
    var index = $(event.target).index();

    Workspace.move(index);
  }
  
  static move(index) {
    var $wrap = $('.workspace .wrap'),
        width = $(window).width(),
        speed = 777;

    $wrap.animate({
      left: width * (index * -1)
    }, speed);
  }

  render() {
    return (
      React.createElement('div', {className: "workspace"},
        <div className="wrap">
          <Skills />,
          <Skills />
        </div>
      )
    );
  }
};


React.render(
  React.createElement(Workspace, null),
  document.getElementById('workspace')
);