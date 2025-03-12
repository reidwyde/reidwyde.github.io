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

export const resourcesData = [
    {
        name: 'ChatGPT',
        label: 'ChatGPT',
        key: 'chatGPT',

        tags: ['AI', 'Natural Language Processing', 'Productivity'],
        body: (
            <>
                <a href="https://platform.openai.com/docs/guides/chat">ChatGPT Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Python',
        label: 'Python',
        key: 'python',

        tags: ['Programming Languages'],
        body: (
            <>
                <a href="https://docs.python.org/3/">Python Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'TypeScript',
        label: 'TypeScript',
        key: 'typeScript',

        tags: ['Programming Languages', 'Frontend', 'JavaScript'],
        body: (
            <>
                <a href="https://www.typescriptlang.org/docs/">TypeScript Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'SQL',
        label: 'SQL',
        key: 'sql',

        tags: ['Programming Languages', 'Databases'],
        body: (
            <>
                <a href="https://www.w3schools.com/sql/">SQL Tutorial</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Docker',
        label: 'Docker',
        key: 'docker',

        tags: ['Containerization', 'Cloud', 'DevOps'],
        body: (
            <>
                <a href="https://docs.docker.com/">Docker Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Kubernetes',
        label: 'Kubernetes',
        key: 'kubernetes',

        tags: ['DevOps', 'Cloud', 'Kubernetes'],
        body: (
            <>
                <a href="https://kubernetes.io/docs/">Kubernetes Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Harbor',
        label: 'Harbor',
        key: 'harbor',

        tags: ['DevOps', 'Containerization'],
        body: (
            <>
                <a href="https://goharbor.io/docs/">Harbor Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'AWS EC2',
        label: 'AWS EC2',
        key: 'awsEc2',

        tags: ['AWS', 'Cloud', 'DevOps'],
        body: (
            <>
                <a href="https://docs.aws.amazon.com/ec2/">AWS EC2 Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'AWS ECR',
        label: 'AWS ECR',
        key: 'awsEcr',

        tags: ['AWS', 'Cloud', 'Container Registry', 'DevOps'],
        body: (
            <>
                <a href="https://docs.aws.amazon.com/ecr/">AWS ECR Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        label: 'AWS EKS',
        key: 'aws_eks',
        name: 'Amazon Elastic Kubernetes Service',
        tags: ['AWS', 'Cloud', 'DevOps', 'Kubernetes'],
        body: (
            <>
                <a href="https://docs.aws.amazon.com/eks/">Amazon EKS Documentation</a>
                <br />
                <br />
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
        name: 'Git',
        label: 'Git',
        key: 'git',
        tags: ['DevOps', 'Version Control', 'Productivity'],
        body: (
            <>
                <a href="https://git-scm.com/doc">Git Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Neovim',
        label: 'Neovim',
        key: 'neovim',
        tags: ['Productivity'],
        body: (
            <>
                <a href="https://neovim.io/">Neovim Official Website</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'ReactJS',
        label: 'ReactJS',
        key: 'reactJS',
        tags: ['Frontend', 'JavaScript'],
        body: (
            <>
                <a href="https://reactjs.org/docs/getting-started.html">ReactJS Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Ollama',
        label: 'Ollama',
        key: 'ollama',
        tags: ['AI', 'Natural Language Processing', 'Productivity'],
        body: (
            <>
                <a href="https://ollama.com/">Ollama Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Aider.chat',
        label: 'Aider.chat',
        key: 'aiderChat',

        tags: ['AI', 'Productivity'],
        body: (
            <>
                <a href="https://aider.chat">Aider.chat</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Terraform',
        label: 'Terraform',
        key: 'terraform',

        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: (
            <>
                <a href="https://www.terraform.io/docs">Terraform Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'CDK8s',
        label: 'CDK8s',
        key: 'cdK8s',

        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: (
            <>
                <a href="https://cdk8s.io/docs/">CDK8s Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'ArgoCD',
        label: 'ArgoCD',
        key: 'argoCD',

        tags: ['CI/CD', 'DevOps', 'Kubernetes'],
        body: (
            <>
                <a href="https://argo-cd.readthedocs.io/en/stable/">ArgoCD Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Github Actions',
        label: 'Github Actions',
        key: 'githubActions',

        tags: ['CI/CD', 'DevOps'],
        body: (
            <>
                <a href="https://docs.github.com/en/actions">GitHub Actions Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Langchain',
        label: 'Langchain',
        key: 'langchain',

        tags: ['AI', 'Productivity', 'Automation'],
        body: (
            <>
                <a href="https://langchain.com/docs/">Langchain Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'GraphQL',
        label: 'GraphQL',
        key: 'graphQL',

        tags: ['Programming Languages', 'Databases'],
        body: (
            <>
                <a href="https://graphql.org/learn/">GraphQL Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Apollo',
        label: 'Apollo',
        key: 'apollo',

        tags: ['Frontend', 'JavaScript', 'Databases'],

        body: (
            <>
                <a href="https://www.apollographql.com/docs/">Apollo Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Redis',
        label: 'Redis',
        key: 'redis',

        tags: ['Databases'],
        body: (
            <>
                <a href="https://redis.io/docs/">Redis Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'RAG',
        label: 'RAG',
        key: 'rag',

        tags: ['AI', 'Automation'],
        body: (
            <>
                <YouTubeEmbed videoUrl="https://www.youtube.com/watch?v=hAdEuDBN57g" />

                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Data Analytics',
        label: 'Data Analytics',
        key: 'dataAnalytics',

        tags: ['Analytics'],
        body: 'TODO',
        lastUpdated: null,
    },
    {
        name: 'Probabilistic Web Design',
        label: 'Probabilistic Web Design',
        key: 'probabilisticWebDesign',

        tags: ['Analytics', 'Frontend', 'Reinforcement Learning'],
        body: (
            <>
                <a href="https://stevehanov.ca/blog/index.php?id=132">
                    20 lines of code that will beat A/B testing every time
                </a>
                <br />
                <br />
                <a href="https://news.ycombinator.com/item?id=4040022">Relevant Hacker News Post</a>
                <br />
                <br />
                <a href="https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf">
                    Sutton and Barto textbook on Reinforcement Learning (the relevant section is
                    Chatper 2 Multi-arm Bandits)
                </a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'OpenAI API',
        label: 'OpenAI API',
        key: 'openAiApi',

        tags: ['AI', 'Productivity', 'Automation'],
        body: (
            <>
                <a href="https://platform.openai.com/docs">OpenAI API Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Grafana',
        label: 'Grafana',
        key: 'grafana',

        tags: ['observability'],
        body: (
            <>
                <a href="https://grafana.com/docs/">Grafana Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'AWS CloudWatch',
        label: 'AWS CloudWatch',
        key: 'awsCloudWatch',

        tags: ['AWS', 'cloud', 'observability'],
        body: (
            <>
                <a href="https://docs.aws.amazon.com/cloudwatch/">AWS CloudWatch Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Prometheus',
        label: 'Prometheus',
        key: 'prometheus',

        tags: ['observability'],
        body: (
            <>
                <a href="https://prometheus.io/docs/">Prometheus Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'K9s',
        label: 'K9s',
        key: 'k9s',

        tags: ['kubernetes', 'observability'],
        body: (
            <>
                <a href="https://k9scli.io/">K9s Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Nginx',
        label: 'Nginx',
        key: 'nginx',

        tags: ['networking'],
        body: (
            <>
                <a href="https://nginx.org/en/docs/">Nginx Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'PySpark',
        label: 'PySpark',
        key: 'pySpark',
        tags: ['Analytics', 'ETL'],

        body: (
            <>
                <a href="https://spark.apache.org/docs/latest/api/python/">PySpark Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Cython',
        label: 'Cython',
        key: 'cython',

        tags: ['Programming Languages'],
        body: (
            <>
                <a href="https://cython.readthedocs.io/en/latest/">Cython Documentation</a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
    {
        name: 'Symbolic Regression',
        label: 'Symbolic Regression',
        key: 'symbolicRegression',

        tags: ['Models'],
        body: (
            <>
                <a href="https://en.wikipedia.org/wiki/Symbolic_regression">
                    Symbolic Regression Wikipedia
                </a>
                <br />
                <br />
            </>
        ),
        lastUpdated: new Date('3-11-25'),
    },
];

// export const resourcesDataWithTags: Resource[] = [
//     {
//         label: 'ChatGPT',
//         key: 'chatgpt',
//         name: 'ChatGPT',
//         tags: ['AI', 'Natural Language Processing', 'Productivity'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Python',
//         key: 'python',
//         name: 'Python',
//         tags: ['Programming Languages'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'TypeScript',
//         key: 'typescript',
//         name: 'TypeScript',
//         tags: ['Programming Languages', 'Frontend', 'JavaScript'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'SQL',
//         key: 'sql',
//         name: 'SQL',
//         tags: ['Programming Languages', 'Databases'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Docker',
//         key: 'docker',
//         name: 'Docker',
//         tags: ['Containerization', 'Cloud', 'DevOps'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Kubernetes',
//         key: 'kubernetes',
//         name: 'Kubernetes',
//         tags: ['DevOps', 'Cloud', 'Kubernetes'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Harbor',
//         key: 'harbor',
//         name: 'Harbor',
//         tags: ['DevOps', 'Containerization'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'AWS EC2',
//         key: 'aws_ec2',
//         name: 'AWS EC2',
//         tags: ['AWS', 'Cloud', 'DevOps'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'AWS ECR',
//         key: 'aws_ecr',
//         name: 'AWS ECR',
//         tags: ['AWS', 'Cloud', 'Container Registry', 'DevOps'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'AWS EKS',
//         key: 'aws_eks',
//         name: 'Amazon Elastic Kubernetes Service',
//         tags: ['AWS', 'Cloud', 'DevOps', 'Kubernetes'],
//         body: (
//             <>
//                 <YouTubeEmbed videoUrl={'https://www.youtube.com/watch?v=p6xDCz00TxU'} />
//                 <br />
//                 <br />
//                 <YouTubeEmbed videoUrl={'https://www.youtube.com/watch?v=wyad99QMKtc'} />
//                 <br />
//                 <br />
//                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html">
//                     Amazon EKS Guide
//                 </a>
//                 <br />
//                 <br />
//                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/ml-get-started.html">
//                     Amazon ML on EKS Guide
//                 </a>
//             </>
//         ),
//         lastUpdated: new Date('3-11-25'),
//     },
//     {
//         label: 'Git',
//         key: 'git',
//         name: 'Git',
//         tags: ['DevOps', 'Version Control', 'Productivity'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Neovim',
//         key: 'neovim',
//         name: 'Neovim',
//         tags: ['Productivity'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'ReactJS',
//         key: 'react',
//         name: 'ReactJS',
//         tags: ['Frontend', 'JavaScript'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Ollama',
//         key: 'ollama',
//         name: 'Ollama',
//         tags: ['AI', 'Natural Language Processing', 'Productivity'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Aider.chat',
//         key: 'aider_chat',
//         name: 'Aider.chat',
//         tags: ['AI', 'Productivity'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Terraform',
//         key: 'terraform',
//         name: 'Terraform',
//         tags: ['CI/CD', 'DevOps', 'Kubernetes'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'CDK8s',
//         key: 'cdk8s',
//         name: 'CDK8s',
//         tags: ['CI/CD', 'DevOps', 'Kubernetes'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'ArgoCD',
//         key: 'argo_cd',
//         name: 'ArgoCD',
//         tags: ['CI/CD', 'DevOps', 'Kubernetes'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Github Actions',
//         key: 'github_actions',
//         name: 'Github Actions',
//         tags: ['CI/CD', 'DevOps'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Langchain',
//         key: 'langchain',
//         name: 'Langchain',
//         tags: ['AI', 'Productivity', 'Automation'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'GraphQL',
//         key: 'graphql',
//         name: 'GraphQL',
//         tags: ['Programming Languages', 'Databases'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Apollo',
//         key: 'apollo',
//         name: 'Apollo',
//         tags: ['Frontend', 'JavaScript', 'Databases'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//
//     {
//         label: 'Redis',
//         key: 'redis',
//         name: 'Redis',
//         tags: ['Databases'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'RAG',
//         key: 'rag',
//         name: 'RAG',
//         tags: ['AI', 'Automation'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Data Analytics',
//         key: 'data_analytics',
//         name: 'Data Analytics',
//         tags: ['Analytics'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Probabilistic Web Design',
//         key: 'probabilistic_web_design',
//         name: 'Probabilistic Web Design',
//         tags: ['Analytics', 'Frontend', 'Reinforcement Learning'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'OpenAI API',
//         key: 'openai_api',
//         name: 'OpenAI API',
//         tags: ['AI', 'Productivity', 'Automation'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//
//     {
//         label: 'Grafana',
//         key: 'grafana',
//         name: 'OpenAI API',
//         tags: ['observability'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//
//     {
//         label: 'AWS CloudWatch',
//         key: 'aws_cloudwatch',
//         name: 'AWS CloudWatch',
//         tags: ['AWS', 'cloud', 'observability'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Prometheus',
//         key: 'prometheus',
//         name: 'Prometheus',
//         tags: ['observability'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'K9s',
//         key: 'k9s',
//         name: 'K9s',
//         tags: ['kubernetes', 'observability'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//
//     {
//         label: 'Nginx',
//         key: 'nginx',
//         name: 'Nginx',
//         tags: ['networking'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'PySpark',
//         key: 'pyspark',
//         name: 'PySpark',
//         tags: ['Analytics', 'ETL'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Cython',
//         key: 'cython',
//         name: 'cython',
//         tags: ['Programming Languages'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
//     {
//         label: 'Symbolic Regression',
//         key: 'symbolic_regression',
//         name: 'Symbolic Regression',
//         tags: ['Models'],
//         body: 'TODO',
//         lastUpdated: null,
//     },
// ];
