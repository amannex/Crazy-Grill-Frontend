import React, { useEffect, useState } from "react";
import CarouselContainer from "./CarouselContainer.js";
import { GALLERY_IMAGE_NAMES } from "../../constants.js";
import SectionTitle from "./sectionTitle/SectionTitle.jsx";
import { useTranslation } from "react-i18next";

const styles = {
   root: {
      width: "100ww",
      display: "flex",
      flexDirection: "column",
      padding: "50px 0",
      marginBottom: 100
   },
   title: { fontWeight: 600, fontSize: 45, marginBottom: 45, alignSelf: "center" }
};

const GallerySection = () => {
   const [imageSources, setImageSources] = useState([]);
   const { t } = useTranslation();

   useEffect(() => {
      const importImages = () => {
         try {
            const images = GALLERY_IMAGE_NAMES.map(async imageID => {
               const response = await import(`../../public/assets/gallery/${imageID}`);
               return response.default;
            });

            Promise.all(images).then(values => {
               setImageSources(values);
            });
         } catch (err) {
            console.log("Error While trying trying to load the image.");
         }
      };

      importImages();
   }, []);

   return (
      <div style={styles.root}>
         <SectionTitle
            subTitle={t("GALLERY")}
            title={t("LATEST_PICTURES")}
            firstLineDescription={t("GALLERY_TITLE_DESC_FIRST")}
         />
         <CarouselContainer>
            {imageSources.map((imageSrc, i) => (
               <img
                  key={i}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  className="w-[320px] h-[320px] min-[500px]:w-[480px] min-[500px]:h-[480px] min-[789px]:w-[350px] min-[789px]:h-[350px] lg:w-[420px] lg:h-[420px] rounded-lg"
                  src={imageSrc}
               />
            ))}
         </CarouselContainer>
      </div>
   );
};

export default GallerySection;
