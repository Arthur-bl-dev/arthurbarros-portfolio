import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { appWithTranslation } from "next-i18next";
import "./../styles/globals.scss";
import "./../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
 return (
  <>
   <GoogleAnalytics trackPageViews />
   <Component {...pageProps} />
  </>
 );
}

export default appWithTranslation(MyApp);
