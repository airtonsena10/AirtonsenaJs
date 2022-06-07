import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { GlobalStyle } from "../styles/global";
import { themeDark, themeLight } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <Head>
        <title>AirtonSena</title>
      </Head>
      <GlobalStyle />
      <Header eventFunction={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
