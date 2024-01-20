import "./LanguageSkills.css";
import hireImg from "../../assets/ui.png";
// import { Link } from "react-scroll";

function LanguageSkills() {
  return (
    <>
      <section className="language-skills">
        <div id="languages">
          <h1 className="title">Languages</h1>
          <p className="description">llllllllllllllllllllllllll</p>
          <div className="lanImages">
            <img src={hireImg} alt="Image" className="lanImg" />
            <img src={hireImg} alt="Image" className="lanImg" />
            <img src={hireImg} alt="Image" className="lanImg" />
            <img src={hireImg} alt="Image" className="lanImg" />
            <img src={hireImg} alt="Image" className="lanImg" />
            <img src={hireImg} alt="Image" className="lanImg" />
          </div>
        </div>
      </section>
    </>
  );
}
export default LanguageSkills;
