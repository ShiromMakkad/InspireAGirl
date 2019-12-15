import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
        <Navigation/>
        <h1>Hello World</h1>
    </div>
  );
}

export default App;
