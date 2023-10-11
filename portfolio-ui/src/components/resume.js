import * as React from 'react';
import { Card } from '@mui/material';
import '../App.css';

export default function Resume() {
    return (
        <Card className="resume-card">
            <h1>Work Experience</h1>
            <h3 className="left-align">General Motors: January 2021 - Present</h3>
            <h3 className="left-align">Software Engineer</h3>
            <p className="left-align">I've done a lot of work at this job I can't wait to tell you all about it.</p>
            <ul className="left-align">
                <li>like code</li>
                <li>and support user acceptance testing</li>
            </ul>
        </Card>
    );
}