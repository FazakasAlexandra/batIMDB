export  const themeLight = {
    colorBackground: {
        primary: "white",
        nav: "gray"
    },   
    fontColor: {
        primary: "black",
        secondary: "black"
    },
    shadows: {
        shadow1: "1px 0px 67px 6px rgba(0,0,0,0.75)",
    }
   
};

export const themeDark = {
    colorBackground: {
        primary: "#282e3c",
        nav: "rgb(9,30,50)"
    },   
    fontColor: {
        primary: "white",
        secondary: "yellow"
    },
    shadows: {
        shadow1: "1px 0px 67px 6px rgba(255,255,255,1)"
    }
   
};




// import { withTheme } from 'styled-components';
// style={{color: this.props.theme.fontColor.primary }}   -black
// style={{color: this.props.theme.fontColor.secondary }}  -yelow
// style={{backgroundColor: this.props.theme.colorBackground.primary }}