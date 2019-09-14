import React from "react";

import NavBar from "../nav/NavBar";

import "./project.css";
import Laptop from "../layout/laptop";

const Project = ({pageContext: {project}}) => (
    <div className={"project"}>
        <NavBar selectedIndex={1}/>
        <div className={"content"}>
            <div className={"offset-page-content"}>
                <div className={"content-inner"}>
                    <h1>{project.title}</h1>
                    <p>{project.tags.sort().join(", ")}</p>
                    <p>{project.description}</p>
                    <p>Project requirements were as follows:</p>
                    <ul>
                        {project.requirements.map(r => <li>{r}</li>)}
                    </ul>

                    <h2>What is {project.title}?</h2>
                    {project.overview.map(o => <p>{o}</p>)}

                    <h2>Showcase</h2>
                    <Laptop images={project.showcase.desktop}/>
                </div>
            </div>
        </div>
    </div>
);

export default Project;
