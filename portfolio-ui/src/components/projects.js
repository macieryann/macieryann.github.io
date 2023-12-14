import { Card, Container } from '@mui/material';
import * as React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GitHubIcon from '@mui/icons-material/GitHub';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export default function Projects() {

    return (
        <Container className="component-padding">
            <Card className="projects-card">
                <h1>My Projects (they're on-going!)</h1>
                {/* GITHUB */}

                <h3 className="left-align">
                    <GitHubIcon style={{ marginRight: '5px' }} />
                    <a href="https://github.com/macieryann/" target="_blank" rel="noreferrer">GitHub</a>
                </h3>
                {/* HABIT TRACKER */}
                <h3 className="left-align">
                    <AddTaskIcon style={{ marginRight: '5px' }} />
                    <a href="https://github.com/macieryann/habit-tracker" target="_blank" rel="noreferrer">
                        Habit Tracker
                    </a>
                </h3>
                <p className="paragraph">Full stack application (Java backend / React frontend) that allows users to track habits by the week.  I started this project in order to kick-start my own weekly habits.  I wanted a habit tracker that met some specific "requirements" of my own so I thought: what better way than to create my own.</p>
                {/* PORTFOLIO */}
                <h3 className="left-align">
                    <EmojiPeopleIcon style={{ marginRight: '5px' }} />
                    <a href="https://github.com/macieryann/macieryan" target="_blank" rel="noreferrer">React Portfolio Github</a>
                </h3>
                <p className="paragraph">You're looking at it!  I created this Portfolio to work on my ReactJS skills and also just to have an updated site with all of my information.</p>
                {/* PRODUCTION PROJECT */}
                <h3 className="left-align">
                    <PrecisionManufacturingIcon style={{ marginRight: '5px' }} />
                    <a href="https://github.com/macieryann/ProductionProject-Official" target="_blank" rel="noreferrer">Facility Production Project</a>
                </h3>
                <p className="paragraph">The Production Project was created in my Object-Oriented Programming course during my senior year at Florida Gulf Coast University.  This program is for a media player production facility to keep tracking of products being produced.  With this program, employees of the production facility can input new products and store them in a collection that can be recalled by any other employees at any time.</p>
            </Card>
        </Container>
    );
}