import { EducationItemProps } from "@/lib/interfaces";
import { MdOutlineMenuBook } from "react-icons/md";

const EducationItem = ({
  institute,
  education,
  startDate,
  endDate,
  description,
}: EducationItemProps) => {
  return (
    <li className="timeline-item">
      <h3 className="text-lg font-semibold">{institute}</h3>
      <h4 className="h4 timeline-item-title">{education}</h4>
      <span>
        {startDate} — {endDate}
      </span>
      {description &&
        description.map((desc: string, key) => {
          return (
            <p key={`desc_${key}_${institute}`} className="timeline-text">
              {desc}
            </p>
          );
        })}
    </li>
  );
};
const Education = () => {
  const educationItems: EducationItemProps[] = [
    {
      institute: "Iqra University",
      startDate: "June 2014",
      endDate: "August 2018",
      education: "Bachelors of Computer Sciences",
      description: [
        "Received full scholarship from Ignite Pakistan for Final Year Project",
      ],
    },
  ];
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <MdOutlineMenuBook className="size-5" />
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        {educationItems.map(
          (
            {
              institute,
              education,
              startDate,
              endDate,
              description,
            }: EducationItemProps,
            key,
          ) => {
            return (
              <EducationItem
                key={`item_${institute}_${key}`}
                institute={institute}
                startDate={startDate}
                endDate={endDate}
                education={education}
                description={description}
              />
            );
          },
        )}
      </ol>
    </section>
  );
};

export default Education;
