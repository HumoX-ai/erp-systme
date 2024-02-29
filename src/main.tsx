import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import App from "./App.tsx";

// css file
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);
