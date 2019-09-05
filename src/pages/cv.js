import React, {Component} from "react";
import {Helmet} from "react-helmet";

import NavBar from "../components/nav/NavBar";

import headings from "../common/navHeadings";

class CV extends Component {
    render() {
        return (
            <div className={"cv"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar headings={headings} selectedIndex={3}/>
            </div>
        )
    }
}

export default CV;
