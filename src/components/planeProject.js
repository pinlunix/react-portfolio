// Plane Project
import "./projectStyle.scss"
import Button from "react-bootstrap/Button";
import HeaderImage from ".././assets/images/plane/ross-parmly-airplane.jpg"
import Scatterplot from ".././assets/images/plane/incidents_accidents_plot.png"

function Plane() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>Aviation Safety</h1>
            {/* Insert image */}
            <img style={{width:"90%", marginTop:"10px", marginBottom:"10px"}} src={ HeaderImage } alt="Mapping Project Website Screenshot" />
            <div className="center">
                <Button
                    variant="primary"
                    href="https://airlinesafety22.humspace.ucla.edu/"
                    target="_blank"
                    style={{ maxWidth: "250px", color:"white" }}
                >
                    Visit Website
                </Button>
            </div>
            <div className="project-info">
                <div className="subtitle">PROJECT MEMBERS</div>
                    <div className="sub-text">
                        Tiffany Deng, <span class="bolded">Victoria Lam</span>, Lauren Lee, Aman Singh, Christopher Thornton
                    </div>
            </div>
            <h2>CONTEXT</h2>
                <p>
                    Our project investigates the possible correlations between airlines and their incidents in the time periods of 1985-1999 and 2000-2014. 
                    We used the data from the Aviation Safety Network to help us investigate correlations across time periods and airlines.
                </p>
                <h3>MY ROLE</h3>
                    <p>
                        I was the content developer and oversaw the organization of content on the website.
                    </p>
            <h2>RESEARCH QUESTIONS</h2>
                <ol>
                    <li>
                        How can an airline’s prior safety record be used to predict the likelihood of future incidents?
                    </li>
                    <li>
                        What possible correlation is there between distance traveled and airline safety?
                    </li>
                </ol>
            <h2>METHODS/TOOLS</h2>
                <p>
                    We used Tableau and Palladio to create data visualizations. We used Time.Graphics to create a timeline 
                    of major airline events. The project website was designed on Wordpress and the domain was hosted on HumSpace, 
                    a web hosting service.
                </p>
            <h2>NARRATIVE</h2>
                <p>
                    We first did some research about historic causes of major airline safety incidents and air safety practices and standards 
                    to guide us on how to approach our dataset.
                </p>
                <p>
                    I created a few data visualizations on Tableau and analyzed them. One of the visualizations I made is a 
                    scatterplot showing the correlation between incidents and fatal accidents from 1985-2014.
                </p>
                {/* scatterplot image */}
                <div className="center">
                    <figure>
                        <img style={{width:"40%"}} src={ Scatterplot } alt="Scatterplot showing Airline Incidents vs Fatal Accidents" />
                        <figcaption>Scatterplot of Airline Incidents vs Fatal Accidents</figcaption>
                    </figure>
                </div>
                <p>
                    I observed from the scatterplot a positive correlation, meaning as more incidents occur, more fatal accidents occurs. 
                    I noted a large cluster of data points when there are less incidents and less fatal accidents, which may imply that most airlines 
                    in this dataset generally experience less incidents and fatal accidents.
                </p>
                <p>You can view the full research at our project website: <a href="https://airlinesafety22.humspace.ucla.edu/" target="_blank">Mapping Values</a></p>
            <h2>CONCLUSION</h2>
                <p>
                    Key points we found after examining relationships between different variables in the dataset:
                </p>
                <ol>
                    <li>There exists some predictive value in an airline's past safety record</li>
                    <li>There exists a correlation between distance traveled and number of passengers and airline safety</li>
                </ol>
                <p>
                    We found that many of the airlines that held dangerous safety records came from small, national airlines from developing countries. 
                    This observation may suggest some relationship between airline safety and economic factors and regional stability. Another finding 
                    we had was that some airlines that did not previously have high safety incidents showed an increase in crashes in a later time period. 
                    This indicates that airlines still lack adequate safety protocols, despite improvement of technology.
                </p>
            <h2>REFLECTIONS</h2>
                <p>
                    This was my first Digital Humanities project. Throughout this project, I had the opportunity to develop my skills in conducting research on datasets. 
                    I learned how to use Tableau to create visualizations from data and learned how to analyze the data from a humanities perspective. 
                    This project allowed me to think from a humanities point of view and combine the usage of data visualization technologies to tell a story.
                </p>
        </div>
    )
}

export default Plane