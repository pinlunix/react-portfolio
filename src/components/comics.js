// Graphic Novels
import "./projectStyle.scss"
import HeaderImg from ".././assets/images/comics/erik-mclean-comics.jpg"
import ExploreBookTable from ".././assets/images/comics/explore_book.png"
import ExploreBookGraph from ".././assets/images/comics/explore_book_graph.png"
import GenderPie from ".././assets/images/comics/gender_pie.png"

function Comics() {
    return(
        <div className="viewing-section">
            <h1 style={{textAlign:"center"}}>Graphic Novels Data Analysis Python Project</h1>
            <img style={{width:"90%", marginTop:"10px", marginBottom:"10px"}} src={ HeaderImg } alt="Image of Comic Books" />
            <div className="center">
                <button>
                    <a
                        href="https://pinlunix.github.io/dh140blog/posts/GNCProject.html"
                        target="_blank"
                    >
                        Visit Website
                    </a>
                </button>
            </div>
            <h2 >CONTEXT</h2>
                <p>
                    This project analyzes the dataset about graphic novels compiled by the Graphic Narrative Corpus (GNC). 
                    I used Python to help me clean the dataset and create data visualizations from the dataset to guide me in answering 
                    my research questions about how graphic novels have evolved over time.
                </p>
            <h2>RESEARCH QUESTIONS</h2>
                <ol>
                    <li>
                        What conclusions can be made about the gender ratio of authors of graphic novels?
                    </li>
                    <li>
                        Why does one country have more graphic novel authors than others?
                    </li>
                    <li>
                        What can be observed with the top 10 most popular books?
                    </li>
                    <li>
                        Describe any pattern(s) observed in when graphic novels were published?
                    </li>
                </ol>
            <h2>EXPLORING THE DATA</h2>
                <p>
                    I used Python in Jupyter Notebook to download and clean the dataset. I narrowed down the dataset to 
                    focus on the data that will help me answer my research questions, such as gender, book ratings, and country of origin.
                </p>
                <p>
                    After cleaning the dataset, I created a few initial graphs to explore the dataset and have a starting point on 
                    how I want to approach answering my research questions. Below are a few of my initial graphs:
                </p>
                {/* insert exploration graphs */}
                <div className="center">
                    <figure>
                        <img style={{width:"50%"}} src={ ExploreBookTable } alt="Table of Cleaned Dataset about Books" />
                        <figcaption>Table of cleaned dataset about Books</figcaption>
                    </figure>
                </div>
                <div className="center">
                    <figure>
                        <img style={{width:"50%"}} src={ ExploreBookGraph } alt="Graph from Books dataset of Original Language" />
                        <figcaption>Graph from cleaned Books dataset depicting count of Original Language of graphic novels</figcaption>
                    </figure>
                </div>
            <h2>ANALYSIS</h2>
                <p>
                    After exploring the data, I finished organizing the cleaned dataset to start answering my research questions.
                </p>
                <p>
                    My first research question: "What conclusions can be made about the gender ratio of authors of graphic novels?" 
                    I created a pie chart showing percentages to display a visual of the gender ratio of graphic novel authors.
                </p>
                {/* gender ratio chart */}
                <div className="center">
                    <figure>
                        <img style={{width:"50%"}} src={ GenderPie } alt="Pie Chart for Graphic Novels Gender Ratio" />
                        <figcaption>Pie Chart of graphic novels gender ratio. Note: Male is 1.0, Female is 0.0</figcaption>
                    </figure>
                </div>
                <p>
                    I observed from my chart there is a significant male authorship of graphic novels. I wanted to understand why this is 
                    and conducted research about it and how it affects graphic novels and their audience.
                </p>
                <p>
                    From my research, I learned that creators of comic books are overwhelmingly men, and even the characters in the comics 
                    are skewed towards men. I explored how this affected readers and found that these comics were largely catered to a 
                    male-dominated audience. However, this is slowly changing over time as comics shifting to a digital format may make it 
                    more welcoming for female audiences.
                </p>
                <p>You can view the full research at my project website: <a href="https://pinlunix.github.io/dh140blog/posts/GNCProject.html" target="_blank">Graphic Novels Project</a></p>
            <h2>REFLECTIONS</h2>
                <p>
                    This project gave me a fun reason to do research about graphic novels. I personally am a fan of reading web comics, but didn't 
                    know a lot about the history of graphic novels and their trends. 
                    The project taught me how to use code from a humanities perspective. This was a new experience for me coming from a Computer Science background.
                    I learned that Python has a lot of useful functions that make cleaning datasets easy and interesting libraries that are built around analyzing 
                    text data.
                </p>
        </div>
    )
}

export default Comics