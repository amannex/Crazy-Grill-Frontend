import React from "react";
import "../styles/Home.css";
import "../styles/Home.mediaqueries.css";
import { Hero } from "../components/hero";
import { HomeMenuSection } from "../components/homeMenuSection";
import { Contact } from "../components/contact";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const Home = () => {
   return (
      <>
         <Header />
         <Hero />
         <HomeMenuSection />
         <Contact bottomSpace="50px" />
         <Footer />
      </>
   );
};

export default Home;
