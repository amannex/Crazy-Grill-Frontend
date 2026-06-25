import React, { useEffect, useState } from "react";
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
   const [slides, setSlides] = useState([]);

   useEffect(() => {
      loadSlides();
   }, []);

   const loadSlides = async () => {
      try{
         const response = await fetch("http://localhost:8888/crazy-grill-backend/wp-json/wp/v2/slides");
         if(!response.ok){
            throw new Error("Failed to fetch slides");
         }
         const slides = await response.json();

         if(slides &&slides.length > 0){
            console.log("slides", slides);
            setSlides(slides);
         }
      } catch (error) {
         console.error("Error fetching slides:", error);
      }
   };

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
         {  slides.map(slide => (<Carousel.Item className="heroItem">
            <img className="d-block" src={carouselThree} alt="Third slide" />
            <Caption
               slogan={slide.acf.caption.slogan}
               title={slide.acf.caption.headline}
               subTitle={slide.acf.caption.subheading}
               handleBtnMenuColor={handleBtnMenuColor}
               handleBtnEventsColor={handleBtnEventsColor}
               isBtnMenuColored={isBtnMenuColored}
               isBtnEventsColored={isBtnEventsColored}
            />
         </Carousel.Item>))  
         }
         
      </Carousel>
   );
};

export default Hero;
