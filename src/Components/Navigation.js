import "./Navigation.css"
import React from "react"

class Navigation extends React.Component {
    render() {
        return (
            <ul className="navigation">
                <li><figure><img src="../images/image8.png"><figcaption></figcaption></img></figure></li>
                <li><figure><p>+</p><figcaption>NEW</figcaption></figure></li>
                <li><figure><img src="../images/image2.png"><figcaption>PATIENT</figcaption></img></figure></li>
                <li><figure><img src="../images/image4.png"><figcaption>FOLDER</figcaption></img></figure></li>
                <li><figure><img src="../images/image3.png"><figcaption>UPLOAD</figcaption></img></figure></li>
                <li><figure><img src="../images/image6.png"><figcaption>REPORT</figcaption></img></figure></li>
                <li><figure><img src="../images/image5.png"><figcaption>SETTING</figcaption></img></figure></li>
                <li><figure><img src="../images/image7.png"><figcaption>LOGOUT</figcaption></img></figure></li>
            </ul>
        );
    };
}

export default Navigation;