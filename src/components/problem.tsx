import React from "react";
import '../scss/components/problem.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons/faBookReader";
import {faFeatherAlt} from "@fortawesome/free-solid-svg-icons/faFeatherAlt";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons/faPiggyBank";
import {faSchool} from "@fortawesome/free-solid-svg-icons/faSchool";

export class Problem extends React.Component {
    render() {
        return (
            <div id="problem">
                <h2 style={{fontSize: "3rem"}}>The Problem</h2>
                <div id="problemIcon">
                    <div className="wrapIcons">
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faBookReader}/>
                            <p className="iconCaption">Women make up <b>two-thirds</b> of illiterate people</p>
                        </div>
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faFeatherAlt}/>
                            <p className="iconCaption">Only <b>39%</b> of rural girls attend secondary school</p>
                        </div>
                    </div>
                    <div className="wrapIcons">
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faPiggyBank}/>
                            <p className="iconCaption">Every year of primary school increases girls' wages
                                by <b>10-20%</b></p>
                        </div>
                        <div className="problemIconContainer">
                            <FontAwesomeIcon size="5x" className="problemIcons" icon={faSchool}/>
                            <p className="iconCaption">Rural girls are <b>twice</b> as likely as urban girls to be out
                                of school</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
