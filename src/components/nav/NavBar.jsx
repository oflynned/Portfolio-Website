import React from "react"

import "./navBar.css"

const NavBar = ({headings, selectedIndex}) =>
    <div className={"nav-bar"}>
        <div className={"nav-content"}>
            <img src={require("../../assets/images/avatar.jpeg")}/>
            <p>Hi, my name is Edmond and I'm a full-stack software engineer.</p>
            <div className={"line"}/>

            <ul>
                {
                    headings.map((heading, index) =>
                        <li className={selectedIndex === index ? "selected" : "unselected"}>
                            {heading}
                        </li>)
                }
            </ul>
        </div>
    </div>

export default NavBar
