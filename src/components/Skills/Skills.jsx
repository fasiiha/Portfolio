import "./Skills.css";

function Skills() {
  return (
    <>
      <section id="skills">
        <div className="about">
          <div className="aboutTitle">
            Crafting Digital Excellence: Your Vision, My Expertise in Website
            Design and Development
          </div>
          <div className="aboutDescript">
            As a freelance website designer and developer, I bring creativity
            and technical expertise to every project. With a passion for
            crafting visually appealing and functionally seamless websites, I
            specialize in creating unique online experiences tailored to meet
            the specific needs of my clients. From concept to execution, I am
            dedicated to delivering websites that not only showcase the essence
            of a brand but also provide a user-friendly and engaging online
            presence.
          </div>
        </div>
        <div className="services">
          <div className="leftside">
            <div className="titleMain">I can help you with...</div>
            <span className="descript">
              I am proficient web developer with a solid understanding of
              front-end and back-end technologies, with expertise in data
              structures and algorithms, database management, and
              object-oriented programming and possesses a comprehensive
              understanding of related programming languages.
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
                    experiences, I specialize in web and app design,
                    prioritizing solid company branding as the cornerstone for
                    successful online presence.
                  </p>
                </div>
              </div>
              <div className="skillBar">
                <div className="skillBarText">
                  <h4>02</h4>
                  <h2>Development</h2>
                  <p>
                    Building scalable websites from the ground up, my focus is
                    on seamless integration with design, incorporating micro
                    animations and transitions. I bring a comprehensive skill
                    set to turn concepts into impactful digital projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Skills;
