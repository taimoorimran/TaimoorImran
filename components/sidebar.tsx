import { developerMeta } from "@/lib/constants";
import {
  CalendarRange,
  ChevronDown,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";
import Socials from "./shared/socials";

interface ContactItemProps {
  children: React.ReactNode;
  title: string;
  link?: string;
  text: string;
}
const ContactItem = ({ children, title, link, text }: ContactItemProps) => (
  <li className="contact-item">
    <div className="icon-box">{children}</div>
    <div className="contact-info text-white">
      <p className="contact-title">{title}</p>
      {link ? (
        <a href={link} className="contact-link">
          {text}
        </a>
      ) : (
        <p className="contact-link">{text}</p>
      )}
    </div>
  </li>
);

const Sidebar = () => {
  return (
    <aside className="sidebar bg-eerie-white-2 dark:bg-eerie-black-2">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/taimoor-avatar-wave-dark-strips.png"
            alt="Taimoor Imran"
            width="180"
            height="180"
            className="hidden md:dark:block"
          />
          <Image
            src="/images/taimoor-avatar-wave-light.png"
            alt="Taimoor Imran"
            width="180"
            height="180"
            className="hidden md:block md:dark:hidden"
          />
          <Image
            src="/images/taimoor-avatar-face.png"
            alt="Taimoor Imran"
            width="80"
            height="80"
            className="block md:hidden"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Taimoor Imran">
            {developerMeta.name}
          </h1>
          <p className="title">Software Engineer</p>
          <ThemeToggle />
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <ChevronDown className="size-4" />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <ContactItem title="Email" text="s@gmail.com">
            <Mail className="size-4" />
          </ContactItem>
          <ContactItem title="Phone" text="+2222">
            <Smartphone className="size-4" />
          </ContactItem>
          <ContactItem title="Birthday" text="Jan 01, 1995">
            <CalendarRange className="size-4" />
          </ContactItem>
          <ContactItem title="Location" text="Karachi, Sindh, Pakistan 🇵🇰">
            <MapPin className="size-4" />
          </ContactItem>
        </ul>
        <div className="separator"></div>
        <Socials />
      </div>
    </aside>
  );
};

export default Sidebar;
