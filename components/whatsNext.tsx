import { NextPage } from "next";
import { useTranslation } from "react-i18next";

import buttons from "./../styles/components/buttons.module.scss";
import styles from "./../styles/whatsNext.module.scss";

const WhatsNext: NextPage = () => {
 const { t } = useTranslation();
 return (
  <>
   <section className={styles.contentWhatsNext}>
    <h4>{t("What’s Next?")}</h4>
    <h1>{t("Get In Touch")}</h1>
    {/* eslint-disable react/no-unescaped-entities */}
    <p>{t("My inbox is always open")}</p>

    <button
     type="button"
     onClick={() => {
      if (typeof window !== "undefined") {
       window.open("mailto:arthurbldev@gmail.com", "_blank", "noopener noreferrer");
      }
     }}
     className={buttons.primary}>
     {t("Say Hello")}
    </button>
   </section>
  </>
 );
};

export default WhatsNext;
