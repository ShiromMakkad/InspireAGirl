import React, {useEffect, useRef} from 'react';
import Navigation from "./components/Navigation";
import './scss/App.scss';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";
import {faBookReader} from "@fortawesome/free-solid-svg-icons/faBookReader";
import {faFeatherAlt} from "@fortawesome/free-solid-svg-icons/faFeatherAlt";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons/faPiggyBank";
import {faSchool} from "@fortawesome/free-solid-svg-icons/faSchool";
import {handleScroll} from "./utilities/scroll";
import Container from "react-bootstrap/Container";

let navHeight = 0;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - navHeight);

const App: React.FC = () => {
    const home = useRef(null);
    // @ts-ignore
    const scrollHome = () => window.scrollTo(0, home.current.offsetTop);

    const problem = useRef(null);
    const scrollProblem = () => scrollToRef(problem);

    const aboutUs = useRef(null);
    const scrollAboutUs = () => scrollToRef(aboutUs);

    const whoWeHelp = useRef(null);
    const scrollWhoWeHelp = () => scrollToRef(whoWeHelp);

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
            <Navigation scrollHome={scrollHome} scrollProblem={scrollProblem} scrollAboutUs={scrollAboutUs} scrollWhoWeHelp={scrollWhoWeHelp}/>
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
                <h2 style={{fontSize: "3rem"}}>The Problem</h2>
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
                            <p className="iconCaption">Every year of primary school increases girls' wages
                                by <b>10-20%</b></p>
                        </div>
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faSchool}/>
                            <p className="iconCaption">Rural girls are <b>twice</b> as likely as urban girls to be out
                                of school</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{width: "50%"}}/>
            <div id="aboutUsRef" ref={aboutUs}/>
            <Container>
                <div id="aboutUs">
                    <div id="aboutUsText">
                        <h2>About Us</h2>
                        <br/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip ex ea commodo consequat. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p><b>Sed ut perspiciatis unde omnis</b></p>
                    </div>
                    <div id="aboutUsImageContainer">
                        <div id="aboutUsImageBackground">
                            <Image src={require('./assets/rotary.png')} id="aboutUsImage" fluid/>
                        </div>
                    </div>
                </div>
            </Container>
            <hr style={{width: "50%"}}/>
            <div id="whoWeHelpRef" ref={whoWeHelp}/>
            <Container>
                <div id="whoWeHelp">
                    <div id="whoWeHelpImageContainer">
                        <div id="whoWeHelpImageBackground">
                            <Image src={require('./assets/WhoWeHelp.jpg')} id="whoWeHelpImage" fluid/>
                        </div>
                    </div>
                    <div id="whoWeHelpText">
                        <h2>Who We Help</h2>
                        <br/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip ex ea commodo consequat. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p><b>Sed ut perspiciatis unde omnis</b></p>
                    </div>
                </div>
            </Container>
            <div id="scrollTest"/>
            <Button onClick={scrollHome} id="scrollTop"><FontAwesomeIcon icon={faChevronUp}/></Button>
        </div>
    );
};

export default App;
