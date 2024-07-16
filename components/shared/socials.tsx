import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { developerMeta } from "@/lib/constants";
import { SocialItemProps } from "@/lib/interfaces";

const SocialItem = ({ link, children }: SocialItemProps) => {
  return (
    <li className="social-item">
      <Link href={link} className="social-link" target="_blank">
        {children}
      </Link>
    </li>
  );
};

const Socials = () => {
  return (
    <section className="socials">
      <ul className="social-list">
        {developerMeta.socials?.github && (
          <SocialItem link={developerMeta.socials?.github}>
            <FaGithub className="size-4" />
          </SocialItem>
        )}
        {developerMeta.socials?.linkedin && (
          <SocialItem link={developerMeta.socials?.linkedin}>
            <FaLinkedin className="size-4" />
          </SocialItem>
        )}
        {developerMeta.socials?.instagram && (
          <SocialItem link={developerMeta.socials?.instagram}>
            <FaInstagram className="size-4" />
          </SocialItem>
        )}
      </ul>
    </section>
  );
};

export default Socials;
