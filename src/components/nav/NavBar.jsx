import React from "react"
import {Link} from "gatsby";

import "./navBar.css"

const NavBar = ({headings, selectedIndex, onClick}) =>
    <div className={"nav-bar"}>
        <div className={"nav-content"}>
            <div className={"avatar"}>
                <img src={require("../../assets/images/avatar.jpeg")}/>
            </div>

            <div className={"person-details"}>
                <h1><strong>Edmond O'Flynn</strong></h1>
                <h2>Full-Stack Web Developer</h2>
            </div>

            <div className={"nav-links"}>
                <ul>
                    {
                        headings.map(({title, link}, index) =>
                            <li className={selectedIndex === index ? "selected" : "unselected"}>
                                <Link to={link}>{title}{selectedIndex === index ? " >" : ""}</Link>
                            </li>)
                    }
                </ul>
            </div>

            <div className={"social-links"}>
            </div>
        </div>
    </div>

export default NavBar
