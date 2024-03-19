import React from "react";

import stepTwoStyles from "./stepTwoImage.module.css";

const StepTwoImage: React.FC = () => {
  return (
    <div className={stepTwoStyles.container}>
      <div className={stepTwoStyles.stepOneImage} />
      <span className={stepTwoStyles.stepCount}>2</span>
    </div>
  );
};

export default StepTwoImage;
