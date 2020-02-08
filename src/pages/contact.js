import React, {Component} from "react";
import {Helmet} from "react-helmet";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

import NavBar from "../components/nav/NavBar";

import "./contact.css";

const contactMethods = [
    {
        method: "Email",
        icon: faEnvelopeOpen,
        href: "mailto:oflynned@gmail.com",
        target: null,
        hrefAnchor: "oflynned@gmail.com"
    },
    {
        method: "LinkedIn",
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/edmond-o-flynn-41b06497",
        target: "_blank",
        hrefAnchor: "edmond-o-flynn"
    },
    {
        method: "GitHub",
        icon: faGithub,
        href: "https://github.com/oflynned",
        target: "_blank",
        hrefAnchor: "oflynned"
    }
];

class Contact extends Component {
    render() {
        return (
            <div className={"contact"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar selectedIndex={5}/>

                <div className={"content"}>
                    <div className={"offset-page-content"}>
                        <div className={"content-inner"}>
                            <h1>Contact me</h1>
                            <p>I am available for hire on a contractor basis for projects. Feel free to reach out if you have any ideas for how we could work together.</p>

                            <table>
                                {
                                    contactMethods.map(({method, icon, href, target, hrefAnchor}) => (
                                        <tr>
                                            <td>{method}</td>
                                            <td>
                                                <FontAwesomeIcon icon={icon}/>
                                                <a href={href} target={target}>{hrefAnchor}</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
