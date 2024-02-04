import styles from '../styles/navbar.module.css'
import { NavLink } from 'react-router-dom'
import qkLogo from '../assets/qk-logo.png'


function Navbar() {

  return (
    <nav>
        <NavLink to="/">
            <img className={styles.logo} src={qkLogo} alt="QK Logo" />
        </NavLink>
      <div className={styles.navLinks}>
          <NavLink to="/" style={({isActive}) => isActive ? {color: "#96B3E6"} : null} className={styles.navLink}>Work</NavLink>
          <NavLink to="/about" style={({isActive}) => isActive ? {color: "#96B3E6"} : null} className={styles.navLink}>About</NavLink>
      </div>
    </nav>
  )
}

export default Navbar