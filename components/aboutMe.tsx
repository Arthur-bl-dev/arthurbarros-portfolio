import Image from "next/image";
import Lottie from "react-lottie";
import { NextPage } from "next";
import { useMemo, useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import * as animationData from "../public/animations/geometric_loop_background.json";
import styles from "./../styles/aboutMe.module.scss";
import buttons from "./../styles/components/buttons.module.scss";
import BackgroundTextContent from "./backgroundTextContent";

const myName = "Arthur Barros"; // your name

const AboutMe: NextPage = () => {
 const { t } = useTranslation();
 const defaultOptions = useRef({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
   preserveAspectRatio: "xMidYMid slice",
  },
 });

 const myAge = useMemo(() => {
  const birthDate = new Date("1995-07-06"); // your birth date
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
   return age - 1;
  }
  return age;
 }, []);

 return (
  <>
   <section className={styles.contentAboutMe}>
    <div className={styles.left}>
     <Image src="/images/iam/1.jpg" alt="Arthur" width={550} height={550} />

     <div className={styles.contentAnimationAboutMe}>
      <Lottie
       options={defaultOptions.current}
       height={"100% "}
       width={"100%"}
       isClickToPauseDisabled={true}
       speed={0.35}
      />
     </div>
    </div>
    <div className={styles.right}>
     <h1>{t("About me")}</h1>
     <p>
      {t("My name is")} {myName}, {t("I am")} {myAge} {t("text_continue_aboutMe")}
     </p>

     <a
      href="/docs/CV.pdf"
      download="CV.pdf"
      title={t("Download CV")}
      target="_blank"
      rel="noreferrer">
      <button className={buttons.primary}>
       {t("Download CV")} <Icon color="#1e1f23" icon="akar-icons:download" />
      </button>
     </a>
    </div>
    <BackgroundTextContent position="top right" title={t("I am - back")} />
   </section>
  </>
 );
};

export default AboutMe;
