import React from 'react';

const headerStyle = {
  fontFamily: "'Raleway', sans-serif",
  color: "#fff",
  position: "static",
  fontSize: "130px",
  textAlign: "left",
  marginLeft: "100px",
  marginBottom: "50px",
  paddingTop: "20%"
};

export default class Header extends React.Component {
  render () {
    return (
      <h1 style={headerStyle}>
          Jan Fincke
      </h1>
    )
  }
}
