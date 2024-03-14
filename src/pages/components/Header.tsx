import React, { useState } from "react";
import hamburgerIcon from "../../assets/ui/hamburger.svg";
import style from "./header.module.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>Logo</div>
      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Navbar items */}
      </nav>
      <div
        className={`mobile-menu-icon ${style.mobileMenuIcon}`}
        onClick={toggleMobileMenu}
      >
        <img src={hamburgerIcon} alt="Hamburger Icon" />
      </div>
    </header>
  );
};

export default Header;
