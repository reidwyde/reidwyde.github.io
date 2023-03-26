import React from 'react';
//import logo from './logo.svg';
import './app.css';
// import {Link} from 'react-router-dom';
import {Tabs} from 'antd';
import {useState} from 'react';
import type {TabsProps} from 'antd';
import Resume from './resume';
import MLCourse from './ml_course';
import DLCourse from './dl_course';
import MLOpsCourse from './ml_ops_course';
import Home from './home';
import Research from './research';
import {Layout} from 'antd';
import {scrollToTop} from './navigationHelpers';

// <Link to="/resume">Resume</Link>
//

// const onTabChange = (key: string) => {
//     console.log(key);
// };

export default () => {
    // const [activeTabKey, setActiveTabKey] = useState('home');

    // const onTabClick = (key: string) => {
    //     console.log(`setting active tab key ${key}`);
    //     setActiveTabKey(key);
    // };

    // const onTabChange = (activeKey: string) => {
    //     console.log(`on tab change triggered`);
    //     scrollToTop();
    //     console.log(`scroll to top executed`);
    // };

    const tabItems: TabsProps['items'] = [
        {
            key: 'home',
            label: `Home`,
            children: <Home />,
        },
        {
            key: 'resume',
            label: `Resume`,
            children: <Resume />,
        },
        {
            key: 'research',
            label: 'Research',
            children: <Research />,
        },

        {
            key: 'machine-learning-course',
            label: `Machine Learning Course`,
            children: <MLCourse />,
        },
        {
            key: 'deep-learning-course',
            label: `Deep Learning Course`,
            children: <DLCourse />,
        },
        {
            key: 'ml-ops-course',
            label: `ML Ops Course`,
            children: <MLOpsCourse />,
        },
    ];

    return <></>;

    // return (
    //     <>
    //         <Tabs
    //             centered
    //             activeKey={activeTabKey}
    //             items={tabItems}
    //             onTabClick={onTabClick}
    //             onChange={onTabChange}
    //         />
    //     </>
    // );
};
