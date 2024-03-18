import React from "react";

import MobileMenuStyles from "./mobileMenu.module.css";

import HamburgerCloseIcon from "../../assets/ui/hamburger-close.svg";
import TopbarMobile from "../../assets/ui/topbar-mobile.png";

type MobileMenuProps = {
  closeMenu: (value: boolean) => void;
};

const MobileMenuList = ["this month", "skin", "hair", "bath", "sale", "log in"];
const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <div className={MobileMenuStyles.container}>
      <img src={TopbarMobile} className={MobileMenuStyles.topbar} />
      <div className={MobileMenuStyles.menuContainer}>
        <img
          src={HamburgerCloseIcon}
          className={MobileMenuStyles.logo}
          onClick={() => closeMenu(false)}
        />
        <div className={MobileMenuStyles.menuButtonsContainer}>
          {MobileMenuList.map((item, index) => (
            <a className={MobileMenuStyles.menuButton} href="#" key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
