import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

import Image from "next/image";
import { NextPage } from "next";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./../styles/mySkills.module.scss";

// Import Swiper styles
const MySkills = () => {
 const { t } = useTranslation();
 const options = {
  slidesPerView: 5,
  spaceBetween: 0,
  breakpoints: {
   // when window width is >= 600px
   300: {
    slidesPerView: 1.85,
    spaceBetween: 10,
   },
   350: {
    slidesPerView: 2.15,
    spaceBetween: 10,
   },
   400: {
    slidesPerView: 2.5,
    spaceBetween: 10,
   },
   // when window width is >= 600px
   600: {
    slidesPerView: 3.75,
    spaceBetween: 0,
   },
   // when window width is >= 801px
   801: {
    slidesPerView: 4.15,
    spaceBetween: 0,
   },
   // when window width is >= 801px
   1125: {
    slidesPerView: 4.5,
    spaceBetween: 0,
   },
   // when window width is >= 1440px
   1440: {
    slidesPerView: 5.65,
    spaceBetween: 0,
   },
  },
  breakpointsbase: "container",
  allowTouchMove: false,
 };

 return (
  <>
   <section className={styles.contentMySkills}>
    <header>
     <h1>{t("My Skills")}</h1>
     <p>{t("These are some of the libraries")}</p>
    </header>

    <div className={styles.contentListSkills}>
     <Swiper
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect="creative"
      autoplay={{
       delay: 2500,
       disableOnInteraction: true,
      }}
      {...options}>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/gatsbyJS.png" alt="gatsbyJS" width={100} height={100} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/react.png" alt="React" width={110} height={100} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/nextJS.png" alt="nextJS" width={100} height={100} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/javascript.png" alt="javascript" width={100} height={100} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/illustrator.png" alt="illustrator" width={100} height={100} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/adobeXD.png" alt="adobeXD" width={100} height={100} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/babel.png" alt="babel" width={100} height={70} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/sass.png" alt="sass" width={100} height={70} />
       </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className={styles.contentListSkillsItem}>
        <Image src="/images/skills/lodash.png" alt="lodash" width={100} height={100} />
       </div>
      </SwiperSlide>
     </Swiper>
    </div>
   </section>
  </>
 );
};

export default MySkills;
