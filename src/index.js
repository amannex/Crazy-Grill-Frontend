import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./root";
import "./configs/translation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Root />);
