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
        <div fluid className="project-section">
            <div>
                <h1 style={{textAlign:"center"}}>
                    Projects
                </h1>
                <h2 className="projecth2" style={{textAlign:"center"}}>
                    Here are a few projects I've worked on recently.
                </h2>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="grid-view">
                    <ProjectCard
                        imgPath={ASMImg}
                        title="Ancient Spanish Monastery"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        projectLink="./ASM"
                    />
                    <ProjectCard
                        imgPath={LaHistoriaImg}
                        title="La Historia Museum"
                        description="Website redesign for La Historia Museum, a local non-profit museum based in El Monte, California."
                        projectLink="./LaHistoria"
                    />
                    <ProjectCard
                        imgPath={RhythmryImg}
                        title="Rhythmry"
                        description="Rhythmry is a music app with unique features focused on the connections between humans and music."
                        projectLink="./Rhythmry"
                    />
                    <ProjectCard
                        imgPath={WVSImg}
                        title="WVS Mapping Project"
                        description="Dataset analysis project on World Values Survey's mid-2017 to 2021 data using ArcGIS."
                        projectLink="./WVS"
                    /><ProjectCard
                        imgPath={ComicsImg}
                        title="Graphic Novels"
                        description="Dataset analysis project on Graphic Narrative Corpus's graphic novels dataset using Python."
                        projectLink="./Comics"
                    />
                    <ProjectCard
                        imgPath={PlaneImg}
                        title="Aviation Safety"
                        description="Digital humanities project analyzing airline accident records dataset from the Aviation Safety Network."
                        projectLink="./Plane"
                    />
                    <ProjectCard
                        imgPath={DebuggerImg}
                        title="Debugger"
                        description="2D pixel puzzle game based on the premise “catch bugs to fix bugs.” Made with Unity."
                        projectLink="./DebuggerGame"
                    />
                    <ProjectCard
                        imgPath={UGGImg}
                        title="Untitled Gacha Game"
                        description="Rhythm gacha game themed around Chinese zodiacs. Made with Unity."
                        projectLink="./UGG"
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