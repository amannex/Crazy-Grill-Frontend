import React from "react";
import { useRouteError } from "react-router-dom";

const styles = {
   root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
   }
};
const ErrorPage = () => {
   const error = useRouteError();
   console.error(error);

   return (
      <div style={styles.root}>
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
            <i>{error.statusText || error.message}</i>
         </p>
      </div>
   );
};

export default ErrorPage;
