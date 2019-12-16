import React from 'react';
import Button from "react-bootstrap/Button";
import Navigation from "./components/Navigation";
import './scss/App.scss';

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
