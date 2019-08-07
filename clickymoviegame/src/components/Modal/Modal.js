import React from "react";
import "./Modal.css";



export default class Modal extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col col-12">

                    <h2>HOW TO PLAY</h2>
                    <hr></hr>
                    <h3>
Click on A Movie Poster. When clicked, the array shuffles, moving the posters around randomly.

The point of the game is to try to click on as many of the Movie Posters as possible, without clicking the same one twice.

The game ends when the same Movie Poster is clicked Twice.
                        
                    </h3>

                </div>
            </div>
        </div>


    }
}


export default Modal;
