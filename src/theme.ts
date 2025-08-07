import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#fff7ed",
            paper: "#ffffff"
        },
        primary: {
            main: "#a17c5e"
        },
        secondary: {
            main: "#d6bfa6"
        },
        text: {
            primary: "#3e2c1c"
        },
    },
    typography: {
        fontFamily: '"Merriweather", serif',
        h4: {
            fontWeight: 600,
            fontSize: "2rem",
        }, 
        body1: {
            fontSize: "1rem",
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fffdf6",
                    border: "2px solid #a17c5e",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    padding: "12px 24px",
                },
            },
        },
        
    }
});

export default theme;