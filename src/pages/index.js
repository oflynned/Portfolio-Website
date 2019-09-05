import React, {Component} from "react"
import {Helmet} from "react-helmet"

import "./index.css"

import headings from "../common/navHeadings";

import NavBar from "../components/nav/NavBar"
import Button from "../components/input/Button";

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
                            <h1>Edmond O'Flynn</h1>
                            <h2>Full-Stack Software Engineer</h2>
                            <p>
                                I'm a software engineer specialised in frontend and backend development for
                                complex, scalable web applications. I work mainly with Javascript with frameworks
                                such
                                as React.js and Node.js, but also have extensive experience with Ruby, Java and
                                Python.
                            </p>

                            <div className={"content-inner-actions"}>
                                <Button label={"View my portfolio"}/>
                                <Button label={"View my resume"}/>
                            </div>
                        </div>

                        <div className={"content-inner"}>
                            <h1>What I do</h1>
                            <p>
                                I have been developing software professionally since 2015 with startups and
                                fully-fledged companies. Below is a quick overview of my main skillsets and some
                                technologies I frequently use. Check out my resume or in-depth project portfolio for
                                more information.
                            </p>
                        </div>

                        <div className={"content-inner"}>
                            <h1>Interesting Projects</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
