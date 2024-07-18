import { ExperienceItemProps } from "@/lib/interfaces";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { getFormattedText } from "@/lib/utils";

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
      <h3 className="text-lg font-semibold">{company}</h3>
      <h4 className="h4 timeline-item-title">{designation}</h4>
      <span>
        {startDate} — {endDate}
      </span>
      {description &&
        description.map((desc: string, key) => {
          return (
            <p
              key={`desc_${key}_${company}`}
              className="timeline-text"
              dangerouslySetInnerHTML={{ __html: getFormattedText(desc) }}
            ></p>
          );
        })}
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
  const experienceItems: ExperienceItemProps[] = [
    {
      company: "Center of Non-Communicable Diseases",
      startDate: "July 2023",
      endDate: "Present",
      designation: "Project Manager - Technology & Innovation Dept.",
      skills: ["React", "NextJS", "JavaScript", "MySQL", "MongoDB"],
      description: [],
    },
    {
      company: "Tech Surge Pvt. Ltd.",
      startDate: "August 2022",
      endDate: "September 2023",
      designation: "Senior React Developer",
      description: [
        "Technology Migration: Refactored a leading real estate management system from Visual FoxPro to ReactJS, Redux, and the Helix-design system, resulting in a 30% improvement in system efficiency and user experience.",
        "Client Coordination: Communicated with clients in the US and Canada, ensuring seamless communication and collaboration, which led to a 95% client satisfaction rate.",
        "Project Management: Conducted thorough requirements gathering, created detailed project schedules, and ensured timely project completion, consistently meeting deadlines and client expectations.",
        "Team Collaboration: Worked closely with cross-functional teams to integrate new features and enhance existing functionalities, leveraging tools like Jira for task management.",
        "Performance Optimization: Implemented best practices in code optimization and performance tuning, significantly reducing page load times and increasing application responsiveness.",
        "Version Control and CI/CD: Utilized Git for version control and integrated CI/CD pipelines to streamline development processes and ensure continuous delivery.",
      ],
      skills: ["React", "NextJS", "JavaScript", "MySQL", "MongoDB"],
    },
  ];

  return (
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
            key
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
          }
        )}
      </ol>
    </section>
  );
};

export default Experience;
