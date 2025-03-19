import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";

const root = document.getElementById("root");

if (!root) throw new Error("No root found!");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
