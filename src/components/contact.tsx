import React, {useState} from "react";
import '../scss/components/contact.scss'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const formSubmit = function (e) {
        window.location.href = "mailto:contact@inspireagirl.org?subject=" + subject + "&body=" + body + escape("\r\n\r\n") + "- " + firstName + " " + lastName;
        e.preventDefault();
    };

    return (
        <div id="contact">
            <h2 id="contactHeader">Contact Us To Donate</h2>
            <Container id="contactFormContainer">
                <Form id="contactForm" onSubmit={formSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required placeholder="First Name" value={firstName}
                                          onInput={e => setFirstName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required placeholder="Last Name" value={lastName}
                                          onInput={e => setLastName(e.target.value)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Email Address" value={email}
                                      onInput={e => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control required placeholder="Subject" value={subject}
                                      onInput={e => setSubject(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control required as="textarea" rows="7" value={body}
                                      onInput={e => setBody(e.target.value)}/>
                    </Form.Group>

                    <Button id="contactSubmit" variant="primary" type="submit">Submit</Button>
                </Form>
                <div id="rightSideContact">
                    <div id="contactImageContainer">
                        <div id="contactImageBackground">
                            <Image src={require('../assets/Anoushka.jpg')} id="contactImage" fluid/>
                        </div>
                    </div>
                    <div id="donationInformation">
                        <div className="donationInfo"><FontAwesomeIcon icon={faEnvelope} className="donationIcons"
                                                                       size="2x"/>
                            <p className="donationText"> contact@inspireagirl.org</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Contact;
