// WVS Mapping Project
import "../projectStyle.scss"
import Button from "react-bootstrap/Button";
import HeaderImage from "../../assets/images/wvs/wvs_home.png"
import Abortion from "../../assets/images/wvs/abortion_map.png"

function WVS() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>Mapping Values: How Social values Shape Our World</h1>
            <img style={{width:"90%", marginTop:"10px", marginBottom:"10px"}} src={ HeaderImage } alt="Mapping Project Website Screenshot" />
            <div className="center">
                <Button
                    variant="primary"
                    href="https://storymaps.arcgis.com/stories/505321c54baf42b08766c95823e3b5cd"
                    target="_blank"
                    style={{ color: "#3D0539", background: "#F5D8C7" }}
                >
                    Visit Website
                </Button>
            </div>
            <div className="row" style={{display:"flex"}}>
                <div className="column" style={{flex:"50%"}}>
                    <div className="subtitle">PROJECT MEMBERS</div>
                    <div className="sub-text">
                        Xinran Fang, Jonathan King, <span class="bolded">Victoria Lam</span>, Shiqi Ouyang, Natanael Wijaya
                    </div>
                </div>
                <div className="column" style={{flex:"50%"}}>
                    <div className="subtitle">PROJECT ROLES</div>
                    <div className="sub-text">
                        Project Manager, Web Specialist, Content Developer, Mapping Specialist, Data Specialist
                    </div>
                </div>
                
            </div>
            <h2>CONTEXT</h2>
                <p>
                    This project aims to explore different countries' social and ethical values using data from the mid-2017 to 2021 World Values Survey (WVS). 
                    WVS is an international research program devoted to the scientific and academic study of the social, political, economic, religious, and cultural 
                    values of people in the world.
                </p>
                <h3>MY ROLE</h3>
                    <p>
                        I was the content developer, responsible for overseeing the organization of content for the website and ensuring visualizations integrated well 
                        with the written content.
                    </p>
            <h2>RESEARCH QUESTIONS</h2>
                <ol>
                    <li>
                        Generally, how do social values and ethical values differ in different countries?
                    </li>
                    <li>
                        How does the national environment shape/influence people’s social and ethical values? And vice versa. Which factors are most influential 
                        in shaping people’s social and ethical values?
                    </li>
                    <li>
                        Why do certain countries share the same social/ethical values? What are the reasons behind their tendency to hold particular values? 
                        And how do distinctions in social and ethical values between countries tell us about differences in their national development?
                    </li>
                </ol>
            <h2>METHODS/TOOLS</h2>
                <p>
                    We used ArcGIS and Tableau to conduct initial exploration of our dataset and create the final map visualizations in this project. We also used 
                    ArcGIS StoryMaps to create the project's website, showing our research, maps, findings, and analysis.
                </p>
            <h2>NARRATIVE</h2>
                <p>
                    We narrowed our dataset down to focus on the topics of abortion, divorce, and homosexuality. We chose to explore these topics 
                    as they are divisive topics that could lead to interesting observable trends.
                </p>
                <p>
                    I researched the topics of abortion and homosexuality for this project and created map visualizations for these topics from the dataset. 
                    Here is one of the map visualizations for the data on abortion:
                </p>
                {/* image of abortion map */}
                <div className="center">
                    <figure>
                        <img class="scaled" src={ Abortion } alt="Map Visualization of Abortion Data" />
                        <figcaption>Map Visualization on Whether Abortion is Justifiable</figcaption>
                    </figure>
                </div>
                <p>
                    From my background research about abortion and stigma, I learned that the main themes studies about abortion focus on include stereotyping, 
                    discriminatory policy, and marginalization of abortion as a medical practice. I used this research as a starting point to analyze the map 
                    visualization for the question on how justifiable is abortion.
                </p>
                <p>You can view the full research at our project website: <a href="https://storymaps.arcgis.com/stories/505321c54baf42b08766c95823e3b5cd" target="_blank">Mapping Values</a></p>
            <h2>CONCLUSION</h2>
                <p>
                    From our research and map visualizations, we observed that in general, the concepts of abortion, homosexuality, and divorce were generally more 
                    accepted in Western societies, while they were generally less accepted in Eastern Societies. We did some additional research after analyzing our maps 
                    and concluded that these observations are a result of a variety of factors, including religion, economic development levels, and culture.
                </p>
            <h2>REFLECTIONS</h2>
                <p>
                    This project taught me the value of datasets containing geographic data and the trends that can be found from analyzing it. 
                    I had the opportunity to practice cleaning large datasets and learned how to create and understand map visualizations using ArcGIS.
                </p>
        </div>
    )
}

export default WVS