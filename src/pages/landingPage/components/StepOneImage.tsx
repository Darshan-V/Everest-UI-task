import React from "react";

import stepOneStyles from "./stepOneImage.module.css";

const StepOneImage = () => {
  return (
    <div className={stepOneStyles.container}>
      <div className={stepOneStyles.stepOneImage} />
      <h1 className={stepOneStyles.stepCount}>1</h1>
    </div>
  );
};

export default StepOneImage;
