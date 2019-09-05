import React, {Component} from "react";
import {Helmet} from "react-helmet";
import NavBar from "../components/nav/NavBar";
import headings from "../common/navHeadings";

class Offer extends Component {
    render() {
        return (
            <div className={"offer"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar headings={headings} selectedIndex={2}/>
            </div>
        )
    }
}

export default Offer;
