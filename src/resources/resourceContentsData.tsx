import React from 'react';

const eks_videoUrl = 'https://www.youtube.com/watch?v=p6xDCz00TxU';
// const eks_videoId = 'p6xDCz00TxU'; // Extract the video ID from the URL

const YouTubeEmbed = ({ videoUrl }: { videoUrl: string }) => {
    const videoId = videoUrl.replace('https://www.youtube.com/watch?v=', '');

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;

export const resourceContentsData = [
    {
        label: 'ChatGPT',
        key: 'chatgpt',
        name: 'ChatGPT',
        tags: ['AI', 'Natural Language Processing', 'Productivity'],
        body: 'TODO',
    },
    {
        label: 'Python',
        key: 'python',
        name: 'Python',
        tags: ['Programming Languages'],
        body: 'TODO',
    },
    {
        label: 'TypeScript',
        key: 'typescript',
        name: 'TypeScript',
        tags: ['Programming Languages', 'Frontend', 'JavaScript'],
        body: 'TODO',
    },
    {
        label: 'SQL',
        key: 'sql',
        name: 'SQL',
        tags: ['Programming Languages', 'Databases'],
        body: 'TODO',
    },
    {
        label: 'Docker',
        key: 'docker',
        name: 'Docker',
        tags: ['Containerization', 'Cloud', 'DevOps'],
        body: 'TODO',
    },
    {
        label: 'Kubernetes',
        key: 'kubernetes',
        name: 'Kubernetes',
        tags: ['DevOps', 'Cloud', 'Kubernetes'],
        body: 'TODO',
    },
    {
        label: 'Harbor',
        key: 'harbor',
        name: 'Harbor',
        tags: ['DevOps', 'Containerization'],
        body: 'TODO',
    },
    {
        label: 'AWS EC2',
        key: 'aws_ec2',
        name: 'AWS EC2',
        tags: ['AWS', 'Cloud', 'DevOps'],
        body: 'TODO',
    },
    {
        label: 'AWS ECR',
        key: 'aws_ecr',
        name: 'AWS ECR',
        tags: ['AWS', 'Cloud', 'Container Registry', 'DevOps'],
        body: 'TODO',
    },
    {
        label: 'AWS EKS',
        key: 'aws_eks',
        name: 'AWS EKS',
        tags: ['AWS', 'Cloud', 'DevOps', 'Kubernetes'],
        body: (
            <>
                <YouTubeEmbed videoUrl={eks_videoUrl} />
            </>
        ),
    },
    {
        label: 'Git',
        key: 'git',
        name: 'Git',
        tags: ['DevOps', 'Version Control', 'Productivity'],
        body: 'TODO',
    },
    {
        label: 'Neovim',
        key: 'neovim',
        name: 'Neovim',
        tags: ['Productivity'],
        body: 'TODO',
    },
    {
        label: 'ReactJS',
        key: 'react',
        name: 'ReactJS',
        tags: ['Frontend', 'JavaScript'],
        body: 'TODO',
    },
    {
        label: 'Ollama',
        key: 'ollama',
        name: 'Ollama',
        tags: ['AI', 'Natural Language Processing', 'Productivity'],
        body: 'TODO',
    },
    {
        label: 'Aider.chat',
        key: 'aider_chat',
        name: 'Aider.chat',
        tags: ['AI', 'Productivity'],
        body: 'TODO',
    },
    {
        label: 'Terraform',
        key: 'terraform',
        name: 'Terraform',
        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: 'TODO',
    },
    {
        label: 'CDK8s',
        key: 'cdk8s',
        name: 'CDK8s',
        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: 'TODO',
    },
    {
        label: 'ArgoCD',
        key: 'argo_cd',
        name: 'ArgoCD',
        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: 'TODO',
    },
    {
        label: 'Github Actions',
        key: 'github_actions',
        name: 'Github Actions',
        tags: ['CI/CD', 'DevOps'],
        body: 'TODO',
    },
    {
        label: 'Langchain',
        key: 'langchain',
        name: 'Langchain',
        tags: ['AI', 'Productivity', 'Automation'],
        body: 'TODO',
    },
    {
        label: 'GraphQL',
        key: 'graphql',
        name: 'GraphQL',
        tags: ['Programming Languages', 'Databases'],
        body: 'TODO',
    },
    {
        label: 'Apollo',
        key: 'apollo',
        name: 'Apollo',
        tags: ['Frontend', 'JavaScript', 'Databases'],
        body: 'TODO',
    },

    {
        label: 'Redis',
        key: 'redis',
        name: 'Redis',
        tags: ['Databases'],
        body: 'TODO',
    },
    {
        label: 'RAG',
        key: 'rag',
        name: 'RAG',
        tags: ['AI', 'Automation'],
        body: 'TODO',
    },
    {
        label: 'Data Analytics',
        key: 'data_analytics',
        name: 'Data Analytics',
        tags: ['Analytics'],
        body: 'TODO',
    },
    {
        label: 'Probabilistic Web Design',
        key: 'probabilistic_web_design',
        name: 'Probabilistic Web Design',
        tags: ['Analytics', 'Frontend', 'Reinforcement Learning'],
        body: 'TODO',
    },
    {
        label: 'OpenAI API',
        key: 'openai_api',
        name: 'OpenAI API',
        tags: ['AI', 'Productivity', 'Automation'],
        body: 'TODO',
    },
];
