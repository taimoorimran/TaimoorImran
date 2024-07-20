import { developerMeta } from "@/lib/constants";
import { ClientItemProps } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";

const ClientItem = ({ imgSrc, link }: ClientItemProps) => {
  return (
    <li className="clients-item">
      <Link href={link ? link : "#"}>
        <Image
          src={imgSrc ? imgSrc : "/images/stock/logo-1-color.png"}
          width="100"
          height="100"
          alt="client logo"
        />
      </Link>
    </li>
  );
};
const Clients = () => {
  const clientItems: ClientItemProps[] = developerMeta.clients;
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {clientItems.map(({ imgSrc, link }: ClientItemProps, key) => {
          return (
            <ClientItem key={`client_${key}`} imgSrc={imgSrc} link={link} />
          );
        })}
      </ul>
    </section>
  );
};
export default Clients;
