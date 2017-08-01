//create alias in webpack.config - done
//require in Main.jsx I think - done
//add <Image /> tag in Main as well I think - done

var React = require('react');

var Image = (props) => {
  return (
    <div>
      <img id="background-image" src={require("../../public/images/hands-up.jpg")} />
    </div>
  );
};

module.exports = Image;
