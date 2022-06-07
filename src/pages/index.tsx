import type { NextPage } from "next";

import About from "../components/About";
import HomePage from "../components/HomePage";

import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
