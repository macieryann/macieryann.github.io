import { Card, Container } from '@mui/material';
import * as React from 'react';

export default function Socials() {

    return (
        <Container className="component-padding">
            <Card className="resume-card">
                <h1>My Socials</h1>
                <h3 className="left-align">LinkedIn</h3>
                <a className="left-align" href="https://www.linkedin.com/in/macieryan" target="_blank">I'm on LinkedIn!</a>
                <h3 className="left-align">Github</h3>
                <a className="left-align" href="https://github.com/macieryann/" target="_blank">I'm on Github too!</a>

            </Card>
        </Container>
    );
}