import React from "react";
import '../scss/components/whoWeHelp.scss'
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export class WhoWeHelp extends React.Component {
    render() {
        return (
            <Container>
                <div id="whoWeHelp">
                    <div id="whoWeHelpImageContainer">
                        <div id="whoWeHelpImageBackground">
                            <Image src={require('../assets/WhoWeHelp.jpg')} id="whoWeHelpImage" fluid/>
                        </div>
                    </div>
                    <div id="whoWeHelpText">
                        <h2>Who We Help</h2>
                        <br/>
                        <p>Our goal is to provide an education for girls who lack the ability to receive it themselves
                            for financial reasons. Their access to proper education will help them become productive
                            members of society.</p>
                        <p>We sponsored an eighth-grader named Surbhi who lost her father a few years ago. Her mother
                            was struggling to pay her tuition without the aid of her father. We provided the financial
                            means for her to get the education she deserves.</p>
                    </div>
                </div>
            </Container>
        )
    }
}
