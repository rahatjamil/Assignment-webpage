import "./stylePage1/Documents.css";
import React from "react";
import { CgNotes } from 'react-icons/cg';


class Documents extends React.Component {
    render() {
        return (
            <div className="documents">
                <div className="heading"><p>Files / Documents</p></div>
                <div className="doc"><span className="icon"><CgNotes /></span><span>Check Up Results.pdf</span></div>
                <div className="doc"><span className="icon"><CgNotes /></span><span>Check Up Results.pdf</span></div>
                <div className="doc"><span className="icon"><CgNotes /></span><span>Medical Prescription.pdf</span></div>
                <div className="doc"><span className="icon"><CgNotes /></span><span>Dental X-Ray Results.pdf</span></div>
            </div>
        )
    }
}

export default Documents;