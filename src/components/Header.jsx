import React, { useState } from "react";
import logo from "../assets/logo.png";

const LINKS = [
  { href: "#contribution", label: "Contributions" },
  { href: "#learnings", label: "Learnings" },
  { href: "#improvement", label: "Improvement" },
  { href: "#strengths", label: "Strengths" },
  { href: "#extras", label: "Extras" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#contribution">
        Skip to content
      </a>
      <div className="wrap site-header__inner">
        <a href="#top" className="brand" aria-label="Infa Intern home">
          <img src={logo} alt="Informatica" />
        </a>
        <button
          className={`nav-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle__bar" />
          <span className="sr-only">Menu</span>
        </button>
        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              className="nav_link"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
