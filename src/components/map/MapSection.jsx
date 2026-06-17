import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { COLORS } from "../../configs/constants";
import { SectionTitle } from "../sectionTitle";
import "../../styles/MapSection.css";
import { useTranslation } from "react-i18next";
import { MAP_SOURCE } from "../../configs/constants";
import { useLocation } from "react-router-dom";

const MapSection = () => {
   const { t } = useTranslation();
   const { pathname, hash, key } = useLocation();

   useEffect(() => {
      // if not a hash link, scroll to top
      if (hash === "") {
         window.scrollTo(0, 0);
      }
      // else scroll to id
      else {
         setTimeout(() => {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
               element.scrollIntoView();
            }
         }, 0);
      }
   }, [pathname, hash, key]); // do this on route change

   return (
      <div className="mapSectionContainer" id="location">
         <SectionTitle
            subTitle={t("LOCATION")}
            title={t("FIND_US")}
            firstLineDescription={t("CONTACT_MAP_FIRST_DESCRIPTION")}
            secondLineDescription={t("CONTACT_MAP_SECOND_DESCRIPTION")}
            bgColor={COLORS.tertiary}
         />
         <Row className="mapContainer">
            <Col xl={12}>
               <iframe src={MAP_SOURCE.mapSource} width="100%" height="100%"></iframe>
            </Col>
         </Row>
      </div>
   );
};

export default MapSection;
