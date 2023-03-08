import "./Navigation.css"
import React from "react"
import image0 from '../images/image0.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';

class Navigation extends React.Component {
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
            <nav className="navigation">    
                <div className={`tab ${this.state.activeTab === 0? 'active' : ''}`} onClick={() => this.handleTab(0)}><a href="#" className="icon"><img src={image8} alt="abc" /></a></div>
                <div className={`tab ${this.state.activeTab === 1? 'active' : ''}`} onClick={() => this.handleTab(1)}><a href="#"><figure><img src={image0} alt="NEW" /><figcaption>NEW</figcaption></figure></a></div>
                <div className={`tab ${this.state.activeTab === 2? 'active' : ''}`} onClick={() => this.handleTab(2)}><a href="#"><figure><img src={image2} alt="PATIENT" /><figcaption>PATIENT</figcaption></figure></a></div>
                <div className={`tab ${this.state.activeTab === 3? 'active' : ''}`} onClick={() => this.handleTab(3)}><a href="#"><figure><img src={image4} alt="FOLDER" /><figcaption>FOLDER</figcaption></figure></a></div>
                <div className={`tab ${this.state.activeTab === 4? 'active' : ''}`} onClick={() => this.handleTab(4)}><a href="#"><figure><img src={image3} alt="UPLOAD" /><figcaption>UPLOAD</figcaption></figure></a></div>
                <div className={`tab ${this.state.activeTab === 5? 'active' : ''}`} onClick={() => this.handleTab(5)}><a href="#"><figure><img src={image6} alt="REPORT" /><figcaption>REPORT</figcaption></figure></a></div>
                <div className={`tab ${this.state.activeTab === 6? 'active' : ''}`} onClick={() => this.handleTab(6)}><a href="#"><figure><img src={image5} alt="SETTING" /><figcaption>SETTING</figcaption></figure></a></div>
                <div className={`tab ${this.state.activeTab === 7? 'active' : ''}`} onClick={() => this.handleTab(7)}><a href="#"><figure><img src={image7} alt="LOGOUT" /><figcaption>LOGOUT</figcaption></figure></a></div>
            </nav>
        );
    };
}

export default Navigation;