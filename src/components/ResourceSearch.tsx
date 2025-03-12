import React, { useState } from 'react';
import { Select, Space, Typography } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import type { Resource } from '../data/resourcesData';
import { resourcesData } from '../data/resourcesData';

const { Option } = Select;
const { Title } = Typography;

const ResourceContentPreview = ({
    name,
    tabKey,
    tags,
    byline,
    onTitleClick,
}: {
    name: string;
    tabKey: string;
    tags: string[];
    byline: string;
    onTitleClick: (_: string) => void;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        cursor: 'pointer',
        color: isHovered ? '#1677ff' : 'initial', // Hover color
        transition: 'color 0.3s', // Smooth transition
    };

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
                <span
                    style={style}
                    onClick={() => {
                        onTitleClick(tabKey);
                    }}
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
                >
                    {name}
                </span>
            </h1>
            <h3>{byline}</h3>

            {/* Tags Section */}
            <div style={{ marginBottom: '1rem' }}>
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
        </div>
    );
};

const ResourceSearch = ({
    resources,
    onTitleClick,
}: {
    resources: Resource[];
    onTitleClick: (_: string) => void;
}) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Flatten all tags across resources
    const allTags = Array.from(
        new Set(
            resources
                .filter((content: any) => content?.tags)
                .flatMap((content: any) => content.tags)
        )
    ).sort();

    // Filter resources based on selected tags
    const filteredResources = resourcesData.filter((content: any) =>
        selectedTags.every((tag) => content.tags.includes(tag))
    );

    const handleTagChange = (value: string[]) => {
        setSelectedTags(value);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                {/* Tag Selector */}
                <Select
                    mode="multiple"
                    placeholder="Filter by tag"
                    onChange={handleTagChange}
                    style={{
                        width: '100%',
                        maxWidth: '45rem',
                        margin: '0 auto', // This centers the component horizontally
                        display: 'block', // Ensures the select takes up block-level space
                    }}
                >
                    {allTags.map((tag) => (
                        <Option key={tag} value={tag}>
                            {tag}
                        </Option>
                    ))}
                </Select>

                {/* Display filtered resources */}
                <div>
                    {filteredResources.length === 0 ? (
                        <div>No resources found for selected tags</div>
                    ) : (
                        filteredResources.map((content: any) => {
                            return (
                                <ResourceContentPreview
                                    {...content}
                                    tabKey={content.key}
                                    onTitleClick={onTitleClick}
                                />
                            );
                        })
                    )}
                </div>
            </Space>
        </div>
    );
};

export default ResourceSearch;
