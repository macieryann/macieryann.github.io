import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#8D3757',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: '#8D3757',
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
});

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <AppBar position="static">
            <ThemeProvider theme={theme}>
                <Toolbar variant="dense">
                    <Typography variant="h6" component="div">
                        MACIE !
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label={<Link to="/resume" className="custom-tab">Resume</Link>} {...a11yProps(0)} />
                        <Tab label={<Link to="/projects" className="custom-tab">Projects</Link>}  {...a11yProps(1)}/>
                        <Tab label={<Link to="/socials" className="custom-tab">Socials</Link>}  {...a11yProps(2)}/>
                    </Tabs>
                </Toolbar>
            </ThemeProvider>
        </AppBar>
    );
}