import React, { useState } from "react";

// Header assets
import hamburgerIcon from "../../assets/ui/hamburger.svg";
import Logo from "../../assets/ui/logo.svg";

// Header styles
import HeaderStyle from "./header.module.css";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={HeaderStyle.header}>
      <img src={Logo} className={HeaderStyle.logo} />

      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Navbar items */}
      </nav>
      <div
        className={`mobile-menu-icon ${HeaderStyle.mobileMenuIcon}`}
        onClick={toggleMobileMenu}
      >
        <img src={hamburgerIcon} alt="Hamburger Icon" />
      </div>
      {isMobileMenuOpen ? <MobileMenu closeMenu={setIsMobileMenuOpen} /> : null}
    </header>
  );
};

export default Header;
