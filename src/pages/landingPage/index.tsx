import React from "react";
import Layout from "../components/Layout";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

import styles from "./index.module.css";

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.landingPage}>
        <Hero />
        <HowItWorks />
      </div>
    </Layout>
  );
};

export default LandingPage;
