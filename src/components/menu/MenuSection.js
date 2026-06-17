import React, { useState } from "react";
import { SectionTitle } from "../sectionTitle";
import { MENU } from "../../../constants";
import { motion } from "framer-motion";
import { COLORS } from "../../configs/constants.js";

const style = {
   buttonsContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "3rem"
   }
};

const MenuSection = () => {
   const [sectionTitle, setSectionTitle] = useState({
      title: "Dishes",
      selected: "Dishes"
   });

   const handleSelectionChange = selected => {
      setSectionTitle({ ...sectionTitle, selected });
   };

   const renderMenu = () => {
      return (
         <motion.div
            className="flex flex-col lg:flex-row lg:flex-wrap sm:px-10 xl:px-40 lg:px-14 md:px-36 min-[865px]:px-48 lg:justify-center gap-4"
            key={sectionTitle.selected}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
         >
            {MENU[sectionTitle.selected].map(item => {
               return <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />;
            })}
         </motion.div>
      );
   };

   return (
      <div style={{ padding: "4rem 0 4rem 0" }}>
         <div style={style.buttonsContainer} className="w-full">
            <MenuButton
               onClick={() => handleSelectionChange("Dishes")}
               text={"Dishes"}
               isSelected={sectionTitle.selected === "Dishes"}
            />
            <MenuButton
               onClick={() => handleSelectionChange("Drinks")}
               text={"Drinks"}
               isSelected={sectionTitle.selected === "Drinks"}
               isLast
            />
         </div>
         <SectionTitle
            subTitle={"Menu"}
            title={sectionTitle.selected}
            firstLineDescription={"Porro eveniet, autem ipsam corrupti consectetur cum."}
            secondLineDescription={"Repudiandae dignissimos fugiat sit nam."}
            bgColor={COLORS.tertiary}
         />
         {renderMenu()}
      </div>
   );
};

export default MenuSection;

const MenuButton = ({ text, isSelected, isLast, onClick }) => {
   const style = {
      backgroundColor: isSelected ? COLORS.secondary : "rgb(243, 156, 18, 0)",
      padding: ".5rem 1rem",
      borderRadius: 3,
      letterSpacing: "1px",
      fontSize: 14,
      marginRight: !isLast ? "1rem" : 0,
      transition: "background 1"
   };
   return (
      <button style={style} onClick={onClick}>
         {text}
      </button>
   );
};

const MenuItem = ({ name, desc, price }) => {
   const styles = {
      root: {
         padding: "0 1rem",
         marginBottom: "2rem"
      }
   };

   return (
      <div style={styles.root} className="flex w-full lg:w-2/5 justify-between">
         <div>
            <h5 className="text-xl font-bold mb-2">{name}</h5>
            <p className="text-gray-500 font-light text-xs">{desc}</p>
         </div>
         <div className="">
            <p className="text-gray-500">{price}$</p>
         </div>
      </div>
   );
};
