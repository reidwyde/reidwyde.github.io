import React from 'react';
import '../app.css';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import {scrollToTop} from '../navigationHelpers';
import {useNavigate} from 'react-router-dom';

export default ({activeTabKey}: {activeTabKey: string}) => {
    const navigate = useNavigate();

    const onTabClick = (key: string) => {
        navigate(`/${key}`);
    };

    const onTabChange = () => {
        scrollToTop();
    };

    const tabItems: TabsProps['items'] = [
        {
            key: 'home',
            label: `Home`,
            // children: <Home />,
        },
        {
            key: 'resume',
            label: `Resume`,
            // children: <Resume />,
        },
        {
            key: 'research',
            label: 'Research',
            // children: <Research />,
        },

        {
            key: 'machine-learning-course',
            label: `Machine Learning Course`,
            // children: <MLCourse />,
        },
        {
            key: 'deep-learning-course',
            label: `Deep Learning Course`,
            // children: <DLCourse />,
        },
        {
            key: 'ml-ops-course',
            label: `ML Ops Course`,
            // children: <MLOpsCourse />,
        },
    ];

    return (
        <>
            <Tabs
                centered
                animated={false}
                activeKey={activeTabKey}
                items={tabItems}
                onTabClick={onTabClick}
                onChange={onTabChange}
            />
        </>
    );
};
