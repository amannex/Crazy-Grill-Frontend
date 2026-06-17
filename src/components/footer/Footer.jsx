import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/Footer.css";
import "../../styles/Footer.mediaqueries.css";
import { EnvelopeAtFill, Facebook, Instagram, TelephoneFill } from "react-bootstrap-icons";
import crazyGrill from "../../../public/assets/logo/crazy_grill.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
   const { t } = useTranslation();
   const [isFacebookHover, setIsFacebookHover] = useState(false);
   const [isInstagramHover, setIsInstagramHover] = useState(false);
   return (
      <footer>
         <Row className="preFooter">
            <Col md={12} lg={3} xl={3}>
               <div className="logoContainer">
                  <img src={crazyGrill} alt="Crazy Grill" width="230" height="230" />
               </div>
            </Col>
            <Col sm={12} md={4} lg={3} xl={3}>
               <div className="preFooterWidget">
                  <div className="titleWidget">
                     <h6>{t("DIRECTIONS")}</h6>
                  </div>
                  <div className="infoWidget">
                     <ul>
                        <li>55 Grilly Est New York, NY.</li>
                        <li>
                           {t("FIND_LOCATION_TEXT")} <a href="/contact/#location">{t("HERE")}</a>.
                        </li>
                     </ul>
                  </div>
               </div>
            </Col>
            <Col sm={12} md={4} lg={3} xl={3}>
               <div className="preFooterWidget">
                  <div className="titleWidget">
                     <h6>{t("WORKING_HOURS")}</h6>
                  </div>
                  <div className="infoWidget">
                     <ul>
                        <li>{t("WORKING_HOURS_TEXT")}</li>
                     </ul>
                  </div>
               </div>
            </Col>
            <Col sm={12} md={4} lg={3} xl={3}>
               <div className="preFooterWidget">
                  <div className="titleWidget">
                     <h6>{t("REACH_OUT")}</h6>
                  </div>
                  <div className="infoWidget">
                     <div className="detailsWidget">
                        <TelephoneFill color="#fff" size={18} className="icons" />
                        <a href="tel:00155555555">{t("CALL_US")}</a>
                     </div>
                     <div className="detailsWidget">
                        <EnvelopeAtFill color="#fff" size={18} className="icons" />
                        <Link to={"/contact/#send_us_a_message"}>
                           <a href="/contact/#send_us_a_message">{t("EMAIL_US")}</a>
                        </Link>
                     </div>
                     <div className="detailsWidget">
                        <Facebook
                           color={isFacebookHover ? "#4267B2" : "#fff"}
                           size={24}
                           className="iconsSocialMedia"
                           onMouseEnter={() => setIsFacebookHover(true)}
                           onMouseLeave={() => setIsFacebookHover(false)}
                        />
                        <Instagram
                           color={isInstagramHover ? "#E1306C" : "#fff"}
                           size={24}
                           className="iconsSocialMedia"
                           onMouseEnter={() => setIsInstagramHover(true)}
                           onMouseLeave={() => setIsInstagramHover(false)}
                        />
                     </div>
                  </div>
               </div>
            </Col>
         </Row>
         <Row className="copyright">
            <Col lg={12}>
               <div className="copyrightText">
                  <p>{t("COPYRIGHT")} 2024 © Crazy Grill Restaurant</p>
               </div>
            </Col>
         </Row>
      </footer>
   );
};

export default Footer;
