import React from "react";

import stepThreeStyles from "./stepThreeStyles.module.css";

const StepThreeImage: React.FC = () => {
  return (
    <div className={stepThreeStyles.container}>
      <div className={stepThreeStyles.stepOneImage} />
      <span className={stepThreeStyles.stepCount}>3</span>
    </div>
  );
};

export default StepThreeImage;
