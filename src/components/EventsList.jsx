import React from "react";
import { UPCOMING_EVENTS } from "../configs/constants.js";
import Event from "./Event.jsx";
import { useTranslation } from "react-i18next";

const EventsList = () => {
   const { t } = useTranslation();

   const isEventOutdated = date => {
      const currentDate = new Date();
      return date.getTime() < currentDate.getTime();
   };

   const parseDate = date => {
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
   };

   const futureEvents = UPCOMING_EVENTS.filter(event => !isEventOutdated(event.date));
   return (
      <div className="w-full flex flex-col gap-y-10 lg:items-center">
         {futureEvents.length ? (
            futureEvents.map((event, i) => {
               return (
                  <Event key={event.name} eventDetails={{ ...event, date: parseDate(event.date) }} eventIndex={i} />
               );
            })
         ) : (
            <div className="flex justify-center text-sm md:text-lg">
               <p>{t("NO_EVENT_AVAILABLE")}</p>
            </div>
         )}
      </div>
   );
};

export default EventsList;
