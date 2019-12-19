import React from 'react';
import Navigation from "./components/Navigation";
import './scss/App.scss';
import Button from "react-bootstrap/Button";

const App: React.FC = () => {
    return (
        <div className="App">
            <Navigation/>
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
        </div>
    );
};

export default App;
