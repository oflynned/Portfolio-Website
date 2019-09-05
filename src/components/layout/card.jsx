import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import "./card.css";

const Card = ({title, description = "hello", icons}) =>
    <div className={"card"}>
        <div className={"card-content"}>
            <div className={"icon-list"}>
                {
                    icons.map(({icon, tint}) => <FontAwesomeIcon icon={icon} color={tint}/>)
                }
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>;

export default Card;
