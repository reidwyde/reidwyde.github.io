import React from 'react';
import './app.css';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';

// <Link to="/resume">Resume</Link>
//

const Research = () => {
    return (
        <>
            <h1>Under Construction</h1>
            <p>
                I had the pleasure of working with the very talented Dr. Ernesto Lima on a research
                project as part of the Center for Computational Oncology at UT Austin.
            </p>
            <p>
                In this in silico work, we developed a mathematical tissue level model of HER2+
                breast cancer in the presence of a chemotherapy and immunotherapy. After fitting the
                growth dynamics of the system to murine data, we optimized drug delivery to maximize
                efficacy while minimizing total amount of chemotherapy and immunotherapy delivered
                to the patient.
            </p>

            <p></p>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0045782522005060">
                You can access our published work here
            </a>
        </>
    );
};

export default Research;
