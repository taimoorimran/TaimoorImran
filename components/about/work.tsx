import Image from "next/image";

interface WorkItemProps {
  imgSrc?: string;
  title: string;
  description: string;
}
const WorkItem = ({ imgSrc, title, description }: WorkItemProps) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image
          src={imgSrc ? imgSrc : "/images/stock/icon-design.svg"}
          alt="design icon"
          width="70"
          height="60"
        />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
};
const Work = () => {
  const workItems = [
    {
      title: "Web Design",
      description:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
      imgSrc: "/images/stock/icon-dev.svg",
    },
    {
      title: "Mobile Apps",
      description:
        "Professional development of applications for iOS and Android.",
      imgSrc: "/images/stock/icon-app.svg",
    },
    {
      title: "Photography",
      description:
        "I make high-quality photos of any category at a professional level.",
      imgSrc: "/images/stock/icon-photo.svg",
    },
  ];
  return (
    <section className="service">
      <h3 className="h3 service-title">What I&apos;m doing</h3>
      <ul className="service-list">
        {workItems.map(({ title, description, imgSrc }: WorkItemProps, key) => {
          return (
            <WorkItem
              key={`item_${title}_${key}`}
              title={title}
              description={description}
              imgSrc={imgSrc}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Work;
