import Form from "@/components/contact/form";
import Map from "@/components/contact/map";
import Socials from "@/components/shared/socials";

const Page = () => {
  return (
    <article
      className="contact bg-eerie-white-2 dark:bg-eerie-black-2"
    >
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <Map />
      <Form />
      <Socials />
    </article>
  );
};

export default Page;
