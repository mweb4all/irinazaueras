import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Config } from "./Config";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,    // default
      sm: 600,  // default
      md: 900,  // default
      lg: 1200, // default
      xl: 1536, // default
      custom: 1800, // your custom breakpoint
    },
  },
  typography: {
    fontFamily: "Lexend, Arial, sans-serif",
    body1: {
      fontSize: "0.875rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "1rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "1.125rem", // Desktop
      },
    },
    body2: {
      fontSize: "0.75rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "0.875rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "1rem", // Desktop
      },
    },
    h1: {
      fontSize: "2rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "2.5rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "3rem", // Desktop
      },
    },
    h2: {
      fontSize: "1.75rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "2.25rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "2.75rem", // Desktop
      },
    },
    h3: {
      fontSize: "1.5rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "2rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "2.5rem", // Desktop
      },
    },
    h4: {
      fontSize: "1.25rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "1.75rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "2rem", // Desktop
      },
    },
    h5: {
      fontSize: "1rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "1.5rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "1.75rem", // Desktop
      },
    },
    h6: {
      fontSize: "0.875rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "1.25rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "1.5rem", // Desktop
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Config />
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </>,
);
