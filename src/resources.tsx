import './App.css';

import React, {useState} from 'react';
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import NavBar from './components/navBar';
import {StyledButton as Button, PadRight8perc, Centered} from './styled';
import {Row, Col} from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {scrollToTop} from './navigationHelpers';
import ResourceSearch from './components/ResourceSearch';
import {resourcesData} from './data/resourcesData';
import type {Resource} from './data/resourcesData';

const ResourceContent = ({
    name,
    tags,
    body,
}: {
    name: string;
    tags: string[];
    body: React.ReactNode;
}) => {
    return (
        <div
            style={{
                maxWidth: '42rem',
                margin: '0 auto',
                padding: '1.5rem',
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
            }}
        >
            {/* Blog Post Title */}
            <h1
                style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '1rem',
                }}
            >
                {name}
            </h1>

            {/* Tags Section */}
            <div style={{marginBottom: '1rem'}}>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#bee3f8',
                            color: '#2b6cb0',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            marginRight: '0.5rem',
                        }}
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Blog Content */}
            <div style={{color: '#4a5568', fontSize: '1.125rem'}}>{body}</div>
        </div>
    );
};

// const resourcesSorted: Resource[] = resourcesData.sort((a, b) => {
//     if (!a.lastUpdated) {
//         return 1;
//     }
//     if (!b.lastUpdated) {
//         return 0;
//     }
//     return Number(a.lastUpdated > b.lastUpdated);
// });

const resourcesSorted: Resource[] = resourcesData; // I think I like the order that they're in
export default () => {
    const [activeIdx, setIdx] = useState(0);

    const setActiveIdxWithKey = (key: string) => {
        setIdx(keys.findIndex((key1) => key1 === key));
    };

    const searchTab = {
        label: 'Search',
        key: 'search',
        children: (
            <>
                <ResourceSearch resources={resourcesData} onTitleClick={setActiveIdxWithKey} />
            </>
        ),
    };

    const keys = [searchTab.key, ...resourcesSorted.map((res) => res.key)];
    const buttonLabels = [searchTab.label, ...resourcesSorted.map((res) => res.label)];

    const BackToSearchButton = () => {
        return (
            <Button
                onClick={() => {
                    setIdx(0);
                    scrollToTop();
                }}
            >
                Back To Resources Search
            </Button>
        );
    };

    const handlePrevTab = () => {
        const prevIdx = activeIdx - 1;
        if (prevIdx > 0) {
            setIdx(prevIdx);
            scrollToTop();
        }
    };

    const handleNextTab = () => {
        const nextIdx = activeIdx + 1;
        if (nextIdx < resourcesData.length) {
            setIdx(nextIdx);
            scrollToTop();
        }
    };

    const BackwardButton = () => {
        if (activeIdx > 1) {
            return (
                <Button onClick={handlePrevTab}>
                    <ArrowLeftOutlined />
                    {buttonLabels[activeIdx - 1]}
                </Button>
            );
        } else {
            return <></>;
        }
    };

    const ForwardButton = () => {
        if (activeIdx < resourcesData.length - 1) {
            return (
                <Button onClick={handleNextTab}>
                    <ArrowRightOutlined />
                    {buttonLabels[activeIdx + 1]}
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

    const resourcesContents: {label: string; key: string; children: React.ReactNode}[] = [
        searchTab,
        ...resourcesSorted.map((rcd: Resource) => ({
            ...rcd,
            children: (
                <>
                    <Centered>
                        <BackToSearchButton />
                    </Centered>

                    <PadRight8perc>
                        <BackwardForwardButtons />
                    </PadRight8perc>
                    <ResourceContent {...rcd} />
                    <br />
                    <PadRight8perc>
                        <BackwardForwardButtons />
                    </PadRight8perc>
                </>
            ),
        })),
    ];

    return (
        <>
            <NavBar activeTabKey="resources" />

            <Tabs
                activeKey={keys[activeIdx]}
                onChange={setActiveIdxWithKey}
                tabPosition="left"
                style={{height: 1000}}
                items={resourcesContents.map((resourceContents) => ({
                    forceRender: true,
                    children: resourceContents.children,
                    key: resourceContents.key,
                    label: resourceContents.label,
                }))}
            />
        </>
    );
};
