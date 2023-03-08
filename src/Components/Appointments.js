import "./stylePage1/Appointments.css";
import React from "react";
import { CgNotes } from 'react-icons/cg';

class Appointments extends React.Component {
    render() {
        return (
            <div className="appointments">
                <div className="header"><span>Root Canal Treatment</span><button>Show Previous Treatments</button></div>
                <div className="content">
                    <div className="rows">
                        <div className="tab1"><p>26 Nov'19</p><p className="time">09:00 - 10:00</p></div>
                        <div className="tab2"><p>Treatment</p><p className="type">Open Access</p></div>
                        <div className="tab3"><p>Dentist</p><p className="doctor">Drg. Adam H.</p></div>
                        <div className="tab4"><p>Nurse</p><p className="nurse">Jessicamila</p></div>
                        <div className="note"><a href="#"><span className="icon"><CgNotes /></span>Note</a></div>
                    </div>
                    <div className="rows">
                        <div className="tab1"><p>12 Nov'19</p><p className="time">09:00 - 10:00</p></div>
                        <div className="tab2"><p>Treatment</p><p className="type">Root Canal</p></div>
                        <div className="tab3"><p>Dentist</p><p className="doctor">Drg. Adam H.</p></div>
                        <div className="tab4"><p>Nurse</p><p className="nurse">Jessicamila</p></div>
                        <div className="note"><a href="#"><span className="icon"><CgNotes /></span>Note</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Appointments;