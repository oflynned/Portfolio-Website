import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "gatsby";
import {injectIntl, FormattedMessage} from "gatsby-plugin-intl"

import TextLoop from "react-text-loop";

import {overview} from "../common/skills";
import NavBar from "../components/nav/NavBar";
import Card from "../components/layout/card";

import "./index.css"

const jobTitles = [
    <FormattedMessage id={"index__aFullstackEngineer"}/>,
    <FormattedMessage id={"index__aReactDeveloper"}/>,
    <FormattedMessage id={"index__aNodejsDeveloper"}/>,
    <FormattedMessage id={"index__anAndroidDeveloper"}/>
];

const Index = () =>
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
                        <span><FormattedMessage id={"index__iAm"}/></span>
                        <span><TextLoop interval={1500} children={jobTitles}/></span>
                    </h2>

                    <p><FormattedMessage id={"index__intro1"}/></p>
                    <p><FormattedMessage id={"index__intro2"}/></p>
                    <p><FormattedMessage id={"index__intro3"}/></p>
                    <p><FormattedMessage id={"index__intro4"}/></p>

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
    </div>;

export default injectIntl(Index);
