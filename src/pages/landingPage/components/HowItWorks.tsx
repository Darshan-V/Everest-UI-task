import React from "react";

import howItWorksStyles from "./howItWorks.module.css";

import Underline from "../../../assets/ui/UI.svg";

const stepsData = [
  {
    title: "Setup your profile & preferences",
    description:
      "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
  },
  {
    title: "Review your custom box",
    description:
      "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
  },
  {
    title: "Try it on at home",
    description:
      "Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.",
  },
];

const HowItWorks = () => {
  return (
    <div className={howItWorksStyles.howItWorksContainer}>
      <span>
        <h1 className={howItWorksStyles.heading}>How it works?</h1>
        <img src={Underline} />
      </span>
      <div>
        {stepsData.map((step, index) => (
          <div key={index} className={howItWorksStyles.stepContainer}>
            <h3 className={howItWorksStyles.stepTitle}>{step.title}</h3>
            <p className={howItWorksStyles.stepDescription}>
              {step.description}
            </p>

            <div className={howItWorksStyles.stepNumber}>{index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;