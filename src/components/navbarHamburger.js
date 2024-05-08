import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

var color = "black";
const divStyle = {
    backgroundColor: ({ color } ? 'gray' : 'black'),
};

function NavHamburger(prop) {
    const [open, setOpen] = useState(false);
    console.log(color);
    if(open == true){
        color = "gray";
    } else {
        color = "black";
    }
    return (
        <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
            <div style={divStyle}/>
            <div style={divStyle}/>
            <div style={divStyle}/>
        </div>
    );
}

export default NavHamburger;