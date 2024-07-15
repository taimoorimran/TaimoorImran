const Skills = () => {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Web design</h5>
            <data value="80">80%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill"></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Graphic design</h5>
            <data value="70">70%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill"></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Branding</h5>
            <data value="90">90%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill"></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">WordPress</h5>
            <data value="50">50%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill"></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
