import { useTranslation } from "react-i18next";
import styles from "./../styles/footer.module.scss";

const Footer = () => {
 const { t } = useTranslation();
 return (
  <section className={styles.contentFooter}>
   <p>
    {t("Designed & built with")} ❤️ <span>{t("by")} Arthur Barros</span>
   </p>
  </section>
 );
};

export default Footer;
