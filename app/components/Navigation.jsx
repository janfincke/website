import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

const gitUrl= 'http://www.github.com/janfincke'

const navStyle = {
  backgroundColor: '#e8e8e8'
}

const linkStyle = {
  color: "#000000",
  align: "right",
  fontSize: "16px",
  fontFamily: "'Raleway:300', sans-serif"
}

const brandStyle = {
  color: "#000000",
  fontFamily: "'Raleway:300', sans-serif",
  fontSize: "20px"
}

export default class Navigation extends React.Component {

    render() {
        return (
          <Navbar fixedBottom style={navStyle}>
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
              <NavItem href={gitUrl} target="blank"><span style={linkStyle}>Projects</span></NavItem>
            </Nav>
            </Navbar>
        );
    }
};
