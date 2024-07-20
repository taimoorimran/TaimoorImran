import PortfolioItem from "@/components/portfolio/items";
import { developerMeta } from "@/lib/constants";
import { ProjectItemProps } from "@/lib/interfaces";
const Page = () => {
  const projectItems: ProjectItemProps[] = developerMeta.projects;
  return (
    <article className="portfolio bg-eerie-white-2 dark:bg-eerie-black-2">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="project-list">
          {projectItems.map(
            (
              { name, category, imgSrc, description }: ProjectItemProps,
              key,
            ) => {
              return (
                <PortfolioItem
                  key={`item_${name}_${key}`}
                  name={name}
                  category={category}
                  imgSrc={imgSrc}
                  description={description}
                />
              );
            },
          )}
        </ul>
      </section>
    </article>
  );
};

export default Page;
