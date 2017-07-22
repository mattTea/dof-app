var React = require('react');
var NavHeader = require('NavHeader');

var Main = (props) => {
  return (
    <div>
      <NavHeader/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
