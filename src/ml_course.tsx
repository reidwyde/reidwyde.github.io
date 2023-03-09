import React, {useState} from 'react';
import './app.css';
import {Radio, Tabs} from 'antd';
import type {RadioChangeEvent, TabsProps} from 'antd';
import {CenteredIframe} from './styled';
import lecture_1 from './resources/ml_course/lecture_1_The_Big_Picture.pdf';

const slides: TabsProps['items'] = [
    {
        key: 'The Big Picture',
        label: 'The Big Picture',
        children: <CenteredIframe src={lecture_1} height="600" width="1000" frameBorder="0" />,
    },
];

const MLCourse = () => {
    return (
        <div>
            <h1> This page is under construction</h1>
            <Tabs defaultActiveKey="1" tabPosition="left" style={{height: 1000}} items={slides} />
        </div>
    );
};

export default MLCourse;
