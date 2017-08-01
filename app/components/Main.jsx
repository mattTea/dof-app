var React = require('react');
var NavHeader = require('NavHeader');
var Image = require('Image');

var Main = (props) => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Image/>
      {/* <img id="background-image" src={require("../../public/images/hands-up.jpg")} /> */}
      <NavHeader/>
      <div className="row">
        <div className="columns small-10 medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
