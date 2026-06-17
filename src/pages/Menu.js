import React from "react";
import { Header } from "../components/header";
import HeroSection from "../components/heroSection/HeroSection.jsx";
import { useTranslation } from "react-i18next";
import MenuSection from "../components/menu/MenuSection";
import { Footer } from "../components/footer";
import heroMenu from "../../public/assets/home/images/hero-menu.jpg";

const Menu = () => {
   const { t } = useTranslation();

   return (
      <>
         <Header isStatic />
         <HeroSection
            heroTitle={t("OUR_MENU")}
            heroFirstLineDescription={t("MENU_HERO_FIRST_DESCRIPTION")}
            heroSecondLineDescription={t("MENU_HERO_SECOND_DESCRIPTION")}
            bgImage={heroMenu}
         />
         <MenuSection />
         <Footer />
      </>
   );
};

export default Menu;
