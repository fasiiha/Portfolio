import "./Skills.css";
import hireImg from "../../assets/ui.png";
// import { Link } from "react-scroll";

function Skills() {
  return (
    <>
      <section id="skills">
        <span className="title">What I do</span>
        <span className="description">
          I am proficient web developer with a solid understanding of front-end
          and back-end technologies, with expertise in data structures and
          algorithms, database management, and object-oriented programming and
          possesses a comprehensive understanding of related programming
          languages.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={hireImg} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX</h2>
                    <p>ui demo</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={hireImg} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WEB</h2>
                    <p>web demo</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={hireImg} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>APP</h2>
                    <p>app demo</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
export default Skills;
