import React from "react";
import "./Wrapper.css";

const Wrapper = props =>
    <div className="wrapper">
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                {props.children}
            </div>;
        </div>
    </div>



export default Wrapper;
