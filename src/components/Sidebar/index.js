import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LetterB from '../../assets/images/LetterB.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faList, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons' 

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LetterB} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="portfolio-link" 
            to="/portfolio"
            >
                <FontAwesomeIcon icon={faList} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="resume-link" 
            to="/resume"
            >
                <FontAwesomeIcon icon={faLink} color="#4d4d4e" />
            </NavLink>
        </nav>
<ul>
    <li>
        <a target="_blank" rel='nonreferrer' href='https://www.linkedin.com/in/brandon-knight-21940a206/'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
    </li>
    <li>
        <a target="_blank" rel='nonreferrer' href='https://github.com/blksmk8483'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
    </li>
    <li>
        <a target="_blank" rel='nonreferrer' href='https://www.facebook.com/brandon.knight.5815'>
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
    </li>
    <li>
        <a target="_blank" rel='nonreferrer' href='https://twitter.com/Brandon198483'>
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
    </li>
</ul>
    </div>
)

export default Sidebar