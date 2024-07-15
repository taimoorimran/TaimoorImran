import Image from "next/image";

const BlogItems = () => {
  return (
    <section className="blog-posts">
      <ul className="blog-posts-list">
        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <Image
                src="/images/stock/blog-1.jpg"
                alt="Design conferences in 2022"
                width={300}
                height={300}
                loading="lazy"
              />
            </figure>
            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">Design</p>
                <span className="dot"></span>
                <time defaultValue="2022-02-23">Feb 23, 2022</time>
              </div>
              <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
              <p className="blog-text">
                Veritatis et quasi architecto beatae vitae dicta sunt,
                explicabo.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BlogItems;
