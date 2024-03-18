import React from "react";

import footerStyle from "./footer.module.css";

import Logo from "../../assets/ui/logo.svg";
import Instagram from "../../assets/ui/instagram.svg";
import Facebook from "../../assets/ui/facebook.svg";
import Twitter from "../../assets/ui/twitter.svg";

const Footer: React.FC = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerContainer}>
        <img src={Logo} className={footerStyle.logo} />
        <div className={footerStyle.footerSocialMediaIconsContainer}>
          <a href="#">
            <img
              className={footerStyle.socialMediaIcons}
              src={Instagram}
              alt="Instagram"
            />
          </a>
          <a href="#">
            <img
              className={footerStyle.socialMediaIcons}
              src={Facebook}
              alt="Facebook"
            />
          </a>
          <a href="#">
            <img
              className={footerStyle.socialMediaIcons}
              src={Twitter}
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
