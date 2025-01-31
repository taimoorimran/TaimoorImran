import BlogItems from "@/components/blogs/blog-items";

const Page = () => {
  return (
    <article className="blog bg-eerie-black-2">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <BlogItems />
    </article>
  );
};

export default Page;
