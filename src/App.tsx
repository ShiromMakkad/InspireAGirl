import React, {useEffect, useRef} from 'react';
import Navigation from "./components/Navigation";
import './scss/App.scss';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";
import debounce from 'lodash/debounce';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const App: React.FC = () => {
    const home = useRef(null);
    const scrollHome = () => scrollToRef(home);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    let scrollTopIsShowing = false;
    const handleScroll = debounce((e) => {
        if(!scrollTopIsShowing && window.pageYOffset > 450) {
            scrollTopIsShowing = true;
            // @ts-ignore
            document.getElementById("scrollTop").style.opacity = 100;
        }
        else if(scrollTopIsShowing && window.pageYOffset <= 450) {
            scrollTopIsShowing = false;
            // @ts-ignore
            document.getElementById("scrollTop").style.opacity = 0;
        }
    }, 10);

    return (
        <div className="App">
            <div ref={home}/>
            <Navigation scrollHome={scrollHome}/>
            <div id="banner">
                <div id="tint">
                    <img src={require('./assets/bannerImage.jpg')} id="img" alt="Indian Girl"/>
                </div>
                <div id="bannerText">
                    <h1>Call to Action</h1>
                    <h3>Subtitle</h3>
                    <Button size="lg">Learn More</Button>
                </div>
            </div>
            <div id="scrollTest"/>
            <Button onClick={scrollHome} id="scrollTop" ><FontAwesomeIcon icon={faChevronUp}/></Button>
        </div>
    );
};

export default App;
