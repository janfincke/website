import React, {Component} from 'react';
import Background from '../images/face.jpg';
import Header from './Header.jsx';

const homeStyle = {
  backgroundImage: `url(${Background})`,
  marginLeft: "0px",
  maxHeight: "920px",
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  paddingBottom: "47%"

};

export default class Home extends Component {
    render() {
        return (
            <div className="wrapper" style={homeStyle}>
            <Header />
            </div>
        );
    }
}
