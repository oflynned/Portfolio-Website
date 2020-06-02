import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {Link} from "gatsby";

import {overview} from "../common/skills";

import NavBar from "../components/nav/NavBar";
import TextLoop from "react-text-loop";

import "./index.css"
import Card from "../components/layout/card";

const jobTitles = [
    "a full-stack engineer.",
    "a TypeScript developer.",
    "a React developer.",
    "a Node.js developer.",
    "an Android developer."
];

class Index extends Component {
    render() {
        return (
            <div className={"index"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar selectedIndex={0}/>

                <div className={"content"}>
                    <div className={"offset-page-content"}>
                        <div className={"content-inner"}>
                            <h1>Hi there, I'm Ed</h1>
                            <h2 className={"job-title"}>
                                <span>I'm </span>
                                <span><TextLoop interval={1500} children={jobTitles}/></span>
                            </h2>

                            <p>I've been working as a software engineer since 2015.</p>
                            <p>I have maintained, developed, and launched multiple projects from scratch.</p>
                            <p>I am specialised in both frontend and backend development with complex, scalable web
                                applications.</p>
                            <p>I work mainly with Javascript with frameworks such as React.js and Node.js, but also have
                                extensive experience with Ruby, Java and Python.</p>

                            <p>
                                Check out my <a href={"/cv.pdf"} target={"_blank"}>resume</a> or
                                in-depth project <Link to={"/portfolio"}>portfolio</Link> for more information.
                            </p>

                            <div className={"grid competencies"}>
                                <div className={"col"}>
                                    <p>My core development competencies:</p>
                                    <ul>
                                        <li>Writing clean code</li>
                                        <li>Test-driven development</li>
                                        <li>Continuous integration/delivery</li>
                                        <li>Code review</li>
                                        <li>Story/task estimation</li>
                                    </ul>
                                </div>

                                <div className={"col"}>
                                    <p>My core management competencies:</p>
                                    <ul>
                                        <li>Backlog grooming</li>
                                        <li>Leading project teams</li>
                                        <li>Team mentoring</li>
                                        <li>Sprint management</li>
                                        <li>Client requirement gathering</li>
                                    </ul>
                                </div>
                            </div>

                            <h2>Technologies Overview</h2>
                            <div className={"grid competencies"}>
                                {
                                    overview.map(({title, description, icons}) =>
                                        <div className={"col"}>
                                            <Card title={title} description={description} icons={icons}/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
