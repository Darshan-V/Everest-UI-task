import React from "react";
import StepOneImage from "./StepOneImage";

import howItWorksStyles from "./howItWorks.module.css";

import Underline from "../../../assets/ui/UI.svg";
import StepTwoImage from "./StepTwoImage";
import StepThreeImage from "./StepThreeImage";

const stepsData = [
  {
    title: "Setup your profile & preferences",
    description:
      "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
    imageLabel: <StepOneImage />,
  },
  {
    title: "Review your custom box",
    description:
      "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
    imageLabel: <StepTwoImage />,
  },
  {
    title: "Try it on at home",
    description:
      "Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.",
    imageLabel: <StepThreeImage />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className={howItWorksStyles.howItWorksContainer}>
      <span>
        <h1 className={howItWorksStyles.heading}>How it works?</h1>
        <img src={Underline} />
      </span>
      <div className={howItWorksStyles.stepsContainer}>
        {stepsData.map((step, index) => (
          <div
            key={index}
            className={` ${
              index === 1
                ? howItWorksStyles.stepsContainerColumn
                : howItWorksStyles.stepsContainerRow
            }`}
          >
            <>{step.imageLabel}</>
            <div className={howItWorksStyles.messageContainer}>
              <h3 className={howItWorksStyles.stepTitle}>{step.title}</h3>
              <p className={howItWorksStyles.stepDescription}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
