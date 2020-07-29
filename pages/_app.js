import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

import "../styles/global.scss";

import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lucas Pedroni</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
