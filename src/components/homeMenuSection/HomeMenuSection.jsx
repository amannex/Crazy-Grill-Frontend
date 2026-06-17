import React from "react";
import Container from "react-bootstrap/Container";
import { CardsMenu } from "../cardsMenu";
import { cardsNames } from "../../../constants";
import { SectionTitle } from "../sectionTitle";
import { useTranslation } from "react-i18next";
import { COLORS } from "../../configs/constants.js";

const HomeMenuSection = () => {
   const { t } = useTranslation();
   const styles = { container: { padding: "0 20px" } };
   return (
      <Container fluid style={styles.container}>
         <SectionTitle
            subTitle={t("MENU")}
            title={t("SPECIALITIES")}
            firstLineDescription={t("HOME_MENU_FIRST_DESCRIPTION")}
            secondLineDescription={t("HOME_MENU_SECOND_DESCRIPTION")}
            bgColor={COLORS.tertiary}
         />
         <CardsMenu cardsNames={cardsNames} />
      </Container>
   );
};

export default HomeMenuSection;
