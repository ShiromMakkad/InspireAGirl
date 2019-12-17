import React from "react";
import '../scss/Navbar.scss'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export class Navigation extends React.Component {
    render() {
        return (
            <Navbar id="nav" expand="md" variant="light" sticky="top" style={{padding: 0}}>
                <div className="" style={{width: "100%"}}>
                    <div className="d-flex align-content-center" style={{backgroundColor: "white", width: "100%", paddingTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 16}}>
                        <Container>
                            <Navbar.Brand className="mx-md-auto" href="#">Inspire A Girl</Navbar.Brand>
                            <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                        </Container>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor: "#7c6cb2", width: "100%"}}>
                        <Container>
                            <Nav className="mx-auto">
                                <Nav.Item as="a" href="#">
                                    <a className="navbar-link" href="#">Test1</a>
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
                        </Container>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Navigation;
