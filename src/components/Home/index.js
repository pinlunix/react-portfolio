import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Victoria</h1>
                <h2>UX/UI Researcher and Designer</h2>
                <Link to="/about" className='flat-button'>ABOUT ME</Link>
            </div>
        </div>
    );
}

export default Home