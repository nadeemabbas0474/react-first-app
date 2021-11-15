import React from "react";
import './style.css'
export const Button = (props) => {
    console.log(props)
    return (
        <button className="btn btn-primary" 
        onClick={ props.onSubmit}
        >{props.value}</button>
    )
}