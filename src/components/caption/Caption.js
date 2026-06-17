import React from "react";
import { ButtonControls } from "../buttonControls";
import { ArrowRight } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import { COLORS } from "../../configs/constants";

const styles = { icon: { position: "relative", left: "10", top: "13" } };

const Caption = ({
   slogan,
   title,
   subTitle,
   isBtnMenuColored,
   handleBtnMenuColor,
   handleBtnEventsColor,
   isBtnEventsColored
}) => {
   const { t } = useTranslation();
   const buttonsArray = [
      {
         hoverOut: handleBtnMenuColor,
         hoverIn: handleBtnMenuColor,
         icon: (
            <ArrowRight style={styles.icon} color={isBtnMenuColored ? COLORS.tertiary : COLORS.secondary} size={13} />
         ),
         buttonText: t("OUR_MENU"),
         buttonLink: "/menu",
         isBtnColored: isBtnMenuColored
      },
      {
         hoverOut: handleBtnEventsColor,
         hoverIn: handleBtnEventsColor,
         icon: (
            <ArrowRight style={styles.icon} color={isBtnEventsColored ? COLORS.tertiary : COLORS.secondary} size={13} />
         ),
         buttonText: t("OUR_EVENTS"),
         buttonLink: "/events",
         isBtnColored: isBtnEventsColored
      }
   ];
   return (
      <Carousel.Caption>
         <h6>{slogan}</h6>
         <h1>{title}</h1>
         <h3>{subTitle}</h3>
         <ButtonControls buttonsArray={buttonsArray} />
      </Carousel.Caption>
   );
};

export default Caption;
