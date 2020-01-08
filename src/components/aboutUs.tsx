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
                        <p>The resource disparity between the upper and lower classes of developing countries has a
                            substantial negative impact on the female population. Many women living in rural India have
                            little to no say in anything concerning their homes or work. The root of this problem comes
                            from a lack of female education.</p>
                        <p>"The best way to uplift an impoverished section of society is through education. That is what
                            we aspire to do here at Inspire a Girl."</p>
                        <p><b>Anoushka Makkad - Founder</b></p>
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
