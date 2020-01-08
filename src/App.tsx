import React, {useEffect, useRef, useState} from 'react';
import Navigation from "./components/navigation";
import './scss/App.scss';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";
import {handleScroll} from "./utilities/scroll";
import {Banner} from "./components/banner";
import {Problem} from "./components/problem";
import {AboutUs} from "./components/aboutUs";
import {WhoWeHelp} from "./components/whoWeHelp";
import Contact from "./components/contact";

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

    const contact = useRef(null);
    const scrollContact = () => scrollToRef(contact);

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
            <Navigation scrollHome={scrollHome} scrollProblem={scrollProblem} scrollAboutUs={scrollAboutUs}
                        scrollWhoWeHelp={scrollWhoWeHelp} scrollContact={scrollContact}/>
            <Banner scrollProblem={scrollProblem}/>
            <div id="problemRef" ref={problem}/>
            <Problem/>
            <hr style={{width: "50%"}}/>
            <div id="aboutUsRef" ref={aboutUs}/>
            <AboutUs/>
            <hr style={{width: "50%"}}/>
            <div id="whoWeHelpRef" ref={whoWeHelp}/>
            <WhoWeHelp/>
            <hr style={{width: "50%"}}/>
            <div id="contactRef" ref={contact}/>
            <Contact/>
            <Button onClick={scrollHome} id="scrollTop"><FontAwesomeIcon icon={faChevronUp}/></Button>
            <div id="footer">
                <p>&copy; Shirom Makkad and Anoushka Makkad 2020</p>
            </div>
        </div>
    );
};

export default App;
