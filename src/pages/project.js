import React from "react";

import NavBar from "../components/nav/NavBar";

import "./project.css";

const Project = ({pageContext: {project}}) => (
    <div className={"project"}>
        <NavBar selectedIndex={1}/>
        <div className={"content"}>
            <div className={"offset-page-content"}>
                <div className={"content-inner"}>
                    <h1>{project.title}</h1>
                </div>
            </div>
        </div>
    </div>
);

export default Project;
