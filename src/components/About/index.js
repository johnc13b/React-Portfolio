import React from 'react';
import coverImage from "../../assets/cover/cover-image.png";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
            <div className="my-2">
                Don't tell me about the old adage of "You can't teach an old dog new tricks." I'm not getting any younger. But I also refuse to be left behind.
                <p />
                A wakling example of the old saying "Jack of all trades, master of none." With a professional background in automotive and mechanical repair, working with my hands has always been my strong suit. I have also had a strong interest in computer technology since I was very young. In turn, I've dabbled in various aspects of the category as a hobby.
                <p />
                <a href="../../assets/docs/webdev.pdf" target="_blank" download>
                    Download Resume
                </a>
            </div>
        </section>
    )
}

export default About