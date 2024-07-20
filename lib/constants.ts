import {
  ClientItemProps,
  EducationItemProps,
  ExperienceItemProps,
  ProjectItemProps,
  SkillItemProps,
  TestimonialItemProps,
  WorkItemProps,
} from "./interfaces";

const projectItems: ProjectItemProps[] = [
  {
    name: "Al-Mukhtar",
    category: "Web Development",
  },
  {
    name: "Lone Wolf",
    category: "Web Development",
    imgSrc: "/images/stock/project-2.png",
  },
  {
    name: "Retirement Analyzer",
    category: "Web Development",
    imgSrc: "/images/stock/project-2.png",
  },
];

const experience: ExperienceItemProps[] = [
  {
    company: "Center of Non-Communicable Diseases",
    startDate: "July 2023",
    endDate: "Present",
    designation: "Project Manager - Technology & Innovation Dept.",
    skills: ["React", "NextJS", "JavaScript", "MySQL", "MongoDB"],
    description: [],
  },
  {
    company: "Tech Surge Inc.",
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
  {
    company: "ZEPCOM",
    startDate: "June 2021",
    endDate: "September 2022",
    designation: "Senior React Developer",
    description: [
      "System Modernization: Transitioned a major retirement analysis platform from embedded JavaScript to React, enhancing performance and user experience. Integrated SASS for consistent design implementation and Redis for effective caching.",
      "Client Engagement: Maintained consistent communication with US-based clients through daily scrum meetings, leading to a 95% client satisfaction rate.",
      "Project Coordination: Led thorough requirements gathering, developed detailed project timelines, and ensured on-time project delivery, meeting or exceeding client expectations.",
      "Performance Enhancement: Applied advanced code optimization techniques, resulting in a 45% reduction in page load times and improved application responsiveness.",
      "Continuous Integration and Delivery: Managed version control using Git and established CI/CD pipelines, streamlining development processes and ensuring continuous delivery.",
    ],
    skills: ["React", "NextJS", "JavaScript", "MySQL", "MongoDB"],
  },
  {
    company: "7CTECH",
    startDate: "July 2020",
    endDate: "April 2021",
    designation: "React Developer",
    description: [
      "System Modernization: Transitioned a major retirement analysis platform from embedded JavaScript to React, enhancing performance and user experience. Integrated SASS for consistent design implementation and Redis for effective caching.",
      "Client Engagement: Maintained consistent communication with US-based clients through daily scrum meetings, leading to a 95% client satisfaction rate.",
      "Project Coordination: Led thorough requirements gathering, developed detailed project timelines, and ensured on-time project delivery, meeting or exceeding client expectations.",
      "Performance Enhancement: Applied advanced code optimization techniques, resulting in a 45% reduction in page load times and improved application responsiveness.",
      "Continuous Integration and Delivery: Managed version control using Git and established CI/CD pipelines, streamlining development processes and ensuring continuous delivery.",
    ],
    skills: ["React", "NextJS", "JavaScript", "MySQL", "MongoDB"],
  },
  {
    company: "Markematics (Pvt.) Ltd. ",
    startDate: "March 2019",
    endDate: "July 2020",
    designation: "Team Lead / Assistant Manager - Technology & Innovation",
    description: [
      "Survey Process Digitization: Transformed FMCG surveys from paper-based methods to dynamic JavaScript forms, significantly improving data accuracy and reducing data compromise.",
      "Efficiency Enhancement: Streamlined the survey process, reducing completion time from one month to less than half an hour by automating data synchronization and QA processes using React Native and SurveyJS.",
      "Data Management: Enabled real-time data syncing and dashboarding with accurate geo-tagging and audio recordings, leveraging local storage on Android tablets and synchronization at the end of each day.",
      "Client Collaboration: Gathered requirements from the client servicing team and ensured effective communication and task delegation to a team of 2 developers and 1 data analyst.",
      "Innovation During COVID-19: Launched online surveys for public research during the pandemic, opening new dimensions of data collection and analysis for clients.",
      "Technical Leadership: Led the development and implementation of the survey system using React Native, Lodash, and SurveyJS, while maintaining robust project management practices.",
    ],
    skills: ["React", "NextJS", "JavaScript", "MySQL", "MongoDB"],
  },
];

const education: EducationItemProps[] = [
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

const skills: SkillItemProps[] = [
  {
    name: "React",
    score: 84,
  },
  {
    name: "TypeScript",
    score: 70,
  },
];

const testimonials: TestimonialItemProps[] = [
  {
    name: "Shakeel Ahmed",
    description: "Good",
  },
  {
    name: "Daniel lewis",
    description: "V. Good",
    imgSrc: "/images/stock/avatar-2.png",
  },
  {
    name: "Daniel lewis",
    description: "V. V. Good",
    imgSrc: "/images/stock/avatar-3.png",
  },
];

const work: WorkItemProps[] = [
  {
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    imgSrc: "/images/stock/icon-dev.svg",
  },
  // {
  //   title: "Mobile Apps",
  //   description:
  //     "Professional development of applications for iOS and Android.",
  //   imgSrc: "/images/stock/icon-app.svg",
  // },
  // {
  //   title: "Photography",
  //   description:
  //     "I make high-quality photos of any category at a professional level.",
  //   imgSrc: "/images/stock/icon-photo.svg",
  // },
];

const clients: ClientItemProps[] = [{}, {}, {}, {}, {}, {}];

export const developerMeta = {
  name: "Taimoor Imran",
  designation: "Software Engineer",
  designationSubTitle:
    "Senior Frontend Engineer | Next.js, React, TypeScript Expert | 7+ Years in Web Development | UI/UX Specialist | Vercel, GCP | CI/CD, Tailwind CSS, ShadCN Design System",
  email: "taimoorimran9@gmail.com",
  mobile: "+92331022301",
  dob: "",
  dobDisplay: "Jan 07, 1995",
  location: "Karachi, Pakistan",
  socials: {
    github: "https://github.com/taimoorimran",
    linkedin: "https://www.linkedin.com/in/taimoor-imran-b9745ba7/",
    instagram: "https://www.instagram.com/taimoorimrandev/",
  },
  experience: experience,
  education: education,
  skills: skills,
  projects: projectItems,
  testimonials: testimonials,
  work: work,
  clients: clients,
};
