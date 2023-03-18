import React, {useState} from 'react';
import './app.css';
import {Radio, Tabs} from 'antd';
import type {RadioChangeEvent, TabsProps} from 'antd';
import {CenteredIframe} from './styled';
// import LessonNeuralNetworks from './dl_course/neural_networks';

const lessons: TabsProps['items'] = [
    {
        label: 'Neural Networks',
        children: 'Neural Networks',
    },
    {
        label: 'Computer Vision',
        children: 'Computer Vision',
    },
    {
        label: 'Sequence Learning',
        children: 'Sequence Learning',
    },
    {
        label: 'Transformers',
        children: 'Transformers',
    },
    {
        label: 'Deep Reinforcement Learning',
        children: 'Deep Reinforcement Learning',
    },
    {
        label: 'Diffusion Models',
        children: 'Diffusion Models',
    },
    {
        label: 'Stable Diffusion',
        children: 'Stable Diffusion',
    },
    {
        label: 'ChatGPT',
        children: 'ChatGPT',
    },
    {
        label: 'Deep Symbolic Regression',
        children: 'Deep Symbolic Regression',
    },
].map((obj, idx) => ({
    ...obj,
    label: `${idx + 1}) ${obj.label}`,
    key: `${idx + 1}`,
}));

const DLCourse = () => (
    <div>
        <Tabs defaultActiveKey="1" tabPosition="left" style={{height: 1000}} items={lessons} />
    </div>
);

export default DLCourse;
