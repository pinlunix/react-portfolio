// ACM Studios SRS Debugger
import "../projectStyle.scss"
import Button from "react-bootstrap/Button";
import HeaderImg from "../../assets/images/debugger/debugger_home.png"
import Clover from "../../assets/images/debugger/clover_npc_concept.png"
import CloverLevel from "../../assets/images/debugger/clover_level.png"
import Tilemap from "../../assets/images/debugger/tilemap.png"
import GameImg from "../../assets/images/debugger/game_screenshot.png"
import Glitch from "../../assets/images/debugger/glitch_tileset.png"
import GlitchLevel from "../../assets/images/debugger/glitch_level.png"
import Cube from "../../assets/images/debugger/round-cube.png"
import LevelMap from "../../assets/images/debugger/level_map.png"

function DebuggerGame() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>Debugger</h1>
            <img style={{width:"90%", marginTop:"10px", marginBottom:"10px"}} src={ HeaderImg } alt="Mapping Project Website Screenshot" />
            <div className="center">
                <Button
                    variant="primary"
                    href="https://raddishradish.itch.io/debugger"
                    target="_blank"
                    style={{ maxWidth: "250px", color:"white" }}
                >
                    View Website
                </Button>
            </div>
            <div className="project-info">
                <div className="subtitle">PROJECT MEMBERS</div>
                    <div className="sub-text">
                        Alexander Chen, Zane Clark, Spencer Gouw, Mike Han, Kevin Hong, Ray Hsiao, Amber Jiang, <span class="bolded">Victoria Lam</span>, Brad Lowe, Felix Peng, Anbu Vajuravel, Andrew Zhu
                    </div>
            </div>
            <h2>CONTEXT</h2>
                <p>
                    Debugger is a 2D puzzle game based on the premise “catch bugs to fix bugs.” In a world crawling with bugs that bend the rules of reality, 
                    play as a young Bug Hunter venturing out in the field for the first time. Learn the behavior of your prey and turn that knowledge against 
                    them to clear levels! Learn more about the world you reside in and yourself through conversations with other denizens of the Digital Plane!
                </p>
                <h3>MY ROLE</h3>
                    <p>
                        Concept/Tilemap/UI Artist/Programmer
                    </p>
                    <p>
                        I created a concept art piece, the tilemaps used throughout the game, and helped update the UI to improve player experience.
                    </p>
            <h2>MY WORK</h2>
                <div className="center">
                    <figure class="clearfix">
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div class="img-container">
                                <img style={{width:"70%"}} src={ Clover } alt="Concept art of Clover NPC" />
                            </div>
                            <div class="img-container">
                                <img style={{width:"120%"}} src={ CloverLevel } alt="Level showing Clover NPC" />
                            </div>
                        </div>
                        <p style={{clear:"both"}}></p>
                        <figcaption>Concept art of Clover character (left), Level showing Clover (right)</figcaption>
                    </figure>
                </div>
                <div className="center">
                    <figure class="clearfix">
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div class="img-container">
                                <img class="scaled" src={ Tilemap } alt="Tilemap of Debugger game" />
                            </div>
                            <div class="img-container">
                                <img style={{width:"120%"}} src={ GameImg } alt="Screenshot of a level in Debugger" />
                            </div>
                        </div>
                        <p style={{clear:"both"}}></p>
                        <figcaption>Tilemap used in Debugger (left), Screenshot of a level in Debugger (right)</figcaption>
                    </figure>
                </div>
                <div className="center">
                    <figure class="clearfix">
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div class="img-container">
                                <img class="scaled" style={{backgroundColor:"black"}} src={ Glitch } alt="Glitch tileset" />
                            </div>
                            <div class="img-container">
                                <img style={{width:"120%"}} src={ GlitchLevel } alt="Level with glitchy tiles" />
                            </div>
                        </div>
                        <p style={{clear:"both"}}></p>
                        <figcaption>Tileset of glitchy effect (left), Screenshot of a level with glitchy tiles (right)</figcaption>
                    </figure>
                </div>
                <div className="center">
                    <figure class="clearfix">
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div class="img-container">
                                <img style={{width:"70%"}} src={ Cube } alt="UI element shaped as a pixel rounded cube" />
                            </div>
                            <div class="img-container">
                                <img style={{width:"120%"}} src={ LevelMap } alt="Level Map" />
                            </div>
                        </div>
                        <p style={{clear:"both"}}></p>
                        <figcaption>UI element for level selection in Debugger (left), Level Map with UI element (right)</figcaption>
                    </figure>
                </div>
            <h2>REFLECTIONS</h2>
                <p>
                    I had participated in a few game jams before this project, but this was my first big game development project. I was still a 
                    newbie to game development so this project was a big opportunity to learn more about it and improve. As an artist, I got to learn 
                    how to make tilemaps for a 2D pixel game. It was a fun experience working in a large team with people studying different majors 
                    working together.
                </p>
        </div>
    )
}

export default DebuggerGame