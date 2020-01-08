import React from "react";
import '../scss/components/banner.scss'
import Button from "react-bootstrap/Button";

export class Banner extends React.Component<{ scrollProblem: any }> {
    render() {
        return (
            <div id="banner">
                <div id="tint">
                    <img src={require('../assets/bannerImage.jpg')} id="img" alt="Indian Girl"/>
                </div>
                <div id="bannerText">
                    <h1>Call to Action</h1>
                    <h3>Subtitle</h3>
                    <Button size="lg" onClick={this.props.scrollProblem}>Learn More</Button>
                </div>
            </div>
        )
    }
}
