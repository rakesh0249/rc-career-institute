import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { ArrowUp } from "lucide-react";

function Footer() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="RC Career Institute"
          />

          <p>
            Learn practical skills. Build your confidence.
            Grow your career.
          </p>

          {/* Social Icons */}
          <div className="socials">

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <button onClick={goTop}>
            Home
          </button>

          <button onClick={() => scrollToSection("courses")}>
            Courses
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("enquiry")}>
            Contact
          </button>
        </div>

        {/* Courses */}
        <div className="footer-links">
          <h3>Courses</h3>

          <span>Full Stack Web Development</span>
          <span>Programming</span>
          <span>Data Science</span>
          <span>Cyber Security</span>
          <span>Finance & Accounting</span>
          <span>Digital Marketing</span>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <span>📍 Sholinghur</span>
          <span>📞 8838625387</span>
          <span>✉️ 02rcdevelopers@gmail.com</span>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} RC Career Institute.
          All rights reserved.
        </p>

        <button
          onClick={goTop}
          className="top-btn"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}

export default Footer;