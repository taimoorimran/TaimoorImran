import { ExperienceItemProps } from "@/lib/interfaces";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
// import { getFormattedText } from "@/lib/utils";
import FormattedDescription from "@/components/shared/formatted-description";
import { developerMeta } from "@/lib/constants";

const ExperienceItem = ({
  company,
  designation,
  startDate,
  endDate,
  description,
  skills,
}: ExperienceItemProps) => {
  return (
    <li className="timeline-item">
      <h3 className="text-lg font-semibold">{designation}</h3>
      <h4 className="h4 timeline-item-title">{company}</h4>
      <span>
        {startDate} — {endDate}
      </span>
      <div className="m-2">
        {description &&
          description.map((desc: string, key) => {
            return (
              <FormattedDescription
                key={`desc_${key}_${company}`}
                desc={desc}
              />
            );
          })}
      </div>
      {skills &&
        skills.map((skill: string, key) => {
          return (
            <Badge key={`skill_${key}_${company}`} variant="default">
              {skill}
            </Badge>
          );
        })}
    </li>
  );
};

const Experience = () => {
  const experienceItems: ExperienceItemProps[] = developerMeta.experience;
  return (
    experienceItems.length > 0 &&
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <MdOutlineWorkHistory className="size-5" />
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        {experienceItems.map(
          (
            {
              company,
              designation,
              startDate,
              endDate,
              description,
              skills,
            }: ExperienceItemProps,
            key,
          ) => {
            return (
              <ExperienceItem
                key={`item_${company}_${key}`}
                company={company}
                startDate={startDate}
                endDate={endDate}
                designation={designation}
                description={description}
                skills={skills}
              />
            );
          },
        )}
      </ol>
    </section>
  );
};

export default Experience;
