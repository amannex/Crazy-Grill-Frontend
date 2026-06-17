import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Events, Home, Menu, Contact } from "./pages";
import { LanguageContextProvider } from "./components/state/language";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
   },
   {
      path: "/events",
      element: <Events />,
      errorElement: <ErrorPage />
   },
   {
      path: "/menu",
      element: <Menu />,
      errorElement: <ErrorPage />
   },
   {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />
   }
]);

const Root = () => {
   return (
      <LanguageContextProvider>
         <RouterProvider router={router} />
      </LanguageContextProvider>
   );
};

export default Root;
