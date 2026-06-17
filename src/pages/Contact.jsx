import React from "react";
import { MapSection } from "../components/map";
import { HeroSection } from "../components/heroSection";
import { Header } from "../components/header";
import { useTranslation } from "react-i18next";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import heroContact from "../../public/assets/home/images/hero-contact.jpg";

const Home = () => {
   const { t } = useTranslation();
   return (
      <>
         <Header isStatic />
         <HeroSection
            heroTitle={t("CONTACT_US")}
            heroFirstLineDescription={t("CONTACT_HERO_FIRST_DESCRIPTION")}
            heroSecondLineDescription={t("CONTACT_HERO_SECOND_DESCRIPTION")}
            bgImage={heroContact}
         />
         <Contact bottomSpace="0" />
         <MapSection />
         <Footer />
      </>
   );
};

export default Home;
