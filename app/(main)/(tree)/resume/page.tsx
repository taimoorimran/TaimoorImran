import Education from "@/components/resume/education";
import Experience from "@/components/resume/experience";
import Skills from "@/components/resume/skills";

const Page = () => {
  return (
    <article className="resume bg-eerie-black-2">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <Education />
      <Experience />
      <Skills />
    </article>
  );
};

export default Page;
