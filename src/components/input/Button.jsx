import React from "react"

import "./button.css"

const Button = ({label, styling = "primary", onClick}) =>
    <button className={styling} onClick={onClick}><p>{label}</p></button>

export default Button
