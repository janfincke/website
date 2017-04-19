import React from 'react';
import Background from '../images/face.jpg';

const headerStyle = {
  fontFamily: "'Raleway', sans-serif",
  color: "#fff",
  position: "static",
  fontSize: "180px",
  textAlign: "left",
  marginLeft: "150px",
  marginBottom: "50px",
  paddingTop: "20%",
  float: 'left'
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
      <div>
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
