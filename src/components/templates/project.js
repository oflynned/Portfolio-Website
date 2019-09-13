import React from "react";

import NavBar from "../nav/NavBar";

import "./project.css";

const Project = ({pageContext: {project}}) => (
    <div className={"project"}>
        <NavBar selectedIndex={1}/>
        <div className={"content"}>
            <div className={"offset-page-content"}>
                <div className={"content-inner"}>
                    <h1>{project.title}</h1>
                    <h3>{project.tags.join(", ")}</h3>
                    <p>{project.description}</p>

                    <h2>Project Requirements</h2>
                    <h2>Project Overview</h2>
                    <h2>Challenge</h2>
                    <h2>Approach &amp; Solution</h2>
                </div>
            </div>
        </div>
    </div>
);

export default Project;
