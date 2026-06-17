import React from "react";
import EventsSection from "../components/EventsSection.jsx";
import GallerySection from "../components/GallerySection.js";
import { Header } from "../components/header";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/footer";
import { COLORS } from "../configs/constants.js";
import heroEvents from "../../public/assets/home/images/hero-events.jpg";

const Events = () => {
   const { t } = useTranslation();
   return (
      <div style={{ backgroundColor: COLORS.tertiary }}>
         <Header isStatic />
         <HeroSection
            heroTitle={t("OUR_EVENTS")}
            heroFirstLineDescription={t("EVENT_FIRST_DESCRIPTION")}
            heroSecondLineDescription={t("EVENT_SECOND_DESCRIPTION")}
            bgImage={heroEvents}
         />
         <EventsSection />
         <GallerySection />
         <Footer />
      </div>
   );
};

export default Events;
