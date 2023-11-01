import { Card, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import * as React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Contact() {

    return (
        <div className="resume">
            <Container className="component-padding">
                <Card className="contact-card">
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={6}>
                                <Card >
                                    <h1>Contact me!</h1>
                                    <h3 className="left-align">Email
                                    <a className="left-align" href="mailto:ryanmacie@yahoo.com">Send Email</a></h3>
                                    <h3 className="left-align">Cell Phone: (239) 308-6446</h3>
                                    <p></p>
                                </Card>
                            </Grid>
                            <Grid xs={6}>
                                <Card>
                                    <h1>My Socials</h1>
                                    <h3 className="left-align">LinkedIn
                                    <a className="left-align" href="https://www.linkedin.com/in/macieryan" target="_blank" rel="noreferrer">I'm on LinkedIn!</a></h3>
                                    <h3 className="left-align">Github
                                    <a className="left-align" href="https://github.com/macieryann/" target="_blank" rel="noreferrer">I'm on Github too!</a></h3>
                                    <p></p>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Container>
        </div>
    );
}