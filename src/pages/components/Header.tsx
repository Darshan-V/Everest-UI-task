import React, { useState } from "react";

// Header assets
import hamburgerIcon from "../../assets/ui/hamburger.svg";
import Logo from "../../assets/ui/logo.svg";

// Header styles
import HeaderStyle from "./header.module.css";
import MobileMenu from "./MobileMenu";

const NavbarItems = ["this month", "skin", "hair", "bath", "sale"];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={HeaderStyle.header}>
      <img src={Logo} className={HeaderStyle.logo} />

      <nav
        className={`${HeaderStyle.navBar} ${isMobileMenuOpen ? "open" : ""}`}
      >
        {NavbarItems.map((item, index) => (
          <a href="#" key={index} className={HeaderStyle.navbarText}>
            {item}
          </a>
        ))}
        <a>
          <button className={HeaderStyle.loginButton}>{`log in >`} </button>
        </a>
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
