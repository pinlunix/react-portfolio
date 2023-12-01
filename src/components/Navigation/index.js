import './index.scss'
import {Link, NavLink} from 'react-router-dom'
// import Logo from '../../assets/images/logo.png'

const Navigation = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* TODO: logo image */}
            {/* <img src={Logo} alt="logo"/> */}
        </Link>
        <nav>
            {/* Remove Home after I put in Logo image */}
            {/* TODO: Make the navigation links prettier */}
            <NavLink exact="true" activeclassname="active" to="/">
                Home
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                Projects
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                About
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                Resume
            </NavLink>
        </nav>
    </div>

)

export default Navigation