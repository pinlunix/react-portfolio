// HUE Internship: La Historia Project
import "./projectStyle.scss"

function LaHistoria() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>La Historia Historical Society Museum</h1>
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
                        href="https://www.lahistoriamuseum.org/"
                        target="_blank"
                    >
                        Visit Website
                    </a>
                </button>
            </div>
            <div className="project-info">
                <div className="subtitle">CLIENT</div>
                    <div className="sub-text">
                        La Historia Historical Society Museum
                        October 2022 - October 2023
                    </div>
                <div className="subtitle">PROJECT MEMBERS</div>
                    <div className="sub-text">
                        James Yoon, Sookie Cho, Alexandra Lansing, Lindsay Harrison, Cassidy Tu, <span class="bolded">Victoria Lam</span>, Gaby Sumilang, Annmarie Cong, Justin Grant
                    </div>
                <div className="subtitle">ORG</div>
                    <div className="sub-text">
                        UCLA Humans in User Experience
                    </div>
            </div>
            <h2>CONTEXT</h2>
                <p>
                The La Historia Historical Society Museum is a historical and cultural archive based in El Monte, California. 
                The museum preserves and shares the histories of the largely Latino community in the region.
                </p>
                <h3>MY ROLE</h3>
                    <p>
                        As a UX/UI Researcher, my responsibilities include field research, working with the stakeholders to 
                        identify goals and requirements, and researching CMS.
                    </p>
                <h3>PROJECT DELIVERABLES</h3>
                    <p>
                        Reorganize and redesign La Historia Museum’s website.
                    </p>
                <h3>PROJECT IMPACT</h3>
                    <p>
                        Remarkably increased visitor engagement and the website is easier to update and maintain by La Historia staff and volunteers.
                    </p>
            <h2>DESIGN STATEMENT</h2>
                <p>
                    Throughout our research and design process, we focused on creating a website that was accessible to a wide range 
                    of ages and technological backgrounds that encouraged visitors to become involved with the organization: 
                    namely, to donate materials, to donate financially, or to sign up to volunteer. Furthermore, the needs of the 
                    organization and its staff/volunteers was paramount, as non-profits tend to have less staffing and more turnover than other sectors. 
                    Therefore, the website should not only be designed to increase visitor engagement but be easy to update and 
                    maintain by current and future La Historia staff and volunteers.
                </p>
            <h2>FIELD RESEARCH</h2>
                <p>
                    I visited El Monte and La Historia with two team members to take photos of the city to understand the local culture, interview community members, and interview the stakeholders of La Historia.
                </p>
                <p>KEY FINDINGS:</p>
                <ol>
                    <li>
                        The history of El Monte centers around migrant camps that were largely Latina/o and their histories/customs were 
                        and continue to be neglected by other historical institutions, such as the El Monte Historical Museum
                    </li>
                    <li>
                        Some of the difficulties faced by La Historia include engaging younger audiences; obtaining consistent funding, 
                        especially amid the COVID-19 pandemic; getting and archiving cultural materials; and maintaining technology.
                    </li>
                    <li>
                        The future of the organization depended on engaging the younger audiences through outreach activities and local schools.
                    </li>
                    <li>
                        Financial and institutional sustainability are integral in the organization’s continued and long-term success.
                    </li>
                </ol>
                <p>
                    We learned from our field research the importance of involving the stakeholders in the design process. 
                    The website is not only for visitors, but it is important for the museum staff and volunteers, 
                    who may not have extensive technological knowledge, to update and maintain the website. 
                    The target audience included both visitors and the organization.
                </p>
            <h2>UX STORYTELLING</h2>
                <p>
                    We created six personas informed by our field research’s conclusions. Below is one of the personas depicting Jessica Kohn, 
                    a woman not from El Monte but is interested in local history. Her journey map depicts how she would use La Historia’s website to donate money.
                </p>
                {/* Image of persona */}
            <h2>INFORMATION ARCHITECTURE</h2>
                <p>
                    We conducted a content inventory to identify buttons and content, then reorganize and improve the flow. 
                    After mapping out the website hierarchy, a team member and I conducted research on five potential content management systems (CMS): 
                    Wordpress.org, Wix, Webflow, Google Sites, and Hubspot CMS Hub. We identified the pros/cons of each CMS 
                    and selected Wordpress.org, Webflow, and Google Sites as our recommendations to the La Historia Board. 
                    We created demo videos explaining how to use each CMS.
                </p>
                <p>
                    In the end, Google Sites was selected as our CMS.
                </p>
            <h2>USER TESTING</h2>
                <p>
                    After presenting our final prototype to the La Historia Board, we conducted usability testing to 
                    identify pain points we missed. Some improvements we made were improving flow between subpages and making text describing the organization and exhibitions more engaging.
                </p>
            <h2>THE FINAL PROTOTYPE</h2>
                <p>
                    The final prototype is live at <a href="https://www.lahistoriamuseum.org" target="_blank">lahistoriamuseum.org</a>, 
                    created on Google Sites. I created a document with instructions for the La Historia Board on 
                    how to update and maintain the website, including information for connecting Google forms to an email and 
                    updating the website with multimedia content.
                </p>
            <h2>REFLECTIONS</h2>
                <p>
                    This project illustrated how UX/UI can be used to reinvigorate a nonprofit’s web presence. 
                    I learned the most during the field research section of this project. It was my first experience 
                    conducting interviews in-person and my first time interviewing with stakeholders. It was a valuable experience 
                    to let me learn about the importance of involving stakeholders during the design process, 
                    and taught our team that the target audience included both the visitors and the organization. 
                    Additionally, I had the opportunity to learn about CMS, which is useful knowledge for future UX/UI projects.
                </p>
        </div>
    )
}

export default LaHistoria