import Image from "next/image";

const Clients = () => {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        <li className="clients-item">
          <a href="#">
            <Image
              src="/images/stock/logo-1-color.png"
              width="100"
              height="100"
              alt="client logo"
            />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <Image
              src="/images/stock/logo-2-color.png"
              width="100"
              height="100"
              alt="client logo"
            />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <Image
              src="/images/stock/logo-3-color.png"
              width="100"
              height="100"
              alt="client logo"
            />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <Image
              src="/images/stock/logo-4-color.png"
              width="100"
              height="100"
              alt="client logo"
            />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <Image
              src="/images/stock/logo-5-color.png"
              width="100"
              height="100"
              alt="client logo"
            />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <Image
              src="/images/stock/logo-6-color.png"
              width="100"
              height="100"
              alt="client logo"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Clients;
