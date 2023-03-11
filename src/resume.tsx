import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';
import resume from './resources/Wyde_Resume_Spring_2023.pdf';
import {CenteredIframe, NoMarginP, PadLeft20px} from './styled';
import styled from 'styled-components';
import {Col, Row} from 'antd';

const SectionHeader = ({children}: {children: string}) => <b>{children}: </b>;

const TechnologySection = ({category, technologies}: {category: string; technologies: string}) => (
    <PadLeft20px>
        <NoMarginP>
            <SectionHeader>{category}</SectionHeader>
            {technologies}
        </NoMarginP>
    </PadLeft20px>
);

const renderList = (items: string[]): JSX.Element => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

const WorkExperience = ({
    title,
    company,
    timePeriod,
    achievements,
}: {
    title: string;
    company: string;
    timePeriod: string;
    achievements: string[];
}) => (
    <>
        <NoMarginP>
            <b>{title}</b>
        </NoMarginP>
        <NoMarginP>{company}</NoMarginP>
        <NoMarginP>{timePeriod}</NoMarginP>
        {renderList(achievements)}
    </>
);

const Resume = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <PadLeft20px>
                        <a href={resume}>You can access a pdf of my resume here</a>
                        <br />
                        <br />
                        <b>Contact</b>
                        <NoMarginP>Reid Wyde</NoMarginP>
                        <NoMarginP>214-870-4733</NoMarginP>
                        <NoMarginP>reidwyde@gmail.com</NoMarginP>
                        <br />
                        <b>Links</b>
                        <NoMarginP>
                            <a href="https://www.linkedin.com/in/reidwyde">
                                linkedin.com/in/reidwyde
                            </a>
                        </NoMarginP>
                        <NoMarginP>
                            <a href="reidwyde.github.io">reidwyde.github.io (this site)</a>
                        </NoMarginP>
                        <br />
                        <SectionHeader>Skills</SectionHeader>
                        Full Stack Software Engineering, Data Science
                        <br />
                        <SectionHeader>Languages</SectionHeader>
                        Python, TypeScript, Cython, JavaScript, PostgreSQL, GraphQL
                        <br />
                        <SectionHeader>Platforms</SectionHeader>
                        Linux, Windows, AWS EC2
                        <br />
                        <SectionHeader>Technologies</SectionHeader>
                        <TechnologySection
                            category="Containerization"
                            technologies="Docker, Kubernetes"
                        />
                        <TechnologySection
                            category="Front End"
                            technologies="ReactJS, HTML, CSS, styled-components"
                        />
                        <TechnologySection category="Back End" technologies="NodeJS, Python" />
                        <TechnologySection category="Networking" technologies="Apollo, Flask" />
                        <TechnologySection
                            category="Databases"
                            technologies="PostgreSQL, GraphQL, Redis, MongoDB, Postgraphile"
                        />
                        <TechnologySection category="Object Storage" technologies="Minio, AWS S3" />
                        <TechnologySection
                            category="Code Organization"
                            technologies="Git, PyPi, Poetry, Conda"
                        />
                        <TechnologySection
                            category="Data Science / Machine Learning / Deep Learning"
                            technologies=" 
Numpy, Pandas,
                XGBoost, PyTorch, Tensorflow, Keras, Scikit-Learn"
                        />
                        <TechnologySection
                            category="Acceleration / Optimization"
                            technologies="CUDA, GEKKO, PyMC3"
                        />
                        <br />
                        <h4>Work Experience</h4>
                        <WorkExperience
                            title="Full Stack Software Development Engineer"
                            company="Stealth Mode Startup"
                            timePeriod="2/2022 – Present"
                            achievements={[
                                'Built cross-platform front end UI for securities purchasing application using ReactJS and TypeScript',
                                'Containerized application for scalable memory and storage using Docker and Kubernetes',

                                'Integrated application with back end databases using GraphQL, PostgreSQL and Apollo',
                                'Added permission configured multimedia data storage to application using Minio',
                                'Published contributions to internal tooling libraries using PyPi and Poetry ',
                                'Implemented statistical analysis of stock time series data in Python',
                                'Accelerated core utilities and time critical functions using Cython',
                                'Reviewed and collaborated on code changes using Gitlab',
                                'Built cross container data pipelines using Redis',
                            ]}
                        />
                        <br />
                        <WorkExperience
                            title="Engineering Scientist Associate"
                            company="Applied Research Laboratories UT"
                            timePeriod="7/2020 – 2/2022"
                            achievements={[
                                'Used computer vision and reinforcement learning to characterize the ocean acoustic environment',

                                'Built parallel computing pipeline infrastructure to speed up data generation process 100x',

                                'Collaborated with teammates on underwater acoustic simulation toolbox software design',
                                'Created and delivered a 14 week course on data science, machine learning and deep learning. (I really enjoyed this experience, which inspired me to create the machine learning course that I now offer to you for free on this website!)',
                            ]}
                        />
                        <br />
                        <WorkExperience
                            title="Deep Learning / Machine Learning Engineer"
                            company="Infovision R&D"
                            timePeriod="5/2020 – 7/2020"
                            achievements={[
                                'Built real time multi camera multi person tracking system using computer vision and 3D camera systems',
                                'Designed systems, created test framework and operated as technical lead for machine learning team',
                                'Integrated RESTful web services using Flask and asynchronous multiprocessing in Python',
                                'Created horizontally scalable camera input network using Redis',
                            ]}
                        />
                        <br />
                        <WorkExperience
                            title="Audio Systems Engineer Co-op"
                            company="Microsemi Corporation"
                            timePeriod="2/2018 – 12/2018"
                            achievements={[
                                'Architected convolutional neural networks to reduce speech reverberation using Keras and Tensorflow',
                                'Prototyped signal processing algorithms for deployment in embedded systems using MATLAB and C',
                                'Automated validation test bench data generation using Bash and Tcl',
                            ]}
                        />
                        <br />
                        <h4>Research</h4>
                        <WorkExperience
                            title="Research Assistant"
                            company="Center for Computational Oncology UT"
                            timePeriod="6/2019 – 12/2022"
                            achievements={[
                                'Contributing author to “Optimizing combination therapy in a murine model of HER2+ breast cancer”, Computer Methods in Applied Mechanics and Engineering, December 2022',
                                'Developed and trained breast cancer growth models using Python',
                                'Guided optimal chemotherapy and immunotherapy cancer treatment',
                                'Integrated Markov Chain Monte Carlo statistical programming framework PyMC3',
                                'Implemented gradient based calibration for system models in PyTorch, speeding convergence 10x',
                                'Built treatment recommendation system using optimal control theory and GEKKO',
                            ]}
                        />
                        <br />
                        <h4>Education</h4>
                        <WorkExperience
                            title="B.Sc. Computer Engineering; GPA 3.85"
                            company="The University of Texas at Austin"
                            timePeriod="8/2015 – 5/2020"
                            achievements={[
                                'Specialization: Software Development and Data Science',
                                'Coursework: Software Design and Implementation, Algorithms, Applied Statistics, Data Science, Real-Time Digital Signal Processing, Applied Linear Algebra, Probability, Numerical Methods',
                            ]}
                        />
                    </PadLeft20px>
                </Col>
            </Row>
        </>
    );
};
export default Resume;
