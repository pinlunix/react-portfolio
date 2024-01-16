// Rhythmry
import "../projectStyle.scss"
import Button from "react-bootstrap/Button";
import HeaderImg from "../../assets/images/rhythmry/c-d-x-_music.jpg"
import UserPersona from "../../assets/images/rhythmry/persona_1.png"
import UserJourney from "../../assets/images/rhythmry/persona1_journeymap.png"
import WireflowPlaylist from "../../assets/images/rhythmry/edit_playlist_wireflow.png"
import DesignSys from "../../assets/images/rhythmry/ver2_design_system.png"
import Playlist from "../../assets/images/rhythmry/ver2_playlist_highlight.png"

function Rhythmry() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>Rhythmry</h1>
            <img style={{width:"90%", marginTop:"10px", marginBottom:"10px"}} src={ HeaderImg } alt="Image of headphones" />
            <div className="center">
                <Button
                    variant="primary"
                    href="https://pinlunix.github.io/dh199/"
                    target="_blank"
                    style={{ color: "#3D0539", background: "#F5D8C7" }}
                >
                    Full Case Study
                </Button>
                <Button
                    variant="primary"
                    href="https://xd.adobe.com/view/3d1b72e1-1ee8-44dd-9409-06a3c1781455-6848/"
                    target="_blank"
                    style={{ color: "#3D0539", background: "#F5D8C7" }}
                >
                    High-Fidelity Prototype
                </Button>
            </div>
            <h2>CONTEXT</h2>
                <p>
                    Rhythmry is a music app that has unique features allowing users to engage more closely with the music they listen to, 
                    and share their interests with others on an intimate level.
                </p>
            <h2>DESIGN STATEMENT</h2>
                <p>
                    Music listeners need a way to feel emotionally connected to others through their shared experiences and memories with 
                    music in their lives because there are limits with music listening services on the user experience for engaging in shared memory and meaning of music.
                </p>
            <h2>USER RESEARCH</h2>
                <p>
                    I analyzed secondary sources and conducted user interviews as part of my user research to create user personas for Rhythmry.
                </p>
                <p>
                    From secondary sources, I extracted the following keywords to guide the theme for my user personas: mood, memory, technology, family, and collective. 
                    I also learned what users liked about the popular music app Spotify to assist me in developing a way to enhance the experience of creating music playlists.
                </p>
                {/* word cloud image would be cool */}
                <p>
                    From user interviews, I learned there is a special difference between the experiences of listening to music in a group compared to in private. 
                    Through understanding these differences in music experiences, I can better understand how to create the user personas of Rhythmry.
                </p>
            <h2>UX STORYTELLING</h2>
                <p>
                    Shown below is one of my three personas, Grace Walker. Grace is an outgoing college student who has a passion for bonding with people over shared music interests. 
                    She sometimes quotes lyrics to describe her mood.
                </p>
                {/* grace persona */}
                <div className="center">
                    <figure>
                        <img class="scaled" src={ UserPersona } alt="Grace's User Persona" />
                        <figcaption>Grace Walker's User Persona</figcaption>
                    </figure>
                </div>
                <p>
                    Grace aims to create a playlist reflecting her current R&B music phase and discuss her song choices in the playlist. 
                    Below is her journey map to complete her goal.
                </p>
                {/* journey map */}
                <div className="center">
                    <figure>
                        <img class="scaled" src={ UserJourney } alt="Grace's User Journey" />
                        <figcaption>Grace Walker's User Journey</figcaption>
                    </figure>
                </div>
            <h2>LOW-FIDELITY PROTOTYPE SKETCH</h2>
                <h3>DESIGN REQUIREMENTS</h3>
                    <p>
                        I first mapped out what features the app would have before creating the wireframe. I wanted to direct focus on the playlist creation 
                        experience as it would embody the unique features of Rhythmry.
                    </p>
                <h3>WIREFRAME</h3>
                    <p>
                        Shown below is one of the wireflows for how to edit and save a playlist in Rhythmry. What makes this part unique is that the user can 
                        enter a description for a track they added to their playlist. The user also has an option to clip a part of the track to create a music highlight of their favorite part.
                    </p>
                    {/* wireflow for edit playlist img */}
                    <div className="center">
                    <figure>
                        <img class="scaled" src={ WireflowPlaylist } alt="Wireflow of Playlist Edit" />
                        <figcaption>Wireflow for wireframes depicting steps to edit and save a playlist.</figcaption>
                    </figure>
                    </div>
            <h2>DESIGN SYSTEM</h2>
                <p>
                    As this was my first time designing a mobile app, I did some research on recommended design features for mobile devices. 
                    Some features I noted were having large enough font size to read on a mobile screen, making sure the layout works for the 
                    smaller size of mobile screens, and simple navigation since smaller screens are easier to clutter.
                </p>
                {/* img of version 2 design system */}
                <div className="center">
                    <figure>
                        <img class="scaled" src={ DesignSys } alt="Interface Design System" />
                        <figcaption>Interface Design System. Created on Adobe XD.</figcaption>
                    </figure>
                </div>
            <h2>USER TESTING</h2>
                <p>
                    The final prototype was created using Adobe XD. Rhythmry’s basic features include listening to music, searching for music, and creating playlists. 
                    Rhythmry’s unique features are part of creating playlists. These unique features are:
                </p>
                <ol>
                    <li>
                        Writing a text description to a track being added to the playlist.
                    </li>
                    <li>
                        Creating a highlight clip from the track of your favorite part of the track to feature.
                    </li>
                </ol>
                <div className="center">
                    <figure>
                        <img style={{width:"30%"}} src={ Playlist } alt="High Fidelity Prototype Playlist Creator" />
                        <figcaption>Frame of Playlist Creator</figcaption>
                    </figure>
                </div>
                
                <div className="center">
                    <Button
                        variant="primary"
                        href="https://xd.adobe.com/view/3d1b72e1-1ee8-44dd-9409-06a3c1781455-6848/"
                        target="_blank"
                        style={{ color: "#3D0539", background: "#F5D8C7" }}
                    >
                        High-Fidelity Prototype
                    </Button>
                </div>
            <h2>USER TESTING</h2>
                <p>
                    I did two sets of user testing the high-fidelity prototype.
                </p>
                <p>
                    The first usability testing explained the steps for task scenarios. I learned that the user understood how to use the unique 
                    features of adding descriptions to a track added to their playlist and creating a track highlight. This meant I was on the 
                    right track for the design of these features.
                </p>
                <p>
                    For the second UT, I modified the explanation of task scenarios. I wanted to observe if a user can complete the same tasks 
                    without being told explicit steps. Similar to the first UT, the user understood how to use the unique features to complete the tasks.
                </p>
                <p>
                    Overall, my design was easy to understand how to use. The users that participated had differing views on their interest 
                    in the unique features of the app, which may mean Rhythmry may satisfy some audiences more than others.
                </p>
            <h2>CHALLENGES</h2>
                <p>
                    During the design process, I encountered some challenges.
                </p>
                <ol>
                    <li>
                        I spent a significant amount of time experimenting with layouts.
                    </li>
                    <li>
                        It was my first time using Adobe XD, so I spent some time familiarizing myself with its features and resources.
                    </li>
                    <li>
                        Limited functionality in the high-fidelity prototype.
                    </li>
                </ol>
            <h2>REFLECTIONS</h2>
                <p>
                    This project posed new challenges during the research and development process. Addressing the topic of human connections with music, 
                    I learned a lot about the nuances and complex relationships between music and the emotions and memories it can evoke in listeners. 
                    This understanding guided me to create Rhythmry.
                </p>
        </div>
    )
}

export default Rhythmry