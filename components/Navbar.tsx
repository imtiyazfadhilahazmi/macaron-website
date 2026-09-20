"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <a href="/" className="logo" onClick={closeMenu}>
          berry.
        </a>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/#about" onClick={closeMenu}>
            ABOUT
          </a>

          <a href="/#collection" onClick={closeMenu}>
            COLLECTION
          </a>

          <a href="/order" onClick={closeMenu}>
            ORDER
          </a>
        </div>

        <button
          className={`menu-button ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}