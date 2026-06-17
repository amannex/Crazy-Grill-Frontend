import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";

const CardMenu = ({ imageName, name }) => {
   const [image, setImage] = useState(null);

   useEffect(() => {
      const importImage = async () => {
         try {
            const response = await import(`../../../public/assets/home/images/${imageName}`);
            setImage(response.default);
         } catch (err) {
            console.log("Error While trying trying to load the image.", err);
         }
      };

      importImage();
   }, []);
   return (
      <Col className="colMenu" xs={12} sm={12} md={4} lg={4}>
         <>
            <div className="cardMenu">
               <div
                  className="cardImage hover:scale-125 transform transition duration-500"
                  style={{
                     background: ` no-repeat center/100% url(${image})`
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
