import "./Home.css";
import hireImg from "../../assets/hireMe.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <section id="home">
        <div className="content">
          <span className="hello">Hello,</span>
          <span className="introText">
            I{"'"}m <span className="introName">Fasiha Arshad</span> <br /> Website
            Developer
          </span>
          <p className="details">
            I am proficient web developer with a solid understanding of
            front-end and back-end technologies, with expertise in data
            structures and algorithms, database management, and object-oriented
            programming and possesses a comprehensive understanding of related
            programming languages.
          </p>
          <Link>
            <button className="btn">
              <img src={hireImg} alt="HireMeIMG" className="hireImg" />
              Hire Me
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
export default Home;
