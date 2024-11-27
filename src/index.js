// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App as Canvas } from "./Canvas";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Canvas />);
