import React, {Component} from 'react';
import Header from './Header.jsx';

const homeStyle = {
  marginLeft: "0px",
  maxHeight: "920px",
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  paddingBottom: "47%"

};

export default class Home extends Component {
    render() {
        return (
            <div style={homeStyle}>
            <Header />
            </div>
        );
    }
}
