import React from "react";
import CustomButton from "../../components/CustomButton";

import HeroStyles from "./hero.module.css";

import boxImage from "../../assets/ui/box.png";

const Hero: React.FC = () => {
  return (
    <div className={HeroStyles.heroContainer}>
      <div className={HeroStyles.heroMessageContainer}>
        <h1 className={HeroStyles.heroTitle}>
          Look good without leaving your house.
        </h1>
        <p className={HeroStyles.heroDescription}>
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <CustomButton text="sign up" borderColor="#EF8094" />
        <div className={HeroStyles.boxImageContainer}>
          <img src={boxImage} className={HeroStyles.boxImage} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
