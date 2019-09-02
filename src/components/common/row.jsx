import React from "react";

import "./row.css";

const Row = ({children, className}) => {
    console.log(className);
    return (
        <div className={"row " + className}>
            {children}
        </div>
    );
}

export default Row;
