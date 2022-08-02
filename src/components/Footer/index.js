import React from 'react';
import igSocial from "../../assets/socials/igSocial.png";
import fbSocial from "../../assets/socials/fbSocial.png";
import twSocial from "../../assets/socials/twSocial.png";

function Footer() {

    return (
        <footer className="my-5" >
            <h2 id="footer">Socials</h2>
            <div className="my-2"><li>
                <a href="https://www.instagram.com/call_me_rizzo/">
                    <img src={igSocial} className="my-2" style={{ width: "10%" }} alt="ig icon" /></a>

                <a href="https://www.facebook.com/TheAngryPaw/">
                    <img src={fbSocial} className="my-2" style={{ width: "10%" }} alt="fb icon" /></a>

                <a href="https://twitter.com/theangrypaw">
                    <img src={twSocial} className="my-2" style={{ width: "10%" }} alt="fb icon" /></a>
            </li></div>
        </footer>
    )
}

export default Footer