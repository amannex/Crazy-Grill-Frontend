import React from "react";
import { Button } from "../button";

const ButtonControls = ({ buttonsArray }) => {
   return (
      <div className="buttonsContainer">
         {buttonsArray.map((button, index) => (
            <Button
               key={index}
               hoverOut={button.hoverOut}
               hoverIn={button.hoverIn}
               icon={button.icon}
               buttonText={button.buttonText}
               buttonLink={button.buttonLink}
               isBtnColored={button.isBtnColored}
            />
         ))}
      </div>
   );
};

export default ButtonControls;
