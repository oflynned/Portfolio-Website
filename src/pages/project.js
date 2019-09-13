import React, {Component} from "react";

import NavBar from "../components/nav/NavBar";

import "./projects.css";

class Projects extends Component {
    render() {
        return (
            <div className={"project"}>

                <NavBar selectedIndex={1}/>

                <div className={"content"}>
                    <div className={"offset-page-content"}>
                        <div className={"content-inner"}>
                            <h1>Project Name</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
