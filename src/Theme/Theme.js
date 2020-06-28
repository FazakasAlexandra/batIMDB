import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        white: "white",
        black: "black",
        yelow: "yellow",
    },
    fonts: ["sans-serif", "Roboto"],    
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    shadows: {
        forWhite: "1px 0px 67px 6px rgba(0,0,0,0.75)",
        forBlack: "box-shadow: 1px 0px 67px 6px rgba(255,255,255,1);"
    }
   
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;