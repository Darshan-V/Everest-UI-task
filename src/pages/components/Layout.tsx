import React from "react";
import Header from "./Header";

import styles from "./layout.module.css";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id={styles.wrapper}>
      <div className={styles.topbar} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
