import React, { Component, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = React.createContext({
   language: "en",
   setLanguage: () => null
});

const LanguageContextProvider = ({ children }) => {
   const [language, setLanguage] = useState("en");
   const { i18n } = useTranslation();

   const setLang = lang => {
      setLanguage(lang);
      i18n.changeLanguage(lang);
   };

   return (
      <LanguageContext.Provider
         value={{
            language,
            setLanguage: setLang
         }}
      >
         {children}
      </LanguageContext.Provider>
   );
};

export default LanguageContext;

export { LanguageContextProvider };
