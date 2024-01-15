import './index.scss';
import { Row } from "react-bootstrap";
import ProjectCard from "../ProjectCards"
import ASMImg from "../../assets/images/asm/proto_home.png"
import LaHistoriaImg from "../../assets/images/lahistoria/lahistoria.png"
import RhythmryImg from "../../assets/images/rhythmry/c-d-x-_music.jpg"
import WVSImg from "../../assets/images/wvs/wvs_home.png"
import ComicsImg from "../../assets/images/comics/erik-mclean-comics.jpg"
import PlaneImg from "../../assets/images/plane/ross-parmly-airplane.jpg"
import DebuggerImg from "../../assets/images/debugger/debugger_home.png"
import UGGImg from "../../assets/images/ugg/title_screen.png"

const Projects = () => {
    return(
        <div className="project-section">
            <div>
                <h1 style={{textAlign:"center"}}>
                    Projects
                </h1>
                <h2 className="projecth2" style={{textAlign:"center"}}>
                    Here are projects I've worked on.
                </h2>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="grid-view">
                    <ProjectCard
                        imgPath={ASMImg}
                        title="Ancient Spanish Monastery"
                        tags="Field Research, UX Research, UX/UI Design, User Interview, Figma, Prototype"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        projectLink="../ASM"
                    />
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
                        imgPath={WVSImg}
                        title="WVS Mapping Project"
                        tags="Digital Humanities, Data Analysis, Data Visualization, Mapping, ArcGIS"
                        description="Dataset analysis project on World Values Survey's mid-2017 to 2021 data using ArcGIS."
                        projectLink="../WVS"
                    />
                    <ProjectCard
                        imgPath={ComicsImg}
                        title="Graphic Novels"
                        tags="Data Cleaning, Data Analysis, Data Visualization, Python"
                        description="Dataset analysis project on Graphic Narrative Corpus's graphic novels dataset using Python to analyze datasets and create visualizations."
                        projectLink="../Comics"
                    />
                    <ProjectCard
                        imgPath={PlaneImg}
                        title="Aviation Safety"
                        tags="Digital Humanities, Data Analysis, Data Visualization, Wordpress"
                        description="Digital humanities project analyzing airline accident records dataset from the Aviation Safety Network."
                        projectLink="../Plane"
                    />
                    <ProjectCard
                        imgPath={DebuggerImg}
                        title="Debugger"
                        tags="Game Development, Programming, Unity, C#, Concept Art, Tilemapping"
                        description="2D pixel puzzle game based on the premise “catch bugs to fix bugs.” Made with Unity. Played on web browser."
                        projectLink="../DebuggerGame"
                    />
                    <ProjectCard
                        imgPath={UGGImg}
                        title="Untitled Gacha Game"
                        tags="Game Development, Programming, Unity, C#, Art, User Interface"
                        description="Rhythm gacha game themed around Chinese zodiacs. Made with Unity. Played on mobile devices."
                        projectLink="../UGG"
                    />
                    {/* <ProjectCard
                        title="Ancient Spanish Monastery"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        // projectLink=""
                    /> */}
                </Row>
            </div>
        </div>
    );
}

export default Projects