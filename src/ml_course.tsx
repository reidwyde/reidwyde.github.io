import React, {useState} from 'react';
import './app.css';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import LessonTheBigPicture from './ml_course/the_big_picture';
import LessonLinearAlgebra from './ml_course/linear_algebra';
import LessonGradientDescent from './ml_course/gradient_descent';
import LessonProbability from './ml_course/probability';
import LessonStatistics from './ml_course/statistics';
import LessonSupervisedI from './ml_course/supervised_learning_I_regression';
import LessonSupervisedII from './ml_course/supervised_learning_II_classification';
import LessonSupervisedIII from './ml_course/supervised_learning_III_metalearning';
import LessonUnsupervised from './ml_course/unsupervised_learning';
import LessonInformationTheory from './ml_course/information_theory';
import LessonGraphLearning from './ml_course/graph_learning';
import LessonGA from './ml_course/genetic_algorithms';
import LessonRL from './ml_course/reinforcement_learning';
import LessonNN from './ml_course/neural_networks';
import {Row, Col} from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {StyledButton as Button, PadRight8perc, Centered} from './styled';
import {scrollToTop} from './navigationHelpers';
import NavBar from './components/navBar';

// export default ({setActiveTab}: {setActiveTab: (key: string) => void}) => {
export default () => {
    const lessons: TabsProps['items'] = [
        {
            label: 'The Big Picture',
            children: <LessonTheBigPicture />,
        },
        {
            label: 'Linear Algebra',
            children: <LessonLinearAlgebra />,
        },
        {
            label: 'Probability',
            children: <LessonProbability />,
        },
        {
            label: 'Statistics',
            children: <LessonStatistics />,
        },

        {
            label: 'Gradient Descent',
            children: <LessonGradientDescent />,
        },

        {
            label: 'Supervised Learning I: Regression',
            children: <LessonSupervisedI />,
        },
        {
            label: 'Neural Networks',
            children: <LessonNN />,
        },

        {
            label: 'Information Theory',
            children: <LessonInformationTheory />,
        },

        {
            label: 'Supervised Learning II: Classification',
            children: <LessonSupervisedII />,
        },
        {
            label: 'Supervised Learning III: Meta-Learning',
            children: <LessonSupervisedIII />,
        },
        {
            label: 'Unsupervised Learning',
            children: <LessonUnsupervised />,
        },
        {
            label: 'Graph Learning',
            children: <LessonGraphLearning />,
        },
        {
            label: 'Genetic Algorithms',
            children: <LessonGA />,
        },
        {
            label: 'Reinforcement Learning',
            children: <LessonRL />,
        },
    ].map((obj, idx) => ({
        ...obj,
        label: `${idx + 1}) ${obj.label}`,
        key: `${idx + 1}`,
    }));

    const keys = lessons.map((lesson) => lesson.key);

    const [activeIdx, setIdx] = useState(0);

    const setActiveIdxWithKey = (key: string) => {
        setIdx(keys.findIndex((key1) => key1 === key));
    };

    const handlePrevTab = () => {
        const prevIdx = activeIdx - 1;
        if (prevIdx >= 0) {
            setIdx(prevIdx);
            scrollToTop();
        }
    };

    const handleNextTab = () => {
        const nextIdx = activeIdx + 1;
        if (nextIdx < lessons.length) {
            setIdx(nextIdx);
            scrollToTop();
        }
    };

    const BackwardButton = () => {
        if (activeIdx > 0) {
            return (
                <Button onClick={handlePrevTab}>
                    <ArrowLeftOutlined />
                    {lessons[activeIdx - 1].label}
                </Button>
            );
        } else {
            return <></>;
        }
    };

    const ForwardButton = () => {
        if (activeIdx < lessons.length - 1) {
            return (
                <Button onClick={handleNextTab}>
                    <ArrowRightOutlined />
                    {lessons[activeIdx + 1].label}
                </Button>
            );
        } else {
            return <></>;
        }
    };

    const BackwardForwardButtons = () => {
        return (
            <Row justify="space-between">
                <Col span={12}>
                    <BackwardButton />
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <ForwardButton />
                </Col>
            </Row>
        );
    };

    return (
        <>
            <NavBar activeTabKey="machine-learning-course" />
            <Centered>
                <h1>Course Under Construction</h1>
            </Centered>

            <Tabs
                activeKey={keys[activeIdx]}
                onChange={setActiveIdxWithKey}
                tabPosition="left"
                style={{height: 1000}}
                items={lessons.map((lesson) => ({
                    ...lesson,
                    forceRender: true,
                    children: (
                        <>
                            <PadRight8perc>
                                <BackwardForwardButtons />
                            </PadRight8perc>
                            {lesson.children}
                            <PadRight8perc>
                                <BackwardForwardButtons />
                            </PadRight8perc>
                            <br />
                        </>
                    ),
                }))}
            />
        </>
    );
};
