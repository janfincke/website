import React from 'react';
import Background from '../images/face.jpg';

const headerStyle = {
  fontFamily: "'Raleway', sans-serif",
  color: "#000000",
  position: "static",
  fontSize: "180px",
  textAlign: "left",
  marginLeft: "150px",
  marginBottom: "50px",
  paddingTop: "20%",
  float: 'left'
};


require('scrollmagic');

var scrollmagic = function() {
    // init controller
    var controller = new ScrollMagic.Controller({
            globalSceneOptions: {globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}}
        });
    // init scene
    var scene = new ScrollMagic.Scene({triggerElement: "#header"})
					.setTween("#header > div", {y: "120%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);
};


const headerImageStyle = {
  float: 'right',
  // paddingTop: '10%',
  // paddingRight: '10%'
}

export default class Header extends React.Component {
  render () {
    return (
      <div className="container-fluid">
      <div id="header">
        <h1 style={headerStyle}>
            Jan Fincke
        </h1>
      </div>
      <div className="image-cropper">
        <img src={Background} style={headerImageStyle} />
        </div>
      </div>
    )
  }
}
