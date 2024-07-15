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
        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <Image
                src="/images/stock/blog-2.jpg"
                alt="Best fonts every designer"
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
              <h3 className="h3 blog-item-title">Best fonts every designer</h3>
              <p className="blog-text">
                Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
                eligendi.
              </p>
            </div>
          </a>
        </li>
        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <Image
                src="/images/stock/blog-3.jpg"
                alt="Design digest #80"
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
              <h3 className="h3 blog-item-title">Design digest #80</h3>
              <p className="blog-text">
                Excepteur sint occaecat cupidatat no proident, quis nostrum
                exercitationem ullam corporis suscipit.
              </p>
            </div>
          </a>
        </li>
        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <Image
                src="/images/stock/blog-4.jpg"
                alt="UI interactions of the week"
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
              <h3 className="h3 blog-item-title">
                UI interactions of the week
              </h3>
              <p className="blog-text">
                Enim ad minim veniam, consectetur adipiscing elit, quis nostrud
                exercitation ullamco laboris nisi.
              </p>
            </div>
          </a>
        </li>
        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <Image
                src="/images/stock/blog-5.jpg"
                alt="The forgotten art of spacing"
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
              <h3 className="h3 blog-item-title">
                The forgotten art of spacing
              </h3>
              <p className="blog-text">
                Maxime placeat, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </a>
        </li>
        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <Image
                src="/images/stock/blog-6.jpg"
                alt="Design digest #79"
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
              <h3 className="h3 blog-item-title">Design digest #79</h3>
              <p className="blog-text">
                Optio cumque nihil impedit uo minus quod maxime placeat, velit
                esse cillum.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BlogItems;
