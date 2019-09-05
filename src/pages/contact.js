import React, {Component} from "react";
import {Helmet} from "react-helmet";

import headings from "../common/navHeadings";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

import NavBar from "../components/nav/NavBar";

import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <div className={"contact"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar headings={headings} selectedIndex={4}/>

                <div className={"content"}>
                    <div className={"offset-page-content"}>
                        <div className={"content-inner"}>
                            <h1>Contact me</h1>
                            <p>I am available for hire both on an employee and contractor basis. Feel free to reach out
                                if you have any ideas for how we could work together.</p>

                            <table>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                        <a href={"mailto:oflynned@gmail.com"}>oflynned@gmail.com</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>LinkedIn</td>
                                    <td>
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                        <a href={"https://www.linkedin.com/in/edmond-o-flynn-41b06497"}
                                           target={"_blank"}>edmond-o-flynn</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>GitHub</td>
                                    <td>
                                        <FontAwesomeIcon icon={faGithub}/>
                                        <a href={"https://github.com/oflynned"} target={"_blank"}>oflynned</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
