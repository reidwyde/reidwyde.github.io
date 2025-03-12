import React from 'react';

export default ({
    name,
    tags,
    body,
    byline,
}: {
    name: string;
    tags: string[];
    body: React.ReactNode;
    byline: string;
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
            <h3>{byline}</h3>

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
