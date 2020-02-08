import React from "react"
import {Link} from "gatsby";
import {injectIntl} from "gatsby-plugin-intl"

import headings from "../../common/navHeadings";

import "./navBar.css"

const NavBar = ({intl, selectedIndex}) =>
    <div className={"nav-bar"}>
        <div className={"nav-content"}>
            <div className={"avatar"}>
                <img src={require("../../assets/images/avatar.jpeg")} alt={"profile picture"}/>
            </div>

            <div className={"person-details"}>
                <h1><strong>Edmond O'Flynn</strong></h1>
                <h2>{intl.formatMessage({id: "nav__jobTitle"})}</h2>
            </div>

            <div className={"nav-links"}>
                <ul>
                    {
                        headings.map(({title, link}, index) => {
                                const formattedTitle = intl.formatMessage({id: title});
                                return <li key={index} className={selectedIndex === index ? "selected" : "unselected"}>
                                    {
                                        link.match(/pdf/) === null ?
                                            <Link to={link}>
                                                {formattedTitle}{selectedIndex === index ? " >" : ""}
                                            </Link> :
                                            <a href={link} target={"_blank"}>
                                                {formattedTitle}
                                            </a>
                                    }
                                </li>
                            }
                        )
                    }
                </ul>
            </div>

            <div className={"language-choice"}>
            </div>
        </div>
    </div>;

export default injectIntl(NavBar);
