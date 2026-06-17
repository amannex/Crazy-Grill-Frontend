import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/HeroSection.css";
import "../../styles/HeroSection.mediaqueries.css";

const HeroSection = ({ heroTitle, heroFirstLineDescription, heroSecondLineDescription, bgImage }) => {
   return (
      <Row>
         <Col lg={12}>
            <div className="heroBackground" style={{ backgroundImage: `url(${bgImage})` }}>
               <h3>{heroTitle}</h3>
               <p>
                  {heroFirstLineDescription} <br /> {heroSecondLineDescription}
               </p>
            </div>
         </Col>
      </Row>
   );
};

export default HeroSection;
