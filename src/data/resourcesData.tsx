import React from 'react';
import YouTubeEmbed from '../components/YoutubeEmbed';

export type Resource = {
    label: string;
    key: string;
    name: string;
    tags: string[];
    body: React.ReactNode;
    lastUpdated: null | Date;
};

export const resourcesData: Resource[] = [
    {
        label: 'ChatGPT',
        key: 'chatgpt',
        name: 'ChatGPT',
        tags: ['AI', 'Natural Language Processing', 'Productivity'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Python',
        key: 'python',
        name: 'Python',
        tags: ['Programming Languages'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'TypeScript',
        key: 'typescript',
        name: 'TypeScript',
        tags: ['Programming Languages', 'Frontend', 'JavaScript'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'SQL',
        key: 'sql',
        name: 'SQL',
        tags: ['Programming Languages', 'Databases'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Docker',
        key: 'docker',
        name: 'Docker',
        tags: ['Containerization', 'Cloud', 'DevOps'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Kubernetes',
        key: 'kubernetes',
        name: 'Kubernetes',
        tags: ['DevOps', 'Cloud', 'Kubernetes'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Harbor',
        key: 'harbor',
        name: 'Harbor',
        tags: ['DevOps', 'Containerization'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'AWS EC2',
        key: 'aws_ec2',
        name: 'AWS EC2',
        tags: ['AWS', 'Cloud', 'DevOps'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'AWS ECR',
        key: 'aws_ecr',
        name: 'AWS ECR',
        tags: ['AWS', 'Cloud', 'Container Registry', 'DevOps'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'AWS EKS',
        key: 'aws_eks',
        name: 'Amazon Elastic Kubernetes Service',
        tags: ['AWS', 'Cloud', 'DevOps', 'Kubernetes'],
        body: (
            <>
                <YouTubeEmbed videoUrl={'https://www.youtube.com/watch?v=p6xDCz00TxU'} />
                <br />
                <br />
                <YouTubeEmbed videoUrl={'https://www.youtube.com/watch?v=wyad99QMKtc'} />
                <br />
                <br />
                <a href="https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html">
                    Amazon EKS Guide
                </a>
                <br />
                <br />
                <a href="https://docs.aws.amazon.com/eks/latest/userguide/ml-get-started.html">
                    Amazon ML on EKS Guide
                </a>
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        label: 'Git',
        key: 'git',
        name: 'Git',
        tags: ['DevOps', 'Version Control', 'Productivity'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Neovim',
        key: 'neovim',
        name: 'Neovim',
        tags: ['Productivity'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'ReactJS',
        key: 'react',
        name: 'ReactJS',
        tags: ['Frontend', 'JavaScript'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Ollama',
        key: 'ollama',
        name: 'Ollama',
        tags: ['AI', 'Natural Language Processing', 'Productivity'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Aider.chat',
        key: 'aider_chat',
        name: 'Aider.chat',
        tags: ['AI', 'Productivity'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Terraform',
        key: 'terraform',
        name: 'Terraform',
        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'CDK8s',
        key: 'cdk8s',
        name: 'CDK8s',
        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'ArgoCD',
        key: 'argo_cd',
        name: 'ArgoCD',
        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Github Actions',
        key: 'github_actions',
        name: 'Github Actions',
        tags: ['CI/CD', 'DevOps'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Langchain',
        key: 'langchain',
        name: 'Langchain',
        tags: ['AI', 'Productivity', 'Automation'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'GraphQL',
        key: 'graphql',
        name: 'GraphQL',
        tags: ['Programming Languages', 'Databases'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Apollo',
        key: 'apollo',
        name: 'Apollo',
        tags: ['Frontend', 'JavaScript', 'Databases'],
        body: 'TODO',
        lastUpdated: null,
    },

    {
        label: 'Redis',
        key: 'redis',
        name: 'Redis',
        tags: ['Databases'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'RAG',
        key: 'rag',
        name: 'RAG',
        tags: ['AI', 'Automation'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Data Analytics',
        key: 'data_analytics',
        name: 'Data Analytics',
        tags: ['Analytics'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Probabilistic Web Design',
        key: 'probabilistic_web_design',
        name: 'Probabilistic Web Design',
        tags: ['Analytics', 'Frontend', 'Reinforcement Learning'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'OpenAI API',
        key: 'openai_api',
        name: 'OpenAI API',
        tags: ['AI', 'Productivity', 'Automation'],
        body: 'TODO',
        lastUpdated: null,
    },

    {
        label: 'Grafana',
        key: 'grafana',
        name: 'OpenAI API',
        tags: ['observability'],
        body: 'TODO',
        lastUpdated: null,
    },

    {
        label: 'AWS CloudWatch',
        key: 'aws_cloudwatch',
        name: 'AWS CloudWatch',
        tags: ['AWS', 'cloud', 'observability'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Prometheus',
        key: 'prometheus',
        name: 'Prometheus',
        tags: ['observability'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'K9s',
        key: 'k9s',
        name: 'K9s',
        tags: ['kubernetes', 'observability'],
        body: 'TODO',
        lastUpdated: null,
    },

    {
        label: 'Nginx',
        key: 'nginx',
        name: 'Nginx',
        tags: ['networking'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'PySpark',
        key: 'pyspark',
        name: 'PySpark',
        tags: ['Analytics', 'ETL'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Cython',
        key: 'cython',
        name: 'cython',
        tags: ['Programming Languages'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        label: 'Symbolic Regression',
        key: 'symbolic_regression',
        name: 'Symbolic Regression',
        tags: ['Models'],
        body: 'TODO',
        lastUpdated: null,
    },
];
