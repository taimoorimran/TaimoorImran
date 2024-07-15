import Clients from "@/components/about/clients";
import Description from "@/components/about/description";
import Testimoniails from "@/components/about/testimonials";
import Work from "@/components/about/work";

const Page = () => {
  return (
    <article className="about active bg-eerie-white-2 dark:bg-eerie-black-2">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <Description />
      <Work />
      <Testimoniails />
      <Clients />
    </article>
  );
};

export default Page;
