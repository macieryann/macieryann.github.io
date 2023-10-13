import * as React from 'react';
import { Card, Container, Divider } from '@mui/material';
import '../App.css';

export default function Resume() {
    return (
        <Container className="component-padding">
            <Card className="resume-card">
                <h1>Resume</h1>
                <h2 className="left-align">Work Experience</h2>
                <h3 className="left-align">Software Engineer @ General Motors</h3>
                <h3 className="left-align">March 2023 - Present</h3>
                <p className="paragraph">Promoted to Level 6 Software Engineer a year ahead of schedule through the "new college hire" program, capitalizing on established expertise and accomplishments as an entry-level developer. Proficiently writing, debugging, and optimizing code, managing vendor relationships, and innovating inventive problem-solving methodologies in an elevated technical capacity..</p>
                <ul className="unordered-list-item">
                    <li>Orchestrated and spearheaded User Acceptance Testing for integration with over 10 external vendors, ensuring seamless connectivity with GM required APIs and delivering high-quality, interoperable solutions</li>
                    <li>Developed comprehensive Power BI reports from scratch to analyze system call volume, delivering essential business insights into application performance and user engagement</li>
                    <li>United with both the development and testing teams to create an internal company-facing application, offering an intuitive interface to access critical data such as top 25 errors, transaction logs, dealer information, and credentials directly from our database. This initiative empowered business personnel to efficiently access essential insights without the need for direct database interaction</li>
                    <li>Implemented Swagger UI / OpenAPI documentation for the application's APIs, enhancing accessibility and simplifying API consumption for developers and stakeholders</li>
                </ul>
                <h3 className="left-align">Entry Level Software Developer @ General Motors</h3>
                <h3 className="left-align">January 2021 - February 2023</h3>
                <p className="paragraph">As a "new college hire" software developer, I swiftly acclimated to the team, actively contributing to codebase enhancements, collaborating on feature development, and rapidly expanding proficiency in various technologies crucial to the organization's software projects.</p>
                <ul className="unordered-list-item">
                    <li>Collaborated on the development of a new dealer-facing application, contributing to both front-end and back-end codebases, resulting in a seamless user experience and robust system functionality</li>
                    <li>Championed deployment processes by conducting rigorous security scans, crafting regression and gold builds for Quality Assurance, adhering to change management standards, and harnessing Azure DevOps one-click CI/CD pipelines for streamlined and reliable software releases</li>
                    <li>Became proficient in utilizing the Insomnia API Development platform for streamlined API testing and development processes.</li>
                    <li>Led migration of scheduled batch jobs from legacy application to a new platform, ensuring uninterrupted operations and enhancing system performance</li>
                    <li>Contributed to the development of new microservices that expanded our team's global presence, facilitating operations and engagement in Brazil</li>
                </ul>
                <Divider variant="middle" />
                <h2 className="left-align">Education</h2>
                <h3 className="left-align">Florida Gulf Coast University</h3>
                <p className="left-align">Bachelor of Science in Computer Information Systems</p>
                <p className="left-align">Minor in Spanish & Concentration in Computer Programming</p>
            </Card>
        </Container>
    );
}