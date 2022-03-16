import { createTheme } from "@mui/material/styles";

// Colors from logo (icon.png)

// White/Light      #efefef
// Gray-ish Brown   #a79b8f
// Brown            #a97d51 pigem #b38d66
// Black/Dark       #272727

/*
export const theme = createTheme({
    palette: {
        primary: {
            main: "#272727",
            contrastText: "#efefef"
        },
        secondary: {
            main: "#a97d51"
        }
    },
    typography: {
        "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`
    },
});

 */

// NEW COLORS
// Black            #000000
// Light Gray       #D9D9D9
// White            #FFFFFF

export const theme = createTheme({
    palette: {
        primary: {
            main: "#272727",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#D9D9D9"
        }
    },
    typography: {
        "fontFamily": `"Barlow", "Helvetica", "Arial", sans-serif`
    },
});
