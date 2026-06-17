import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/SectionTitle.css";
import "../../styles/SectionTitle.mediaqueries.css";

const SectionTitle = ({ subTitle, title, firstLineDescription, secondLineDescription, bgColor }) => {
   return (
      <Row className="sectionTitleContainer" style={{ backgroundColor: bgColor }}>
         <Col xl={12}>
            <div className="titleContainer">
               <hr />
               <h6>{subTitle}</h6>
               <h3>{title}</h3>
               <p>
                  {firstLineDescription} <br /> {secondLineDescription}
               </p>
            </div>
         </Col>
      </Row>
   );
};

export default SectionTitle;
