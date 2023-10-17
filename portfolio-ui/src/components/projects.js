import { Card, Container } from '@mui/material';
import * as React from 'react';

export default function Projects() {

    return (
        <Container className="component-padding">
            <Card className="resume-card">
                <h1>My Projects (many are on-going!)</h1>
                <h3 className="left-align">My React Porfolio</h3>
                <p className="paragraph">You're looking at it!  I created this Portfolio to work on my ReactJS skills and also just to have an updated site with all of my information.</p>
                <a className="left-align" href="https://github.com/macieryann/macieryan" target="_blank" rel="noreferrer">Portfolio Github Link</a>
                <h3 className="left-align">Habit Tracker (Java)</h3>
                <a className="left-align" href="https://github.com/macieryann/habit-tracker" target="_blank" rel="noreferrer">Java Habit Tracker</a>
                <p></p>
            </Card>
        </Container>
    );
}