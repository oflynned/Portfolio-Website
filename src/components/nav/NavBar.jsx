import React from "react"
import {Link} from "gatsby";

import "./navBar.css"

const NavBar = ({headings, selectedIndex}) =>
    <div className={"nav-bar"}>
        <div className={"nav-content"}>
            <div className={"avatar"}>
                <img src={require("../../assets/images/avatar.jpeg")} alt={"profile picture"}/>
            </div>

            <div className={"person-details"}>
                <h1><strong>Edmond O'Flynn</strong></h1>
                <h2>Full-Stack Developer</h2>
            </div>

            <div className={"nav-links"}>
                <ul>
                    {
                        headings.map(({title, link}, index) =>
                            <li className={selectedIndex === index ? "selected" : "unselected"}>
                                {
                                    link.match(/pdf/) === null ?
                                        <Link to={link}>{title}{selectedIndex === index ? " >" : ""}</Link> :
                                        <a href={link} target={"_blank"}>{title}</a>
                                }
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className={"social-links"}>
            </div>
        </div>
    </div>

export default NavBar
