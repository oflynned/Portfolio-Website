import React, {Component} from "react";
import {Helmet} from "react-helmet";

import headings from "../common/navHeadings";

import NavBar from "../components/nav/NavBar";

import "./portfolio.css";

const tabs = ["All"];

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            selectedTabIndex: 0
        }
    }

    render() {
        return (
            <div className={"portfolio"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar headings={headings} selectedIndex={1}/>

                <div className={"content"}>
                    <div className={"offset-page-content"}>
                        <div className={"content-inner"}>
                            <h1>Portfolio</h1>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;
