import "./Navbar.css";
import menu from "../../assets/menu.png";
// import ContactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="leftLink">
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="menuListItem"
          >
            {isHovered ? "fasiha arshad" : "code by fasiha"}
          </Link>
        </div>

        <div className="menu">
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

        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="mobnavMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
            className="mobListItem"
            onClick={() => setShowMenu(false)}
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
            onClick={() => setShowMenu(false)}
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
            onClick={() => setShowMenu(false)}
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
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
