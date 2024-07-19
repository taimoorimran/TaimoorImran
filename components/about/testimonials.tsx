import Image from "next/image";

const TestimonialModal = () => {
  return (
    <div className="modal-container">
      <div className="overlay"></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn">
          {/* <ion-icon name="close-outline"></ion-icon> */}
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src="/images/stock/avatar-1.png"
              alt="Daniel lewis"
              width="80"
              height="80"
            />
          </figure>
          <Image
            src="/images/stock/icon-quote.svg"
            alt="quote icon"
            width={300}
            height={300}
          />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title">
            Daniel lewis
          </h4>
          <time defaultValue="2021-06-14">14 June, 2021</time>
          <div>
            <p>
              Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
const Testimoniails = () => {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        <li className="testimonials-item">
          <div className="content-card">
            <figure className="testimonials-avatar-box">
              <Image
                src="/images/stock/avatar-1.png"
                alt="Daniel lewis"
                width="60"
                height="80"
              />
            </figure>
            <h4 className="h4 testimonials-item-title">
              Daniel lewis
            </h4>
            <div className="testimonials-text">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card">
            <figure className="testimonials-avatar-box">
              <Image
                src="/images/stock/avatar-2.png"
                alt="Jessica miller"
                width="60"
                height="80"
              />
            </figure>
            <h4 className="h4 testimonials-item-title">
              Jessica miller
            </h4>
            <div className="testimonials-text">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card">
            <figure className="testimonials-avatar-box">
              <Image
                src="/images/stock/avatar-3.png"
                alt="Emily evans"
                width="60"
                height="80"
              />
            </figure>
            <h4 className="h4 testimonials-item-title">
              Emily evans
            </h4>
            <div className="testimonials-text">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card">
            <figure className="testimonials-avatar-box">
              <Image
                src="/images/stock/avatar-4.png"
                alt="Henry william"
                width="60"
                height="80"
              />
            </figure>
            <h4 className="h4 testimonials-item-title">
              Henry william
            </h4>
            <div className="testimonials-text">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <TestimonialModal />
    </section>
  );
};
export default Testimoniails;
