import { Link } from 'react-router-dom';
import './index.scss';
import Avatar from '../../assets/images/profile_pic.jpg'

const Home = () => {


    return (
        <div>
            <div className="container">
                <div className="home-page">
                    <div className="text-zone">
                        <div className="text">
                            <h1>Hi, <br /> I'm Victoria</h1>
                            <h2 className="homeh2">UX/UI Researcher and Designer</h2>
                            <Link to="/about" className='flat-button'>ABOUT ME</Link>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <img src={ Avatar } alt="Avatar" />
                    </div>
                </div>
                <div className="home-projects">
                    <div className="text-zone">
                        <div className="section-name">
                            My Recent Works
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Home