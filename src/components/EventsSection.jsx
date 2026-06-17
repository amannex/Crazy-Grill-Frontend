import React from "react";
import EventsList from "./EventsList.jsx";
import { useTranslation } from "react-i18next";
import SectionTitle from "./sectionTitle/SectionTitle.jsx";

const styles = {
   root: {
      width: "100ww",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px 0 50px 0"
   }
};
const EventsSection = () => {
   const { t } = useTranslation();
   return (
      <div style={styles.root}>
         <SectionTitle
            subTitle={t("EVENTS")}
            title={t("UPCOMING_EVENTS")}
            firstLineDescription={t("EVENT_TITLE_DESC_FIRST")}
         />
         <EventsList />
      </div>
   );
};

export default EventsSection;
