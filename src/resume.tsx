import resume from './resources/Wyde_Resume_Spring_2023.pdf';
import {NoMarginP, PadLeft20px} from './styled';
import {Col, Row} from 'antd';
import NavBar from './components/navBar';

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
            <NavBar activeTabKey="resume" />
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
                            title="Data Scientist"
                            company="Cognovi Labs"
                            timePeriod="9/2024 - Present"
                            achievements={[
                                'Researched and implemented deepfake audio detection models using Librosa and XGBoost',
                                'Generated deepfake audio dataset to enhance model robustness using ElevenLabs API',
                                'Analyzed emotion propagation in large-scale social media networks using NLP and NetworkX',
                                'Developed interactive network visualization app using React, D3, and Dash',
                            ]}
                        />
                        <WorkExperience
                            title="Lead Developer, Full Stack Software Engineer"
                            company="Kyrtas"
                            timePeriod="2/2022 – 9/2024"
                            achievements={[
                                'Trained high performance financial analysis ML models using Python and Cython',
                                'Containerized and deployed ML models for real time use with Docker and Kubernetes',
                                'Monitored ML model performance with K9s, Prometheus, and Grafana',
                                'Integrated CI/CD pipeline using Harbor, ArgoCD, and Gitlab CI/CD',
                                'Managed ML model data storage with PyStore',
                                'Reviewed, collaborated on, and published code changes using Gitlab, NPM, PyPi, and Poetry',
                                'Implemented high speed, multi-account trading client using C++ and Rithmic API',
                                'Integrated application with back end databases using GraphQL, PostgreSQL and Apollo',
                                'Built cross-platform front end UI for securities purchasing application using ReactJS and TypeScript',
                                'Containerized application for scalable memory and storage using Docker and Kubernetes',
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
                                'Created and delivered a 14 week course on data science, traditional machine learning and deep learning. (I really enjoyed this experience, which inspired me to create the courses that I now offer to you for free on this website!)',
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
