import logo from '../images/blue-white.png';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="top-navbar py-2 px-5">
      <img src={logo} alt="Logo"/>
    </nav>
  );
}

export default NavBar;