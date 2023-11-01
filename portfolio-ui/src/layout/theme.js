import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // often used for buttons, links, and other interactive elements
            main: '#097cc1',
        },
        secondary: {
            // typically used for secondary actions and highlights
            main: '#097cc1',
        },
        tierary: {
            main: '#df5587'
        },
        background: {
            // background color of the app
            default: '#000000',
        },
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        body1: {
            color: '#333',
        },
        h1: {
            color: '#000000',
            alignContent: 'center'
        },
        h2: {
            alignContent: 'left',
        },
        h6: {
            color: '#fbeae7'
        }
    },
});

export default theme;