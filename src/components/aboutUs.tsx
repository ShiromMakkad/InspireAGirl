import React from "react";
import '../scss/components/aboutUs.scss'
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export class AboutUs extends React.Component {
    render() {
        return (
            <Container>
                <div id="aboutUs">
                    <div id="aboutUsText">
                        <h2>About Us</h2>
                        <br/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi
                            ut
                            aliquip ex ea commodo consequat. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in
                            culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p><b>Sed ut perspiciatis unde omnis</b></p>
                    </div>
                    <div id="aboutUsImageContainer">
                        <div id="aboutUsImageBackground">
                            <Image src={require('../assets/rotary.png')} id="aboutUsImage" fluid/>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
