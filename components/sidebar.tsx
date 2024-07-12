import { CalendarRange, ChevronDown, Github, Mail, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";

interface ContactItemProps {
    icon: string;
    title: string;
    link?: string;
    text: string;
}
const ContactItem = ({ icon, title, link, text }: ContactItemProps) => (
    <li className="contact-item">
        <div className="icon-box">
            {/* <ion-icon name={icon}></ion-icon> */}
        </div>
        <div className="contact-info">
            <p className="contact-title">{title}</p>
            {link ? <a href={link} className="contact-link">{text}</a> : <p>{text}</p>}
        </div>
    </li>
);

interface SocialItemProps {
    // icon: React.ElementType;
    icon: string;
    link: string;
}

const SocialItem = ({ icon, link }: SocialItemProps) => (
    <li className="social-item">
        <a href={link} className="social-link">
            {/* <ion-icon name={icon}></ion-icon> */}
        </a>
    </li>
);
const Sidebar = () => {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <Image src="/images/taimoor-avatar-wave.png" alt="Taimoor Imran" width="80" height={100} />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Taimoor Imran">Taimoor Imran</h1>
                    <p className="title">Software Engineer</p>
                </div>
                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>
                    {/* <ion-icon name="chevron-down"></ion-icon> */}
                    <ChevronDown className="size-4" />
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <ion-icon name="mail-outline"></ion-icon> */}
                            <Mail className="size-4" />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:taimoorimran9@gmail.com" className="contact-link">2@gmail.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
                            <Smartphone className="size-4" />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+12133522795" className="contact-link">+2222</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <ion-icon name="calendar-outline"></ion-icon> */}
                            <CalendarRange className="size-4" />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time defaultValue={"1995-01-07"}>Jan 07, 1995</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <ion-icon name="location-outline"></ion-icon> */}
                            <MapPin className="size-4" />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Karac2hi, Sindh, Pakistan 🇵🇰</address>
                        </div>
                    </li>
                </ul>
                <div className="separator"></div>
                <ul className="social-list">
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <Github className="size-4" />
                            {/* <ion-icon name="logo-github"></ion-icon> */}
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <Smartphone className="size-4" />
                            {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <Smartphone className="size-4" />
                            {/* <ion-icon name="logo-instagram"></ion-icon> */}
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;