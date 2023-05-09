import {Link, NavLink} from 'react-router-dom';
import logo from '../logo.svg';
const Navbar = () => {
  return (
    <nav className='navbar '>
      <div className='nav-center'>
        <Link to='/'>
          <img className='logo' src={logo} alt='cocktails database logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <NavLink
              to='/'
              className={({isActive}) => {
                return isActive ? 'link active' : 'link';
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
