import "./stylePage1/Details.css";
import React from "react";

class Details extends React.Component {
    render() {
        return (
            <div className="details">
                <div className="contents"><p>Gender</p><p className="values">Female</p></div>
                <div className="contents"><p>Birthday</p><p className="values">Feb 24th, 1997</p></div>
                <div className="contents"><p>Phone Number</p><p className="values">(239) 555-0108</p></div>
                <div className="contents"><p>Registered Date</p><p className="values">Feb 24th, 1997</p></div>
                <div className="contents"><p>Street Address</p><p className="values">JL. Diponegoro No. 21</p></div>
                <div className="contents"><p>City</p><p className="values">Cilacap</p></div>
                <div className="contents"><p>Zip Code</p><p className="values">655849</p></div>
                <div className="contents"><p>Member Status</p><p className="values">Active Member</p></div>
            </div>
        )
    }
}

export default Details;