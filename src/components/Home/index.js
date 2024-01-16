import './index.scss';
import Avatar from '../../assets/images/profile_pic.jpg'
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import ProjectCard from "../ProjectCards"
import {Link, NavLink} from 'react-router-dom'

import LaHistoriaImg from "../../assets/images/lahistoria/lahistoria.png"
import RhythmryImg from "../../assets/images/rhythmry/c-d-x-_music.jpg"
import UGGImg from "../../assets/images/ugg/title_screen.png"

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
                        <div style={{display:"flex"}}>
                            <Button
                                href={"mailto:victorialam2002@gmail.com"}
                                target="_blank"
                                style={{ marginLeft:"0px" }}
                            >
                                Email
                            </Button>
                            <Button
                                href="https://www.linkedin.com/in/victoria-lam-rainbow/"
                                target="_blank"
                            >
                                LinkedIn
                            </Button>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <img src={ Avatar } alt="Avatar" />
                    </div>
                </div>
                <div className="home-projects">
                    <div className="text-zone">
                        <div className="section-name">
                            Recent Projects
                        </div>
                        <div className="section-text">
                            Here are a few projects I've worked on recently:
                        </div>
                        <br/>
                        <div style={{ marginLeft:"200px", marginRight:"200px" }}>
                            <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="home-grid">
                                <ProjectCard
                                    imgPath={LaHistoriaImg}
                                    title="La Historia Museum"
                                    tags="Field Research, UX Research, User Experience, CMS, User Interview, Google Sites"
                                    description="Website redesign for La Historia Museum, a local non-profit museum based in El Monte, California."
                                    projectLink="../LaHistoria"
                                />
                                <ProjectCard
                                    imgPath={RhythmryImg}
                                    title="Rhythmry"
                                    tags="UX Research, UX/UI Design, User Interview, Ideation, Figma, AdobeXD, Prototype"
                                    description="Rhythmry is a music app with unique features focused on the connections between humans and music."
                                    projectLink="../Rhythmry"
                                />
                                <ProjectCard
                                    imgPath={UGGImg}
                                    title="Untitled Gacha Game"
                                    tags="Game Development, Programming, Unity, C#, Art, User Interface"
                                    description="Rhythm gacha game themed around Chinese zodiacs. Made with Unity. Played on mobile devices."
                                    projectLink="../UGG"
                                />
                            </Row>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", marginBottom: "10px"}}>
                            <Button
                                href="/#projects"
                                target="_self"
                            >
                                More Projects
                            </Button>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Home