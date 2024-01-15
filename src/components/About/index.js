import './index.scss';

const About = () => {
    return(
        <div className="about-section">
            <div>
                <h1 style={{textAlign:"center"}}>
                    About Me
                </h1>
                <div className="section-text">
                    I have always appreciated the design of UI in the applications I use and the video games 
                    I enjoy playing in my free time. One fateful day, I fully discovered my passion for UX/UI and 
                    barreled forth into exploring, experimenting, and learning the craft.
                </div>
                <br/>
                <div className="section-text-bottom">
                    I completed my B.S. in Computer Science from University of California, Los Angeles. I interned with 
                    HUE, a UCLA-based network, as one of my first steps in learning UX/UI. Currently, I'm looking for 
                    internships or part-time work as I apply for graduate school programs.
                </div>
            </div>
        </div>
    )
}

export default About