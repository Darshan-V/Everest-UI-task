import React from "react";

import stepTwoStyles from "./stepTwoImage.module.css";

const StepTwoImage: React.FC = () => {
  return (
    <div className={stepTwoStyles.container}>
      <div className={stepTwoStyles.stepOneImage} />
      <h1 className={stepTwoStyles.stepCount}>2</h1>
    </div>
  );
};

export default StepTwoImage;
