// ACM Studios SRS Untitled Gacha Game
import "../projectStyle.scss"
import Button from "react-bootstrap/Button";
import HeaderImg from "../../assets/images/ugg/title_screen.png"
import Card from "../../assets/images/ugg/view_card.jpg"
import Dragon from "../../assets/images/ugg/dragon_2d_card_art_rendered.png"
import WSnake from "../../assets/images/ugg/victoria_white_snake.png"
import GSnake from "../../assets/images/ugg/victoria_green_snake.png"

function UGG() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>Untitled Gacha Game</h1>
            <img style={{width:"90%", marginTop:"10px", marginBottom:"10px"}} src={ HeaderImg } alt="Title Screen Art of UGG" />
            <div className="center">
                <Button
                    variant="primary"
                    href="https://austinlaw8.itch.io/untitled-gacha-game"
                    target="_blank"
                    style={{ maxWidth: "250px", color:"white" }}
                >
                    View Website
                </Button>
            </div>
            <div className="project-info">
                <div className="subtitle">PROJECT MEMBERS</div>
                    <div className="sub-text">
                        Advaith Gowrishetty, Amy Xin, Austin Burkett (FutureYou), Ayumi, Daniel Wang, Derek Jiang, Emily Pham,
                        Jennifer Ding, Justin Wang, Karen Jin, Lucy Kimber, Michael Shi, Rachie Jin, Rachel Truong, Sean (Distatikal), 
                        Sophia Choi, Sunny, Tiffany Hwang, <span class="bolded">Victoria Lam</span>
                    </div>
            </div>
            <h2>CONTEXT</h2>
                <p>
                    A rhythm gacha game themed around Chinese zodiacs. Played on mobile devices.
                </p>
                <h3>MY ROLE</h3>
                    <p>
                        Artist/Programmer
                    </p>
                    <p>
                        As an artist, I worked on card artwork as part of Untitled Gacha Game's gacha mechanic where players can pull collectible character cards. 
                        As a programmer, I programmed the user interface for viewing information of a collected character card.
                    </p>
            <h2>MY WORK</h2>
                <div className="center">
                    <figure>
                        <img class="scaled" src={ Card } alt="Viewing card infomation in UGG" />
                        <figcaption>User interface of viewing character card information</figcaption>
                    </figure>
                </div>
                <div className="center">
                    <figure>
                        <img style={{backgroundColor:"white", width:"60%"}} class="scaled" src={ Dragon } alt="Dragon character card" />
                        <figcaption>Dragon character art</figcaption>
                    </figure>
                </div>
                <div className="center">
                    <figure>
                        <img style={{backgroundColor:"white", width:"60%"}} class="scaled" src={ WSnake } alt="White Snake character card" />
                        <figcaption>White Snake character art (Not in current version of the game)</figcaption>
                    </figure>
                </div>
                <div className="center">
                    <figure>
                        <img style={{backgroundColor:"white", width:"60%"}} class="scaled" src={ GSnake } alt="Green Snake character card" />
                        <figcaption>Green Snake character art (Not in current version of the game)</figcaption>
                    </figure>
                </div>
            <h2>REFLECTIONS</h2>
                <p>
                    This is my second time working on a big game development project. This time, the team was even bigger and we worked alongside many guest 
                    artists. Due to how many people were involved in this project, a lot of effort was put into organizing deadlines and distributing the work 
                    among the members. I got more involved with programming the user interface this time and got to practice coding in C#, the language used in 
                    the game engine Unity. I also had a blast seeing all the amazing artwork by all the artists who worked on UGG.
                </p>
                <p>
                    UGG is currently under development and I am working on level design and creating more art (shown above are sneak peeks at the White and Green Snake). 
                    We will update the game soon!
                </p>
        </div>
    )
}

export default UGG