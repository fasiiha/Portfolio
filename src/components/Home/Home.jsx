import "./Home.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";

function Home() {
  return (
    <>
      <section id="home">
        <div className="content">
          <span className="hello">Hello, I{"'"}m</span>
          <span className="introName">Fasiha Arshad</span>
          <span className="speciality">Freelance Designer & Developer</span>
          <span className="details">
            I am proficient web developer with a solid understanding of
            front-end and back-end technologies, with expertise in data
            structures and algorithms, database management, and object-oriented
            programming and possesses a comprehensive understanding of related
            programming languages.
          </span>
          <Link>
            <button className="btn btn-one">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; Get in touch
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
export default Home;
