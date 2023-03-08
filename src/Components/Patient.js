import "./stylePage1/Patient.css";
import React from "react";
import image1 from '../images/image1.png';

class Patient extends React.Component {
    render() {
        return (
            <div className="patient">
                <div><img src={image1} alt="photograph" /></div>
                <div className="name"><p>Diane Cooper</p></div>
                <div className="email"><p>diane.cooper@example.com</p></div>
                <div className="numbers">
                    <div><p className="count">15</p><p className="countRef">Past</p></div>
                    <div><p className="count">02</p><p className="countRef">Upcoming</p></div>
                </div>
                <div><button className="btn">Send Message</button></div>
            </div>
        )
    }
}

export default Patient;