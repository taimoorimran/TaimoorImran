import PortfolioItem from "@/components/portfolio/items";
const Page = () => {
  return (
    <article
      className="portfolio bg-eerie-white-2 dark:bg-eerie-black-2"
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              {/* <ion-icon name="chevron-down"></ion-icon> */}
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>
            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>
        <ul className="project-list">
          <PortfolioItem name="Finance" category="Web development" />
          <PortfolioItem
            name="Finance"
            category="Web development"
            imgSrc="/images/stock/project-2.png"
          />
        </ul>
      </section>
    </article>
  );
};

export default Page;
