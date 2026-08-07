import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/Asset 7.png'
import LogoSubtitle from '../../assets/images/Asset 8.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    library.add(faTwitter, faLinkedin, faGithub)
    return (
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Ritik" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

            </nav>
            <ul>
                <li>
                    <a target="_blank"
                        rel="noreffer"
                        href="https://www.linkedin.com/in/ritik-arora-2956b7114/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank"
                        rel="noreffer"
                        href="https://github.com/ritik435"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank"
                        rel="noreffer"
                        href="https://twitter.com/Ritik_Ar435"
                    >
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar;