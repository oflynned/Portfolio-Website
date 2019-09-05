import React, {Component} from "react";
import {Helmet} from "react-helmet";

import headings from "../common/navHeadings";

import NavBar from "../components/nav/NavBar";

class Portfolio extends Component {
    render() {
        return <div className={"portfolio"}>

            <Helmet>
                <title>Edmond O'Flynn | Software Engineer</title>/>
            </Helmet>

            <NavBar headings={headings} selectedIndex={1}/>
        </div>
    }
}

export default Portfolio;
