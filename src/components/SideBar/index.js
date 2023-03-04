import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoP from '../../assets/images/logo-p.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoP} alt="logo" />
        <h4
          style={{
            fontSize: '20px',
            textDecoration: 'none',
            borderBottom: 'none',
          }}
        >
          Parsa
        </h4>
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
      </nav>
    </div>
  )
}
