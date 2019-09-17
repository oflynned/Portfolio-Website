import React, {Component} from "react";

import "./projectCard.css";

const dispositionMap = {
    "PERSONAL": "Personal project",
    "FREELANCE": "Contract project"
};

class ProjectCard extends Component {
    render() {
        const {onClick, formattedTitle, title, description, disposition} = this.props;
        return (
            <div onClick={onClick} className={"project-card"}>
                <div className={"card-image-holder"}>
                    <div className={"card-image"}>
                        <img src={`/${formattedTitle}/icon.png`} alt={"project logo"}/>
                    </div>
                </div>
                <div className={"card-content"}>
                    <h3>{title}</h3>
                    <p>{dispositionMap[disposition]}</p>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}


export default ProjectCard;
