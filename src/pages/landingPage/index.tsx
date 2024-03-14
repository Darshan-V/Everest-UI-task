import React from "react";
import styles from "./index.module.css";
import Layout from "../components/Layout";
import Hero from "./components/Hero";

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.landingPage}>
        <Hero />
      </div>
    </Layout>
  );
};

export default LandingPage;
