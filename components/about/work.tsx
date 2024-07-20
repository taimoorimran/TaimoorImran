import { developerMeta } from "@/lib/constants";
import { WorkItemProps } from "@/lib/interfaces";
import Image from "next/image";

const WorkItem = ({ imgSrc, title, description }: WorkItemProps) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image
          src={imgSrc ? imgSrc : "/images/stock/icon-design.svg"}
          alt={`${title} icon`}
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
  const workItems: WorkItemProps[] = developerMeta.work;
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
