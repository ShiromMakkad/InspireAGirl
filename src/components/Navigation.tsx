import React from "react";
import Container from "react-bootstrap/Container";
import '../scss/Navbar.scss'
import Navbar from "react-bootstrap/Navbar";

export class Navigation extends React.Component {
    render() {
        return (
            <Navbar id="nav" expand="md" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;
