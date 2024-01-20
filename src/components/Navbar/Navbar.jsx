import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import ContactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu">
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
            className="menuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="project"
            smooth={true}
            offset={-100}
            duration={500}
            className="menuListItem"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="language-skills"
            smooth={true}
            offset={-100}
            duration={500}
            className="menuListItem"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
            className="menuListItem"
          >
            Contact
          </Link>
        </div>
        <button
        
          className="menuBtn"
          onClick={() => {
            document.querySelector('.contact')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src={ContactImg} alt="contactimg" className="menuImg" />
          Contact Me
        </button>


        <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="mobnavMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
            className="mobListItem"
            onClick={()=>setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="project"
            smooth={true}
            offset={-100}
            duration={500}
            className="mobListItem"
            onClick={()=>setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="language-skills"
            smooth={true}
            offset={-100}
            duration={500}
            className="mobListItem"
            onClick={()=>setShowMenu(false)}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
            className="mobListItem"
            onClick={()=>setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
