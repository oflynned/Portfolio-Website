import React, {Component} from "react";

import "./projectCard.css";

class ProjectCard extends Component {
    mapDisposition(disposition) {
        switch (disposition) {
            case "PERSONAL":
            default:
                return "Personal project";
            case "FREELANCE":
                return "Contract project";
        }
    }

    render() {
        const {onClick, title, description, disposition, tags} = this.props;
        return (
            <div onClick={onClick} className={"project-card"}>
                <div className={"card-image"}/>
                <div className={"card-content"}>
                    <h3>{title}</h3>
                    <p>{this.mapDisposition(disposition)}</p>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}


export default ProjectCard;
