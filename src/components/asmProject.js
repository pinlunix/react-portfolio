// Ancient Spanish Monastery Project
import "./projectStyle.scss"
import FieldResearch from ".././assets/images/asm/field_research.png"
import UserPersona from ".././assets/images/asm/jonas_persona.png"
import CurHome from ".././assets/images/asm/current_homepage.png"
import WireframeHome from ".././assets/images/asm/wireframe_home.png"
import Wireframe from ".././assets/images/asm/wireframe.png"
import DesignSys from ".././assets/images/asm/design_system.png"
import Gallery from ".././assets/images/asm/gallery_page.png"
import Visit from ".././assets/images/asm/visit_page.png"

function ASM() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>Ancient Spanish Monastery</h1>
            {/* Insert image */}
            <div className="center">
                <button>
                    <a
                        href=""
                        target="_blank"
                    >
                        Full Case Study
                    </a>
                </button>
                <button>
                    <a
                        href="https://www.figma.com/proto/FGPD8ANQnTUSHTXnMEhYad/High-Fidelity-Prototype?node-id=1-980&starting-point-node-id=1%3A980&mode=design&t=sGg4VvpBDo7aoo58-1"
                        target="_blank"
                    >
                        High-Fidelity Prototype
                    </a>
                </button>
            </div>
            <h2>CONTEXT</h2>
                <p>
                The Ancient Spanish Monastery is a historical site in North Miami, Florida. 
                The monastery was moved from Spain to South Florida, and today it stands as a 
                museum hosting historical artifacts, a beautiful garden, and a charming church. 
                The museum’s website provides information for visitors, photographers, and people 
                interested in renting the space for an event.
                </p>
            <h2>DESIGN STATEMENT</h2>
                <p>
                The website’s current design is difficult to navigate and may be complicated for younger audiences. 
                My goal is to improve the design and usability of the Ancient Spanish Monastery’s website so that 
                young visitors around the age of 10 can easily understand and navigate the website to learn about the historical site.
                </p>
                <br/>
                <p>
                    The challenges I want to address:
                    <ol>
                        <li>
                            There are inconsistencies throughout the website’s formatting. It feels distracting to see items not aligned.
                        </li>
                        <li>
                            Some information is found by clicking a link that opens a new page. This makes the navigation experience uncomfortable and complicated.
                        </li>
                    </ol>
                </p>
            <h2>FIELD RESEARCH</h2>
                <p>
                    The monastery is just a 5-minute drive from my home in North Miami. 
                    I’m surprised by how close it is, but I have never visited before. 
                    It was the perfect setup for me to act as a tourist. I took lots of photos, 
                    observed other visitors, and had fun touring the museum.
                </p>
                <img src={ FieldResearch } alt="Field Research Collage" />
            <h2>USER STORIES</h2>
                <p>
                    My target audience are children around 10 years of age. Since the goal is to help them learn about local history, 
                    one of my created user personas is Jonas, a 10-year old student who loves going to museums. 
                    He is curious about the world and wants to learn more.
                </p>
                <img src={ UserPersona } alt="Jonas's User Persona" />
            <h2>WIREFRAMING</h2>
                <p>
                    Here is what the current website's homepage looks like:
                </p>
                <img src={ CurHome } alt="Current Homepage of Ancient Spanish Monastery's website" />
                <p>
                    The misalignment of items on the page is apparent at first glance. I will fix those while creating 
                    the prototype.
                </p>
                <p>
                    Creating a wireframe helps me to visualize how someone would navigate the website and what they might expect 
                    to see on the navigation bar for a museum’s website. This goes towards helping me tackle the challenge of 
                    improving the navigation experience. Below is a wireframe of the home page.
                </p>
                <img src={ WireframeHome } alt="Wireframe of Homepage" />
                <p>
                    Thinking from the perspective of a visitor on a museum website, the first things I like to find is what is the location, 
                    how to visit, a photo gallery, and contact info. The original website does have this information, 
                    but some of it is complicated to find via clicking hyperlinks that open a pdf on a new page. 
                    Simplifying the navigation experience to easy-to-find tabs on a navigation bar would be more intuitive. I also simplified my 
                    approach to the website redesign by not including the informational pages about renting the space for events. This is due to my 
                    goal for redesigning for just visiting the museum. A future improvement would be to include those in the navigational bar.
                </p>
            <h2>THE REDESIGN</h2>
                <h3>DESIGN SYSTEM</h3>
                    <p>
                    I used the original website and the photos I took as a tourist to guide my color and UI design choices. 
                    Since it is an ancient monastery and historical site, a palette of creams and browns fits the theme. 
                    For typography, I chose Della Respira for headline texts to satisfy the feeling of beauty and simple elegance and 
                    Lato for body texts to keep it easy to read and simple without being distracting. 
                    The shapes of input boxes and buttons are slightly rounded with a drop shadow to indicate intractability.
                    </p>
                    <img src={ DesignSys } alt="Design System of Redesign" />
                <h3>HIGH-FIDELITY PROTOTYPE</h3>
                    <p>
                        My final prototype is similar to the original website with the main changes being in the navigation, 
                        placement of information, and touching up item alignments. Here are a few screenshots of the final prototype:
                    </p>
                    <img src={ Visit } alt="High-Fidelity Prototype Visit Page" />
                    <br/>
                    <img src={ Gallery } alt="High-Fidelity Prototype Visit Page" />
            <h2>USER TESTING</h2>
                <p>
                    I conducted usability testing over Zoom and found that the navigation did turn out to be simple and easy to understand. 
                    There was some minor confusion over the label for one of my navigation tabs, but it did not hinder anyone from 
                    finding the information they were looking for.
                </p>
            <h2>REFLECTIONS</h2>
                <p>
                    This was my very first UX/UI project, so every step was a challenge for me to learn from. 
                    This project is valuable to me as it became my first step on the journey of UX/UI research and design! 
                    The things I enjoyed learning the most about on this project were storytelling, how to wireframe, 
                    and the importance of accessibility standards when creating a design system. 
                    I’m excited to showcase my newfound knowledge and skills in future UX/UI projects.
                </p>
        </div>
    )
}

export default ASM