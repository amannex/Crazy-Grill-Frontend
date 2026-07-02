import React from "react";
import Col from "react-bootstrap/Col";

const CardMenu = ({ imageUrl, name }) => {

   return (
      <Col className="colMenu" xs={12} sm={12} md={4} lg={4}>
         <>
            <div className="cardMenu">
               <div
                  className="cardImage hover:scale-125 transform transition duration-500"
                  style={{
                     background: ` no-repeat center/100% url(${imageUrl})`
                  }}
               ></div>
            </div>
            <div className="cardTitleContainer">
               <h6>{name}</h6>
            </div>
         </>
      </Col>
   );
};

export default CardMenu;
