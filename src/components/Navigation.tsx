import React from "react";
import '../scss/Navbar.scss'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export class Navigation extends React.Component<{scrollHome: any, scrollProblem: any}> {
    render() {
        return (
            <Navbar expand="md" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand className="mr-auto" onClick={this.props.scrollHome}><h1 id="brandName">Inspire A Girl</h1></Navbar.Brand>
                    <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Item onClick={this.props.scrollHome} className="active">
                                <a className="navbar-link">Home</a>
                            </Nav.Item>
                            <Nav.Item onClick={this.props.scrollProblem}>
                                <a className="navbar-link">The Problem</a>
                            </Nav.Item>
                            <Nav.Item onClick={this.props.scrollHome}>
                                <a className="navbar-link">About Us</a>
                            </Nav.Item>
                            <Nav.Item onClick={this.props.scrollHome}>
                                <a className="navbar-link">Who We Help</a>
                            </Nav.Item>
                            <Nav.Item onClick={this.props.scrollHome}>
                                <a className="navbar-link">Get Involved</a>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;
