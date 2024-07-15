import { MdOutlineWorkHistory } from "react-icons/md";

const Experience = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <MdOutlineWorkHistory className="size-5" />
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Creative director</h4>
          <span>2015 — Present</span>
          <p className="timeline-text">
            Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et qvuas molestias exceptur.
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Art director</h4>
          <span>2013 — 2015</span>
          <p className="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Web designer</h4>
          <span>2010 — 2013</span>
          <p className="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
