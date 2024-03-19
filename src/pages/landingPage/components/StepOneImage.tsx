import React from "react";

import stepOneStyles from "./stepOneImage.module.css";

const StepOneImage: React.FC = () => {
  return (
    <div className={stepOneStyles.container}>
      <div className={stepOneStyles.stepOneImage} />
      <span className={stepOneStyles.stepCount}>1</span>
    </div>
  );
};

export default StepOneImage;
