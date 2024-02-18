import Lottie from "react-lottie";
import { NextPage } from "next";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

import * as animationData from "../public/animations/modern.json";
import styles from "./../styles/iamDev.module.scss";

const IamDev: NextPage = () => {
 const { t } = useTranslation();
 const defaultOptions = useRef({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
   preserveAspectRatio: "xMidYMid slice",
  },
 });

 const yearsExperience = useMemo(() => {
  return new Date().getFullYear() - 2019; // your start year in the area
 }, []);

 return (
  <>
   <section className={styles.content}>
    <canvas className={styles.canvas} id="nodes" width="500" height="500"></canvas>
    <div className={styles.left}>
     <h4>{t("Hi")},</h4>
     <h1>{t("I am - iamDev")} Arthur,</h1>
     <h1>{t("Front-end developer")}</h1>
     <p>{`${t("Creative-and-self-starting")} ${yearsExperience} ${t("years-experience-building")}`}</p>
    </div>

    <div className={styles.right}>
     <Lottie
      options={defaultOptions.current}
      height={"25rem"}
      width={"25rem"}
      isClickToPauseDisabled={true}
      speed={0.35}
     />
    </div>
   </section>
  </>
 );
};

export default IamDev;
