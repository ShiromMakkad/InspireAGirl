import React from 'react';
import Button from "react-bootstrap/Button";
import './App.css';
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
        <Navigation/>
        <Button variant="primary">Primary</Button>
        <h1>Hello World</h1>
    </div>
  );
}

export default App;
