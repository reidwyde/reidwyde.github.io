import React, { useState } from 'react';
import { Select, Space, Typography } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import type { Resource } from '../data/resourcesData';
import { resourcesData } from '../data/resourcesData';

const { Option } = Select;
const { Title } = Typography;

const ResourceContentPreview = ({ name, tags }: { name: string; tags: string[] }) => {
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

const ResourceSearch = ({ resources }: { resources: Resource[] }) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Flatten all tags across resources
    const allTags = Array.from(
        new Set(
            resources
                .filter((content: any) => content?.tags)
                .flatMap((content: any) => content.tags)
        )
    );

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
                    placeholder="Select tags"
                    onChange={handleTagChange}
                    style={{ width: '100%' }}
                >
                    {allTags.map((tag) => (
                        <Option key={tag} value={tag}>
                            {tag}
                        </Option>
                    ))}
                </Select>

                {/* Display Title */}
                <Title level={3}>Filtered Topics</Title>

                {/* Display filtered resources */}
                <div>
                    {filteredResources.length === 0 ? (
                        <div>No resources found for selected tags</div>
                    ) : (
                        filteredResources.map((content: any) => (
                            <ResourceContentPreview
                                key={content.key}
                                name={content.label}
                                tags={content.tags}
                            />
                        ))
                    )}
                </div>
            </Space>
        </div>
    );
};

export default ResourceSearch;
