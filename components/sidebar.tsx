import { CalendarRange, ChevronDown, Mail, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface ContactItemProps {
    children: React.ReactNode;
    title: string;
    link?: string;
    text: string;
}
const ContactItem = ({ children, title, link, text }: ContactItemProps) => (
    <li className="contact-item">
        <div className="icon-box">
            {children}
        </div>
        <div className="contact-info text-white">
            <p className="contact-title">{title}</p>
            {link ? <a href={link} className="contact-link">{text}</a> : <p className="contact-link">{text}</p>}
        </div>
    </li>
);

interface SocialItemProps {
    children: React.ReactNode;
    link: string;
}

const SocialItem = ({ link, children }: SocialItemProps) => {
    return (
        <li className="social-item">
            <a href={link} className="social-link">
                {children}
            </a>
        </li>
    )
};
const Sidebar = () => {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <Image src="/images/taimoor-avatar-wave.png" alt="Taimoor Imran" width="180" height="180" className="hidden md:block" />
                    <Image src="/images/taimoor-avatar-wave-dark-strips.png" alt="Taimoor Imran" width="180" height="180" className="hidden md:block" />
                    <Image src="/images/taimoor-avatar-wave-light.png" alt="Taimoor Imran" width="180" height="180" className="hidden md:block" />
                    <Image src="/images/taimoor-avatar-face.png" alt="Taimoor Imran" width="80" height="80" className="block md:hidden" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Taimoor Imran">Taimoor Imran</h1>
                    <p className="title">Software Engineer</p>
                </div>
                <button className="info_more-btn" data-sidebar-btn>
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
            </div>
        </aside>
    )
}

export default Sidebar;