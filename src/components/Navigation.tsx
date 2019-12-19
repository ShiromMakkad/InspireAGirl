import React from "react";
import '../scss/Navbar.scss'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand="md" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand className="mr-auto" href="#"><h1 id="brandName">Inspire A Girl</h1></Navbar.Brand>
                    <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Item as="a" href="#" className="active">
                                <a className="navbar-link" href="#">Home</a>
                            </Nav.Item>
                            <Nav.Item as="a" href="#">
                                <a className="navbar-link" href="#">Test2</a>
                            </Nav.Item>
                            <Nav.Item as="a" href="#">
                                <a className="navbar-link" href="#">Test3</a>
                            </Nav.Item>
                            <Nav.Item as="a" href="#">
                                <a className="navbar-link" href="#">Test4</a>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;
