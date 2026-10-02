import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["Courses", "courses"],
    ["About", "about"],
    ["Why Us", "why-us"],
    ["Faculty", "faculty"],
    ["Contact", "contact"],
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <button
          className="brand"
          onClick={() => scrollTo("home")}
          aria-label="RC Career Institute Home"
        >
          <img
            src="/logo.png"
            alt="RC Career Institute"
          />
        </button>

        {/* Navigation */}
        <nav
          className={
            open
              ? "nav-links active"
              : "nav-links"
          }
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}

          <button
            className="nav-cta"
            onClick={() => scrollTo("enquiry")}
          >
            Join Now
          </button>
        </nav>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;