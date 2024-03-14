import React from "react";
import styles from "./index.module.css";
import Layout from "../components/Layout";

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.landingPage}>
        <h1>Welcome to the Landing Page!</h1>
        <p>
          This is a responsive landing page component for web, mobile, and
          tablet views.
        </p>
      </div>
    </Layout>
  );
};

export default LandingPage;
