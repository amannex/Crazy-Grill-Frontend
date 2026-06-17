import React from "react";
import { COLORS } from "../../configs/constants";
import { Link } from "react-router-dom";

const Button = ({ hoverOut, hoverIn, icon, buttonText, buttonLink, isBtnColored }) => {
   return (
      <div className="button" onMouseLeave={hoverOut} onMouseEnter={hoverIn}>
         <Link to={buttonLink}>
            <a href={buttonLink} style={isBtnColored ? { color: COLORS.tertiary } : { color: COLORS.secondary }}>
               {buttonText}
            </a>
         </Link>
         {icon}
      </div>
   );
};

export default Button;
