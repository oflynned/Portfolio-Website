import React, {Component} from "react";

import "./projectCard.css";

class ProjectCard extends Component {
    render() {
        const {onClick, title, description, disposition, tags} = this.props;
        return (
            <div onClick={onClick} className={"project-card"}>
                <div className={"card-image"}/>
                <div className={"card-content"}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}


export default ProjectCard;
