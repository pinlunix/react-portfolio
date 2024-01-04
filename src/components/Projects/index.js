import './index.scss';
import { Row } from "react-bootstrap";
import ProjectCard from "../ProjectCards"
import ASMImg from "../../assets/images/asm/proto_home.png"
import LaHistoriaImg from "../../assets/images/lahistoria/lahistoria.png"
// import RhythmryImg from '../../assets/images/rhythmry/

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
                        title="Rhythmry"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        projectLink="./Rhythmry"
                    />
                    <ProjectCard
                        title="WVS Data Mapping"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        projectLink="./WVS"
                    /><ProjectCard
                        title="Graphic Novels"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        projectLink="./Comics"
                    />
                    <ProjectCard
                        title="Plane Accidents"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        projectLink="./Plane"
                    />
                    <ProjectCard
                        title="Debugger"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
                        projectLink="./DebuggerGame"
                    />
                    <ProjectCard
                        title="Untitled Gacha Game"
                        description="Website redesign for Ancient Spanish Monastery, a local historical site based in North Miami, Florida."
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