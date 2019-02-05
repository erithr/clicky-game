import React from "react";
import "./style.css";

const Nav = props => (
    <nav>
        <ul>
            <li className="brand animated lightSpeedIn alignLeft">
                <p>{props.title}</p>
            </li>
            <li id="rw" >{props.correctIncorrect}</li>


            <li className="alignRight">Score - Top: {props.topScore} | Current: {props.score}</li>

        </ul>
    </nav>
);

export default Nav;