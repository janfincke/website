import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Scroll from 'react-scroll';


let Link = Scroll.Link;



const linkStyle = {
  color: "#418c36",
  align: "right",
  fontSize: "16px",
  fontFamily: "'Raleway', sans-serif"
}

const brandStyle = {
  color: "#418c36",
  fontFamily: "'Raleway', sans-serif",
  fontSize: "20px"
}

export default class Navigation extends React.Component {

    render() {
        return (
          <Navbar fluid fixedBottom>
          <Navbar.Header>
            <Navbar.Brand>
              <Link style={brandStyle} className="home" to="start" spy={true} smooth={true} duration={500}>Jan Fincke</Link>
            </Navbar.Brand>
          </Navbar.Header>
            <Nav>
              <NavItem><Link style={linkStyle} className="edu" to="education" spy={true} smooth={true} duration={500}>Education</Link></NavItem>
              <NavItem><Link style={linkStyle} className="exp" to="experience" spy={true} smooth={true} duration={500}>Experience</Link></NavItem>
              <NavItem><Link style={linkStyle} className="lang" to="language" spy={true} smooth={true} duration={500}>Language proficiency</Link></NavItem>
              <NavItem><Link style={linkStyle} className="skills" to="skills" spy={true} smooth={true} duration={500}>Skills</Link></NavItem>
              <NavItem><a style={linkStyle}  href="http://www.github.com/janfincke" target='blank'>Projects</a></NavItem>
            </Nav>
            </Navbar>

        );
    }
};
