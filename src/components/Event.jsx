import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { COLORS } from "../configs/constants";

const styles = {
   root: {
      backgroundColor: "#FFFF",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      position: "relative"
   }
};
const Event = ({ eventDetails, eventIndex }) => {
   const [image, setImage] = useState(null);

   useEffect(() => {
      const importImage = async () => {
         try {
            const response = await import(`../../public/assets/events/${eventDetails.imageID}`);
            setImage(response.default);
         } catch (err) {
            console.log("Error While trying trying to load the image.");
         }
      };

      importImage();
   }, []);

   return (
      <div
         style={styles.root}
         className="flex flex-col justify-between items-center pt-16 w-full group rounded-md min-[530px]:w-5/6 self-center min-[730px]:w-full min-[730px]:flex-row min-[730px]:py-12 min-[730px]:justify-center lg:w-5/6 lg:py-8 min-[730px]:pr-6 lg:pr-12 lg:pl-6 2xl:w-4/6"
      >
         <CardDescription {...eventDetails} eventIndex={eventIndex} />
         <div className="w-full overflow-hidden min-[730px]:w-1/4">
            <img src={image} className="w-full group-hover:scale-125 transform transition duration-500 rounded-b-md" />
         </div>
      </div>
   );
};

const IconsMapping = {
   DATE: AiOutlineFieldTime,
   TIME: CiCalendarDate,
   NAME: CgDetailsMore
};

const CardDescription = ({ name, date, time, description, location, eventIndex }) => {
   const { t } = useTranslation();
   return (
      <>
         <Location location={location} />
         <div
            style={{ display: "flex", flexDirection: "column" }}
            className="w-full items-center min-[730px]:w-3/4  min-[730px]:items-start"
         >
            <div style={{ display: "flex", marginBottom: "2rem" }} className="divide-x-[2px] divide-gray">
               <InformationContainer title={"DATE"} text={date} />
               <InformationContainer title={"NAME"} text={name} />
               <InformationContainer title={"TIME"} text={time} prefix="h" />
            </div>
            <div className="text-sm px-4 mb-3 min-[730px]:text-base  text-gray-700">
               {t(`EVENTS_OBJ.EVENT_${eventIndex}.description`)}
            </div>
         </div>
      </>
   );
};

const InformationContainer = ({ title, text, prefix = "" }) => {
   const Icon = IconsMapping[title];
   return (
      <div className="px-4">
         <h6 style={{ fontWeight: 600 }} className="text-lg">
            {text} {prefix}
         </h6>
         <Icon
            style={{ color: COLORS.secondary }}
            className="group-hover:scale-125 transform transition duration-500 text-xl md:text-2xl"
         />
      </div>
   );
};

const Location = ({ location }) => {
   return (
      <div
         style={{ position: "absolute", display: "flex", alignItems: "center" }}
         className="top-2 text-[#c0946c] min-[730px]:bottom-4 min-[730px]:top-auto"
      >
         <GoLocation
            style={{ marginRight: "5px", color: COLORS.secondary, fontSize: "12px" }}
            className="group-hover:scale-150 transform transition duration-500"
         />
         <h5 className="text-xs">{location}</h5>
      </div>
   );
};

export default Event;
