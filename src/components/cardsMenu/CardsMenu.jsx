import React from "react";
import Row from "react-bootstrap/Row";
import { CardMenu } from "../cardMenu";

const CardsMenu = ({ cardsNames }) => {
   return (
      <Row>
         {cardsNames.map(current => {
            return (
               <CardMenu
                  key={current.imageName}
                  imageName={current.imageName}
                  name={current.name}
                  cardsNames={cardsNames}
               />
            );
         })}
      </Row>
   );
};

export default CardsMenu;
