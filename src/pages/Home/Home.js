import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import SectionVideo from "../../components/SectionVideo";
import Parceiros from "../../components/Parceiros";
import SectionProducts from "../../components/Products/components/SectionProducts";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <SectionVideo />
      <SectionProducts />
      <Parceiros />
      <Footer />
    </>
  );
};

export default Home;
