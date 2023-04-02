import './app.css';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import NavBar from './components/navBar';
import {Centered} from './styled';

// import LessonNeuralNetworks from './dl_course/neural_networks';

/*
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

export default () => (
    <>
        <NavBar activeTabKey="deep-learning-course" />
        <Tabs defaultActiveKey="1" tabPosition="left" items={lessons} />
    </>
);
*/

export default () => (
    <>
        <NavBar activeTabKey="deep-learning-course" />
        <Centered>
            <h1>Coming Soon!</h1>
        </Centered>
    </>
);
