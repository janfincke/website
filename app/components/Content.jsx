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
var scrollSpy = Scroll.scrollSpy;

var mainStyle = {
  backgroundColor: "#4ea841",
  margin: "0"
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

                <Element id="start" className="content">
                    <div className="begin">
                        <Home />
                    </div>
                </Element>
                <Element id="education" className="content">
                    <div>
                        <Education />
                    </div>
                </Element>
                <Element id="experience" className="content">
                    <div>
                        <Experience />
                    </div>
                </Element>
                <Element id="language" className="content">
                    <div>
                        <Language />
                    </div>
                </Element>
                <Element id="skills" className="content">
                    <div>
                        <Skills />
                    </div>
                </Element>
            </div>
        )
    }
}
