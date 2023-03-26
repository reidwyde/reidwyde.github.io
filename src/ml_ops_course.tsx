import {useState} from 'react';
import './app.css';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import {Row, Col} from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {StyledButton as Button, PadRight8perc} from './styled';
import {scrollToTop} from './navigationHelpers';
import NavBar from './components/navBar';

// export default ({setActiveTab}: {setActiveTab: (key: string) => void}) => {
export default () => {
    const lessons: TabsProps['items'] = [
        {
            label: 'ML Ops',
            children: 'ML Ops',
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
            <NavBar activeTabKey="ml-ops-course" />
            <Tabs
                activeKey={keys[activeIdx]}
                onChange={setActiveIdxWithKey}
                tabPosition="left"
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
