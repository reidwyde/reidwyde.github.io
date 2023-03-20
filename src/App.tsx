import React from 'react';
//import logo from './logo.svg';
import './app.css';
// import {Link} from 'react-router-dom';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import Resume from './resume';
import MLCourse from './ml_course';
import DLCourse from './dl_course';
import Home from './home';
import Research from './research';
import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;

// <Link to="/resume">Resume</Link>
//

const onTabChange = (key: string) => {
    console.log(key);
};

const tabItems: TabsProps['items'] = [
    {
        key: 'Home',
        label: `Home`,
        children: <Home />,
    },
    {
        key: 'Resume',
        label: `Resume`,
        children: <Resume />,
    },
    {
        key: 'Research',
        label: 'Research',
        children: <Research />,
    },

    {
        key: 'Machine Learning Course',
        label: `Machine Learning Course`,
        children: <MLCourse />,
    },
    {
        key: 'Deep Learning Course',
        label: `Deep Learning Course`,
        children: <DLCourse />,
    },
];


const App = () => (
    <>
        <Tabs centered defaultActiveKey="Home" items={tabItems} onChange={onTabChange} />
    </>
);

export default App;
