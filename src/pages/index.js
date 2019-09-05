import React, {Component} from "react"
import {Helmet} from "react-helmet"

import "./index.css"

import headings from "../common/navHeadings";

import NavBar from "../components/nav/NavBar"
import TextLoop from "react-text-loop";

const jobTitles = [
    "a full-stack engineer.",
    "a React developer.",
    "a Node.js developer.",
    "an Android developer.",
    "a team lead.",
    "your next hire."
];

class Index extends Component {
    render() {
        return (
            <div className={"index"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar headings={headings} selectedIndex={0}/>

                <div className={"content"}>
                    <div className={"offset-page-content"}>
                        <div className={"content-inner"}>
                            <h1>Hi there, I'm Ed</h1>
                            <h2 className={"job-title"}>
                                <span>I'm </span>
                                <span><TextLoop delay={2000} children={jobTitles}/></span>
                            </h2>

                            <p>I've been working as a software engineer since 2015.</p>
                            <p>I have maintained, developed, and launched multiple projects from scratch.</p>
                            <p>I am specialised in both frontend and backend development with complex, scalable web
                                applications.</p>
                            <p>I work mainly with Javascript with frameworks such as React.js and Node.js, but also have
                                extensive experience with Ruby, Java and Python.</p>

                            <p>My core development competencies:</p>
                            <ul>
                                <li>Writing clean code</li>
                                <li>Test-driven development</li>
                                <li>Continuous integration & delivery pipelines</li>
                                <li>Code review</li>
                                <li>Story/task estimation</li>
                            </ul>

                            <p>My core team lead/management competencies:</p>
                            <ul>
                                <li>Backlog grooming</li>
                                <li>Leading project teams</li>
                                <li>Team mentoring</li>
                                <li>Sprint management</li>
                                <li>Client requirement gathering</li>
                            </ul>

                            <p>Check out my resume or in-depth project portfolio for more information.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
