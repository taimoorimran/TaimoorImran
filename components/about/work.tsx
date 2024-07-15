import Image from "next/image";

const Work = () => {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I&apos;m doing</h3>
      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            <Image
              src="/images/stock/icon-design.svg"
              alt="design icon"
              width="70"
              height="60"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web design</h4>
            <p className="service-item-text">
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <Image
              src="/images/stock/icon-dev.svg"
              alt="Web development icon"
              width="70"
              height="60"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web development</h4>
            <p className="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <Image
              src="/images/stock/icon-app.svg"
              alt="mobile app icon"
              width="70"
              height="60"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Mobile apps</h4>
            <p className="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <Image
              src="/images/stock/icon-photo.svg"
              alt="camera icon"
              width="70"
              height="60"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Photography</h4>
            <p className="service-item-text">
              I make high-quality photos of any category at a professional
              level.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Work;
