import "./stylePage1/Wrapper.css";
import React from "react";
import Nav2 from './Nav2';
import Patient from "./Patient";
import Details from "./Details";
import Documents from './Documents';
import Appointments from './Appointments';

class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div><Patient /><Documents /></div>
                <div><Details /><Nav2 /><Appointments /></div>
            </div>
        )
    }
}

export default Wrapper;