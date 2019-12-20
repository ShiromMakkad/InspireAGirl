import React, {useEffect, useRef} from 'react';
import Navigation from "./components/Navigation";
import './scss/App.scss';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";
import {faBookReader} from "@fortawesome/free-solid-svg-icons/faBookReader";
import {faFeatherAlt} from "@fortawesome/free-solid-svg-icons/faFeatherAlt";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons/faPiggyBank";
import {faSchool} from "@fortawesome/free-solid-svg-icons/faSchool";
import {handleScroll} from "./utilities/scroll";

let navHeight = 0;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - navHeight);

const App: React.FC = () => {
    const home = useRef(null);
    // @ts-ignore
    const scrollHome = () => window.scrollTo(0, home.current.offsetTop);

    const problem = useRef(null);
    const scrollProblem = () => scrollToRef(problem);

    useEffect(() => {
        navHeight = document.getElementsByClassName("navbar")[0].clientHeight;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="App">
            <div id="homeRef" ref={home}/>
            <Navigation scrollHome={scrollHome} scrollProblem={scrollProblem}/>
            <div id="banner">
                <div id="tint">
                    <img src={require('./assets/bannerImage.jpg')} id="img" alt="Indian Girl"/>
                </div>
                <div id="bannerText">
                    <h1>Call to Action</h1>
                    <h3>Subtitle</h3>
                    <Button size="lg" onClick={scrollProblem}>Learn More</Button>
                </div>
            </div>
            <div id="problemRef" ref={problem}/>
            <div id="problem">
                <h1>The Problem</h1>
                <div id="problemIcon">
                    <div className="wrapIcons">
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faBookReader}/>
                            <p className="iconCaption">Women make up <b>two-thirds</b> of illiterate people</p>
                        </div>
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faFeatherAlt}/>
                            <p className="iconCaption">Only <b>39%</b> of rural girls attend secondary school</p>
                        </div>
                    </div>
                    <div className="wrapIcons">
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faPiggyBank}/>
                            <p className="iconCaption">Every year of primary school increases girls' wages by <b>10-20%</b></p>
                        </div>
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faSchool}/>
                            <p className="iconCaption">Rural girls are <b>twice</b> as likely as urban girls to be out of school</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{width: "50%"}}/>
            <div id="scrollTest"/>
            <Button onClick={scrollHome} id="scrollTop"><FontAwesomeIcon icon={faChevronUp}/></Button>
        </div>
    );
};

export default App;
