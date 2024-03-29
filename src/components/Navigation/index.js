import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/images/name_logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Navigation = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                Home
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                Projects
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                Resume
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                About
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferer' 
                    href='https://www.linkedin.com/in/victoria-lam-rainbow/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferer' 
                    href='https://github.com/pinlunix'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>

)

export default Navigation