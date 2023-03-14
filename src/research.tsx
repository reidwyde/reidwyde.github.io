import React from 'react';
import './app.css';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import {PadLeft20px, NoMarginH3, NoMarginH4} from './styled';

// <Link to="/resume">Resume</Link>
//

const Research = () => {
    return (
        <>
            <PadLeft20px>
                <NoMarginH3>
                    Optimizing combination therapy in a murine model of HER2+ breast cancer
                </NoMarginH3>
                <NoMarginH4>
                    Computer Methods in Applied Mechanics and Engineering, December 2022
                </NoMarginH4>
                <p>
                    I had the pleasure of working with the extremely talented Dr. Ernesto Lima, Dr.
                    Anna Sorace, and Dr. Thomas Yankeelov on a research project at the Center for
                    Computational Oncology at UT Austin.
                </p>
                <p>
                    In this in silico work, we developed a mathematical tissue level model of HER2+
                    breast cancer in the presence of a chemotherapy and immunotherapy. After fitting
                    the growth dynamics of the system to murine data, we optimized drug delivery to
                    maximize efficacy while minimizing total amount of chemotherapy and
                    immunotherapy delivered to the patient.
                </p>

                <p>
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0045782522005060">
                        You can access our published work here
                    </a>
                    {` or email me at reidwyde@gmail.com for a free copy.`}
                </p>
            </PadLeft20px>
        </>
    );
};

export default Research;
