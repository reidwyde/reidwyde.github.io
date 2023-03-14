import React, {useState} from 'react';
import './app.css';
import {Radio, Tabs} from 'antd';
import type {RadioChangeEvent, TabsProps} from 'antd';
import {CenteredIframe} from './styled';
// import lecture_1 from './resources/ml_course/lecture_1_The_Big_Picture.pdf';
import Lecture_1 from './ml_course/lecture_1_the_big_picture';

const slides: TabsProps['items'] = [
    {
        key: '1) The Big Picture',
        label: '1) The Big Picture',
        children: <Lecture_1 />,
    },
];

// const MLCourse = () => {
//     return (
//         <div>
//             <Tabs defaultActiveKey="1" tabPosition="left" style={{height: 1000}} items={slides} />
//         </div>
//     );
// };

const MLCourse = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition="left" style={{height: 1000}} items={slides} />
        </div>
    );
};

export default MLCourse;
