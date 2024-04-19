
import './navbar.css';
import background from '../assets/background1.jpg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>BiteBuddy</h1>
        </div>
        <div className="navbar-right">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact Us</a></li>
            <li className="button"><a href="/loginsignup">Login</a></li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Navbar;