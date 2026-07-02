import React from "react";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { CardMenu } from "../cardMenu";

const CardsMenu = () => {
   const [specialities, setSpecialities] = useState([]);

   useEffect(() => {
      loadSpecialities();
   }, []);

   const loadSpecialities = async () => {
      try {
         const response = await fetch("http://localhost:8888/crazy-grill-backend/wp-json/wp/v2/specialities");
         if(!response.ok) {
            throw new Error("Failed to fetch specialities");
         }
         const specialitiesData = await response.json();

         if(specialitiesData && specialitiesData.length > 0) {
            console.log("specialities", specialitiesData);
            setSpecialities(specialitiesData);
         }
      }catch(err){
         throw new Error(err);
      }

   }

   return (
      <Row>
         {specialities.map(speciality => {
            return (
               <CardMenu
                  key={speciality.featured_image_url}
                  imageUrl={speciality.featured_image_url}
                  name={speciality.title.rendered}
               />
            );
         })}
      </Row>
   );
};

export default CardsMenu;
