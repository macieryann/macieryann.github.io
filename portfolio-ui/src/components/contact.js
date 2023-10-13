import { Card, Container } from '@mui/material';
import * as React from 'react';

export default function Contact() {

    return (
        <Container className="component-padding">
        <Card className="resume-card">
            <h1>Contact me!</h1>
            <h3 className="left-align">Email</h3>
            <a className="left-align" href="mailto:ryanmacie@yahoo.com">Send Email</a>
            <h3 className="left-align">Cell Phone</h3>
            <a className="left-align">(239) 308-6446</a>
            <p></p>
        </Card>
    </Container>
    );
}