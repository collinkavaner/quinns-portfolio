import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import qkLogo from '../assets/qk-logo.png'


function Navbar() {



  return (
    <nav>
        <NavLink to="/" className={'nav-link'}>
            <img className='logo' src={qkLogo} alt="QK Logo" />
        </NavLink>
      <div className='nav-links'>
          <NavLink to="/" className={'nav-link'}>Work</NavLink>
          <NavLink to="/about" className={'nav-link'}>About</NavLink>
      </div>
    </nav>
  )
}

export default Navbar