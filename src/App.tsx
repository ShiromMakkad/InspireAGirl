import React from 'react';
import Navigation from "./components/Navigation";
import './scss/App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navigation/>
            <div id="tint">
                <img src={require('./assets/bannerImage.jpg')} id="img" alt="Indian Girl"/>
            </div>
        </div>
    );
};

export default App;
