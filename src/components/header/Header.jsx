import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ReactCountryFlag from "react-country-flag";
import quebecFlag from "../../../public/assets/quebecflag.png";
import { COLORS } from "../../configs/constants";
import crazyGrillHeader from "../../../public/assets/logo/crazy_grill_header.png";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import LanguageContext from "../state/language";

const Header = ({ isStatic }) => {
   const { t } = useTranslation();
   const [isFacebookHover, setIsFacebookHover] = useState(false);
   const [isInstagramHover, setIsInstagramHover] = useState(false);
   const [scrollHeight, setScrollHeight] = useState(null);
   const location = useLocation().pathname;
   const { language, setLanguage } = useContext(LanguageContext);

   const coloredHeader = {
      backgroundColor: COLORS.primary,
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 5px -7px",
      transition: "all 0.2s ease-in"
   };
   const styles = {
      quebecIconStyle: {
         display: "inline-block",
         width: "1em",
         height: "1em",
         position: "relative",
         top: "3px"
      },
      mobileHeader: { float: "left", width: "45vw", backgroundColor: COLORS.primary }
   };
   const transparentHeader = {
      background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0,0, 0.9))",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 5px -7px",
      transition: "all 0.2s ease-out"
   };
   const handleScroll = () => {
      const scrollPosition = window.scrollY; // => scroll position
      setScrollHeight(scrollPosition);
   };
   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const changeLanguageHandler = lang => {
      setLanguage(lang);
   };

   return (
      <Navbar
         expand="md"
         className="mb-3 menu"
         sticky={isStatic || scrollHeight >= "70" ? "top" : null}
         style={
            ({ marginBottom: "0rem !important", position: "relative" },
            isStatic || scrollHeight >= 70 ? coloredHeader : transparentHeader)
         }
      >
         <Container>
            <Navbar.Brand href="#">
               <div id="logo">
                  <img src={crazyGrillHeader} alt="Crazy Grill" />
               </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
               id={`offcanvasNavbar-expand-md`}
               aria-labelledby={`offcanvasNavbarLabel-expand-md`}
               placement="start"
               style={styles.mobileHeader}
            >
               <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md}`}></Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow">
                     <Link to={"/"}>
                        <Nav.Link
                           className="navLink"
                           href="/"
                           style={location === "/" ? { borderBottom: "2px solid #c0946c" } : null}
                        >
                           {t("HEADER.HOME")}
                        </Nav.Link>
                     </Link>
                     <Link to={"/menu"}>
                        <Nav.Link
                           className="navLink"
                           href="/menu"
                           style={location === "/menu" ? { borderBottom: "2px solid #c0946c" } : null}
                        >
                           {t("HEADER.MENU")}
                        </Nav.Link>
                     </Link>
                     <Link to={"/events"}>
                        <Nav.Link
                           className="navLink"
                           href="/events"
                           style={location === "/events" ? { borderBottom: "2px solid #c0946c" } : null}
                        >
                           {t("HEADER.EVENTS")}
                        </Nav.Link>
                     </Link>
                     <Link to={"/contact"}>
                        <Nav.Link
                           className="navLink"
                           href="/contact"
                           style={location === "/contact" ? { borderBottom: "2px solid #c0946c" } : null}
                        >
                           {t("HEADER.CONTACT")}
                        </Nav.Link>
                     </Link>
                     <NavDropdown
                        title={
                           language === "en"
                              ? t("HEADER.ENGLISH")
                              : language === "es"
                              ? t("HEADER.SPANISH")
                              : t("HEADER.FRENCH")
                        }
                        id="offcanvasNavbarDropdown-expand-md"
                     >
                        <NavDropdown.Item
                           className="navDropdownItem"
                           onClick={() => changeLanguageHandler("en")}
                           hidden={language === "en" && true}
                        >
                           {t("HEADER.ENGLISH")} <ReactCountryFlag countryCode="CA" svg />
                        </NavDropdown.Item>
                        <NavDropdown.Item
                           className="navDropdownItem"
                           onClick={() => changeLanguageHandler("es")}
                           hidden={language === "es" && true}
                        >
                           {t("HEADER.SPANISH")} <ReactCountryFlag countryCode="ES" svg />
                        </NavDropdown.Item>
                        <NavDropdown.Item
                           className="navDropdownItem quebec"
                           onClick={() => changeLanguageHandler("fr")}
                           hidden={language === "fr" && true}
                        >
                           {t("HEADER.FRENCH")}
                           <img src={quebecFlag} width="16" height="16" style={styles.quebecIconStyle} />
                        </NavDropdown.Item>
                     </NavDropdown>
                     <div className="headerSocialMedia">
                        <Facebook
                           color={isFacebookHover ? "#4267B2" : "#fff"}
                           size={24}
                           className="icons"
                           onMouseEnter={() => setIsFacebookHover(true)}
                           onMouseLeave={() => setIsFacebookHover(false)}
                        />
                        <Instagram
                           color={isInstagramHover ? "#E1306C" : "#fff"}
                           size={24}
                           className="icons"
                           onMouseEnter={() => setIsInstagramHover(true)}
                           onMouseLeave={() => setIsInstagramHover(false)}
                        />
                     </div>
                     <div id="logoMobileHeader">
                        <img src={crazyGrillHeader} alt="Crazy Grill" />
                     </div>
                  </Nav>
               </Offcanvas.Body>
            </Navbar.Offcanvas>
         </Container>
      </Navbar>
   );
};

export default Header;
