import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // often used for buttons, links, and other interactive elements
            main: '#b2456e',
        },
        secondary: {
            // typically used for secondary actions and highlights
            main: '#7c8363',
        },
        tierary: {
            main: '#df5587'
        },
        background: {
            // background color of the app
            default: '#FBEAE7',
        },
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        body1: {
            color: '#333',
        },
        h1: {
            color: '#000',
        },
        h6: {
            color: '#fbeae7'
        }
    },
});

export default theme;