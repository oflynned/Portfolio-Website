import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {navigate} from "gatsby";

import projects from "../common/portfolio"
import NavBar from "../components/nav/NavBar";
import ProjectCard from "../components/layout/projectCard";

import FlipMove from 'react-flip-move';

import "./portfolio.css";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            selectedTabIndex: 0,
            tags: [],
            projects: [],
            filteredProjects: []
        }
    }

    componentDidMount() {
        const sortedProjects = projects.sort((a, b) => a.title > b.title ? 1 : -1);
        const tags = this.groomAvailableTags();
        const allTagIndex = tags.indexOf("All");
        this.setState({
            projects: sortedProjects,
            filteredProjects: sortedProjects,
            tags: this.groomAvailableTags(),
            selectedTabIndex: allTagIndex
        });
    }

    onTagFilterClick(index) {
        const {tags, selectedTabIndex} = this.state;
        if (index !== selectedTabIndex) {
            this.filterProjects(tags[index]);
            this.setState({selectedTabIndex: index});
        }
    }

    groomAvailableTags() {
        let projectTags = new Set(["All"]);
        projects.map(({tags}) => {
            projectTags = new Set([...projectTags, ...tags]);
        });

        return [...projectTags].sort((a, b) => a.toUpperCase() > b.toUpperCase() ? 1 : -1);
    }

    filterProjects(tag = "All") {
        const {projects} = this.state;
        if (tag === "All") {
            this.setState({filteredProjects: projects});
            return;
        }

        this.setState({filteredProjects: projects.filter(({tags}) => tags.includes(tag))});
    }

    render() {
        const {selectedTabIndex, tags, filteredProjects} = this.state;
        return (
            <div className={"portfolio"}>
                <Helmet>
                    <title>Edmond O'Flynn | Software Engineer</title>/>
                </Helmet>

                <NavBar selectedIndex={1}/>

                <div className={"content"}>
                    <div className={"offset-page-content"}>
                        <div className={"content-inner"}>
                            <h1>Portfolio</h1>
                            <p>The following projects are any interesting items relevant to showcasing from both a
                                freelance and personal project point of view. Click any item to learn more, and on the
                                tabs to filter.</p>
                            <div className={"tag-filter"}>
                                <ul>
                                    {
                                        tags.map((tag, index) =>
                                            <li key={tag}
                                                className={index === selectedTabIndex ? "selected" : "unselected"}
                                                onClick={() => this.onTagFilterClick(index)}>
                                                <p>
                                                    {tag}
                                                    <div className={"underline"}/>
                                                </p>
                                            </li>)
                                    }
                                </ul>
                            </div>

                            <div className={"projects-grid"}>
                                <FlipMove className={"grid"}>
                                    {
                                        filteredProjects.map(
                                            ({title, description, tags, disposition}) =>
                                                <ProjectCard
                                                    onClick={() => navigate(`/projects/${title.toLowerCase().replace(/ /g, "-")}`)}
                                                    key={title}
                                                    title={title}
                                                    description={description}
                                                    tags={tags}
                                                    disposition={disposition}/>
                                        )
                                    }
                                </FlipMove>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;
