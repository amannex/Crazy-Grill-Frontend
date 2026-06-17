import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselContainer = props => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleScreenWidthChange = () => {
      setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener("resize", handleScreenWidthChange);
   }, []);
   return (
      <Carousel
         arrows
         autoPlay
         autoPlaySpeed={2500}
         customTransition="all 2s ease-out"
         focusOnSelect={false}
         infinite
         minimumTouchDrag={80}
         centerMode={windowWidth > 800}
         renderArrowsWhenDisabled={false}
         renderButtonGroupOutside={false}
         renderDotsOutside={true}
         shouldResetAutoplay
         showDots={false}
         slidesToSlide={1}
         responsive={{
            superLargeDesktop: {
               breakpoint: { max: 4000, min: 2000 },
               items: 4
            },
            desktop: {
               breakpoint: { max: 2000, min: 1300 },
               items: 2
            },
            tablet: {
               breakpoint: { max: 1300, min: 800 },
               items: 1
            },
            mobile: {
               breakpoint: { max: 800, min: 0 },
               items: 1
            }
         }}
      >
         {props.children}
      </Carousel>
   );
};

export default CarouselContainer;
