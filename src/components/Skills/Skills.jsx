import "./Skills.css";

function Skills() {
  return (
    <>
      <section id="skills">
        <div className="leftside">
          <div className="titleMain">I can help you with...</div>
          <span className="descript">
            I am proficient web developer with a solid understanding of
            front-end and back-end technologies, with expertise in data
            structures and algorithms, database management, and object-oriented
            programming and possesses a comprehensive understanding of related
            programming languages.
          </span>
        </div>
        <div className="rightside">
          <div className="skillBars">
            <div className="skillBar">
              <div className="skillBarText">
                <h4>01</h4>
                <h2>Design</h2>
                <p>
                  Crafting visually stunning and user-friendly digital
                  experiences, I specialize in web and app design, prioritizing
                  solid company branding as the cornerstone for successful
                  online presence.
                </p>
              </div>
            </div>
            <div className="skillBar">
              <div className="skillBarText">
                <h4>02</h4>
                <h2>Development</h2>
                <p>
                  Building scalable websites from the ground up, my focus is on
                  seamless integration with design, incorporating micro
                  animations and transitions. I bring a comprehensive skill set to turn
                  concepts into impactful digital projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Skills;
