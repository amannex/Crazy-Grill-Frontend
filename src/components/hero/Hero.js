import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import { Caption } from "../caption";
import carouselOne from "../../../public/assets/home/images/carousel-1.jpg";
import carouselThree from "../../../public/assets/home/images/carousel-3.jpg";
import carouselTwo from "../../../public/assets/home/images/carousel-2.jpg";

const Hero = () => {
   const [isDispalyedCarouselIcons, setIsDispalyedCarouselIcons] = useState(true);
   const [isBtnMenuColored, setIsBtnMenuColored] = useState(false);
   const [isBtnEventsColored, setIsBtnEventsColored] = useState(false);
   const { t } = useTranslation();

   const handleBtnMenuColor = () => {
      setIsBtnMenuColored(previousElement => !previousElement);
   };
   const handleBtnEventsColor = () => {
      setIsBtnEventsColored(previousElement => !previousElement);
   };

   return (
      <Carousel
         onMouseEnter={() => setIsDispalyedCarouselIcons(false)}
         onMouseLeave={() => setIsDispalyedCarouselIcons(true)}
         slide={false}
         fade={true}
         prevIcon={!isDispalyedCarouselIcons && undefined}
         nextIcon={!isDispalyedCarouselIcons && undefined}
         style={{ position: "relative", bottom: "5.9em" }}
         interval={4000}
      >
         <Carousel.Item className="heroItem">
            <img className="d-block" src={carouselOne} alt="First slide" />
            <Caption
               slogan={t("FIRST_SLIDE.SLOGAN")}
               title={t("FIRST_SLIDE.TITLE")}
               subTitle={t("FIRST_SLIDE.SUB_TITLE")}
               handleBtnMenuColor={handleBtnMenuColor}
               handleBtnEventsColor={handleBtnEventsColor}
               isBtnMenuColored={isBtnMenuColored}
               isBtnEventsColored={isBtnEventsColored}
            />
         </Carousel.Item>

         <Carousel.Item className="heroItem">
            <img className="d-block" src={carouselTwo} alt="Second slide" />
            <Caption
               slogan={t("SECOND_SLIDE.SLOGAN")}
               title={t("SECOND_SLIDE.TITLE")}
               subTitle={t("SECOND_SLIDE.SUB_TITLE")}
               handleBtnMenuColor={handleBtnMenuColor}
               handleBtnEventsColor={handleBtnEventsColor}
               isBtnMenuColored={isBtnMenuColored}
               isBtnEventsColored={isBtnEventsColored}
            />
         </Carousel.Item>

         <Carousel.Item className="heroItem">
            <img className="d-block" src={carouselThree} alt="Third slide" />
            <Caption
               slogan={t("THIRD_SLIDE.SLOGAN")}
               title={t("THIRD_SLIDE.TITLE")}
               subTitle={t("THIRD_SLIDE.SUB_TITLE")}
               handleBtnMenuColor={handleBtnMenuColor}
               handleBtnEventsColor={handleBtnEventsColor}
               isBtnMenuColored={isBtnMenuColored}
               isBtnEventsColored={isBtnEventsColored}
            />
         </Carousel.Item>
      </Carousel>
   );
};

export default Hero;
