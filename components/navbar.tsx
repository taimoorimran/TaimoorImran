"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/">
            <button className={`navbar-link ${pathname == "/" && "active"}`}>
              About
            </button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/resume">
            <button
              className={`navbar-link ${pathname == "/resume" && "active"}`}
            >
              Resume
            </button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/portfolio">
            <button
              className={`navbar-link ${pathname == "/portfolio" && "active"}`}
            >
              Portfolio
            </button>
          </Link>
        </li>
        {/* <li className="navbar-item">
          <Link href="/blog">
            <button
              className={`navbar-link ${pathname == "/blog" && "active"}`}
            >
              Blog
            </button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact">
            <button
              className={`navbar-link ${pathname == "/contact" && "active"}`}
            >
              Contact
            </button>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
