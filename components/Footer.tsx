 import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <Link href="/">
            <Image
              src="/hilink-logo.svg"
              alt="Hilink"
              width={74}
              height={29}
            />
          </Link>
        </div>

        {/* LEARN MORE */}
        <div className="footer-column">
          <h3>Learn More</h3>

          <Link href="/">About Hilink</Link>
          <Link href="/">Press Releases</Link>
          <Link href="/">Environment</Link>
          <Link href="/">Jobs</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Contact Us</Link>
        </div>

        {/* OUR COMMUNITY */}
        <div className="footer-column">
          <h3>Our Community</h3>

          <Link href="/">Climbing xixixi</Link>
          <Link href="/">Hilink hiking</Link>
          <Link href="/">Hilink kinling</Link>
        </div>

        {/* CONTACT US */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>
            <span>Admin Officer:</span>
            <span>123-456-7890</span>
          </p>

          <p>
            <span>Email Officer:</span>
            <span>hilink@akinthil.com</span>
          </p>
        </div>

        {/* SOCIAL */}
        <div className="footer-column">
          <h3>Social</h3>

          <div className="footer-social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              f
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              ◎
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              ♥
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              ▶
            </a>

            <a
              href="https://wordpress.com"
              target="_blank"
              rel="noreferrer"
            >
              W
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="footer-bottom">
        <p>© 2026 Hilink | All rights reserved</p>
      </div>

    </footer>
  );
};

export default Footer;