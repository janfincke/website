import React from 'react';
import Scroll from 'react-scroll';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Language from './Language.jsx';
import Skills from './Skills.jsx';

let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;


const mainStyle = {
  backgroundColor: "#5ca841",
  margin: "0"
}

const contentHeaderStyle = {
  fontFamily: "'Six Caps', sans-serif",
  color: "#ffffff",
  position: "static",
  fontSize: "80px",
  textAlign: "left",
  marginBottom: "50px",
  paddingTop: "5%"
}

export class Content extends React.Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function() {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            console.log("end", arguments);
        });

        scrollSpy.update();
    };

    scrollToTop () {
        scroll.scrollToTop();
    };

  componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };

    render() {
        return (
            <div style={mainStyle}>
                <Navigation />
                  <Element id="start">
                      <div className="begin">
                          <Home />
                      </div>

                  </Element>

                  <div className="container">
                      <Element id="education">
                            <h1 style={contentHeaderStyle}>
                                Education
                            </h1>
                            <Education />
                      </Element>
                      <Element id="experience">
                          <h1 style={contentHeaderStyle}>
                              Experience
                          </h1>
                              <Experience />
                      </Element>
                      <Element id="language">
                          <h1 style={contentHeaderStyle}>
                              Language
                          </h1>
                              <Language />
                      </Element>
                      <Element id="skills">
                          <h1 style={contentHeaderStyle}>
                              Skills
                          </h1>
                              <Skills />
                      </Element>
                  </div>
                </div>
        )
    }
}
