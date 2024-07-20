import { ProjectItemProps } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

const PortfolioItem = ({ imgSrc, url, name, category }: ProjectItemProps) => {
  return (
    <li className="project-item">
      <Link href={url ? url : "/portfolio/#"}>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <IoEyeOutline height={3} width={3} />
          </div>
          <Image
            src={imgSrc ? imgSrc : "/images/stock/project-1.jpg"}
            width={300}
            height={300}
            alt={name}
            loading="lazy"
          />
        </figure>
        <h3 className="project-title">{name}</h3>
        <p className="project-category">{category}</p>
      </Link>
    </li>
  );
};

export default PortfolioItem;
