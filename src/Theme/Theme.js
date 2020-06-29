import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colorBackground: {
        primary: "#282e3c",
        secondary: "white",
    },   
    fontColor: {
        primary: "white",
        secondary: "black",
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