import PortfolioItem from "@/components/portfolio/items";
import { ProjectItemProps } from "@/lib/interfaces";
const Page = () => {
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
  return (
    <article
      className="portfolio bg-eerie-white-2 dark:bg-eerie-black-2"
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="project-list">
          {projectItems.map(
            (
              { name, category, imgSrc, description }: ProjectItemProps,
              key
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
            }
          )}
        </ul>
      </section>
    </article>
  );
};

export default Page;
