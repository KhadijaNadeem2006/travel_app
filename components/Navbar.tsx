
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing", label: "Pricing" },
  { href: "/", key: "contact", label: "Contact Us" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image
          src="/hilink-logo.svg"
          alt="Hilink Logo"
          width={74}
          height={29}
        />
      </Link>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
};

export default Navbar;

