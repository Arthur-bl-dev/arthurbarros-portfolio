import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "usehooks-ts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//languages
import AboutMe from "../components/aboutMe";
import Scripts from "../components/scripts";
import Footer from "../components/footer";
import ForkMe from "../components/forkme";
import IamDev from "../components/iamDev";
import MyPortfolio from "../components/myPortfolio";
import MySkills from "../components/mySkills";
import SocialMedia from "../components/socialMedia";
import WhatsNext from "../components/whatsNext";
import Main from "../layouts/main";
import i18next from "i18next";

const Home: NextPage = () => {
 const { i18n } = useTranslation();
 // get language from local storage or set it as none if it's not defined
 const [language, setLanguage] = useLocalStorage("language", "none", {
  initializeWithValue: true,
 });

 useEffect(() => {
  // detect user language and set it as default
  const navigatorLanguage = navigator.language.split("-")[0];
  if (language === "none") {
   setLanguage(navigatorLanguage);
   i18n.changeLanguage(navigatorLanguage);
   return;
  }
  i18n.changeLanguage(language);
 }, [language, setLanguage, i18n]);

 const changelang = useCallback(
  (lang) => {
   setLanguage(lang);
   i18n.changeLanguage(lang);
  },
  [i18n, setLanguage]
 );

 return (
  <>
   <Main>
    {/* <button onClick={() => changelang("pt")}>pt</button>
    <button onClick={() => changelang("en")}>en</button> */}
    <Scripts />
    <ForkMe />
    <IamDev />
    <AboutMe />
    <MyPortfolio />
    <MySkills />
    <WhatsNext />
    <Footer />
    <SocialMedia />
   </Main>
  </>
 );
};

export async function getStaticProps({ locale }: any) {
 return {
  props: {
   ...(await serverSideTranslations(locale || "pt", ["common"], null, ["en", "pt", "fr"])),
   // Will be passed to the page component as props
  },
 };
}

export default Home;
