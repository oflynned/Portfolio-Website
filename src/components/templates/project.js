import React from "react";
import {Link} from "gatsby";

import NavBar from "../nav/NavBar";
import Laptop from "../layout/laptop";

import "./project.css";

const Project = ({pageContext: {project}}) => (
    <div className={"project"}>
        <NavBar selectedIndex={1}/>
        <div className={"content"}>
            <div className={"offset-page-content"}>
                <div className={"content-inner"}>
                    <Link className={"back-link"} to={"/portfolio"}>&lt; Back</Link>
                    <h1>{project.title}</h1>
                    <p>{project.tags.sort().join(", ")}</p>
                    {project.url && <a href={project.url} target={"_blank"}>{project.url}</a>}
                    <p>{project.description}</p>

                    <p>Project requirements were as follows:</p>
                    <ul>
                        {project.requirements.map(r => <li>{r}</li>)}
                    </ul>

                    <h2>What is {project.title}?</h2>
                    {project.overview.map(o => <p>{o}</p>)}

                    <Laptop images={project.showcase.desktop.map(
                        image => `/${project.formattedTitle}/desktop/${image}`
                    )}/>
                </div>
            </div>
        </div>
    </div>
);

export default Project;
