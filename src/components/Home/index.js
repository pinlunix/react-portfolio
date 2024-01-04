import { Link } from 'react-router-dom';
import './index.scss';
import Avatar from '../../assets/images/profile_pic.jpg'

const Home = () => {


    return (
        <div>
            <div className="container">
                <div className="home-page">
                    <div className="text-zone">
                        <div className="text">
                            <h1>Hi, <br /> I'm Victoria</h1>
                            <h2 className="homeh2">UX/UI Researcher and Designer</h2>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <img src={ Avatar } alt="Avatar" />
                    </div>
                </div>
                <div className="home-about">
                    <div className="text-zone">
                        <div className="section-name">
                            About Me
                        </div>
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
            </div> 
        </div>
    );
}

export default Home