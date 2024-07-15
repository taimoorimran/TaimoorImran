import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialItemProps {
  children: React.ReactNode;
  link: string;
}

const SocialItem = ({ link, children }: SocialItemProps) => {
  return (
    <li className="social-item">
      <Link href={link} className="social-link">
        {children}
      </Link>
    </li>
  );
};

const Socials = () => {
  return (
    <section className="socials">
      <ul className="social-list">
        <SocialItem link="#">
          <FaGithub className="size-4" />
        </SocialItem>
        <SocialItem link="#">
          <FaLinkedin className="size-4" />
        </SocialItem>
        <SocialItem link="#">
          <FaInstagram className="size-4" />
        </SocialItem>
      </ul>
    </section>
  );
};

export default Socials;
