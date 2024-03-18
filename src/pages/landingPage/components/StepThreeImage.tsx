import React from "react";

import stepThreeStyles from "./stepThreeStyles.module.css";

const StepThreeImage: React.FC = () => {
  return (
    <div className={stepThreeStyles.container}>
      <div className={stepThreeStyles.stepOneImage} />
      <h1 className={stepThreeStyles.stepCount}>3</h1>
    </div>
  );
};

export default StepThreeImage;
