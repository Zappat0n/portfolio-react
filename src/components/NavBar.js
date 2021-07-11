import logo from '../blue-white.png';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="top-navbar py-2 px-5 d-flex">
      <div className="lef-side">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="right-side">
          <a href="https://github.com/Zappat0n" target="_blank" rel="noopener noreferrer"><i className="fab fa-github p-3"></i></a>
          <a href="https://www.linkedin.com/in/angel-barros/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in p-3"></i></a>
          <a href="https://twitter.com/albarros1973" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter p-3"></i></a>
      </div>
    </nav>
  );
}

export default NavBar;