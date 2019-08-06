import React from "react";
import "./Header.css";


const Header = props => (
    <div className="container-fluid">
        <div className="row text-center">
            <div className="col col-sm-12">
                <div className="header">
                    <div className="title">{props.children}</div><hr></hr>
                    <div className="scores">
                        Score: {props.score} Highscore: {props.highscore}
                    </div>
                </div>
            </div>
        </div>
    </div >
);

export default Header;
