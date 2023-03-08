import "./stylePage1/Nav2.css";
import React from "react";

class Nav2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0     
        }
        this.handleTab = this.handleTab.bind(this);
      }

      handleTab(e) {
        this.setState ({
            activeTab: e    
        });
    }

    render() {
        return (
            <div className="nav2">
                <div className={`tabs ${this.state.activeTab === 0? 'actives' : ''}`} onClick={() => this.handleTab(0)}><a href="#">Upcoming Appointments</a></div>
                <div className={`tabs ${this.state.activeTab === 1? 'actives' : ''}`} onClick={() => this.handleTab(1)}><a href="#">Past Appointments</a></div>
                <div className={`tabs ${this.state.activeTab === 2? 'actives' : ''}`} onClick={() => this.handleTab(2)}><a href="#">Medical Records</a></div>
            </div>
        )
    }
}

export default Nav2;