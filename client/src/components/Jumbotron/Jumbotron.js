import React from 'react';
import './Jumbotron.css';
import spiral from "../images/spiral2.PNG";
export default function Jumbotron() {
    return (
        <React.Fragment>
           
            <div className="jumbotron justify-content-center">
                <div className="container">
                    <h1 className="welcome">Welcome!</h1>
                    <img id="spiral" src={spiral}></img>
                    <p className="lead">We hope you enjoy perusing our catalogue</p>
                </div>
            </div>
        </React.Fragment>
    )
}