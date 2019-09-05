import React, {Component} from "react";
import {Helmet} from "react-helmet";

import headings from "../common/navHeadings";

import NavBar from "../components/nav/NavBar";

class Contact extends Component {
    render() {
        return (
            <div className={"contact"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar headings={headings} selectedIndex={4}/>
            </div>
        )
    }
}

export default Contact;
