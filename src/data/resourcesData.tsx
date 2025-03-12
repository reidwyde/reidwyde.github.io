import React from 'react';
import YouTubeEmbed from '../components/YoutubeEmbed';

export type Resource = {
    label: string;
    key: string;
    name: string;
    tags: string[];
    body: React.ReactNode;
    lastUpdated: null | Date;
    byline: string;
};

const resourcesData1: Omit<Resource, 'byline'>[] = [
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

const resourcesBylines = [
    {
        name: 'ChatGPT',
        byline: 'A conversational AI model by OpenAI that generates human-like responses in natural language based on user inputs.',
    },
    {
        name: 'Python',
        byline: 'A high-level, versatile programming language known for its readability and use in web development, data science, automation, and machine learning.',
    },
    {
        name: 'TypeScript',
        byline: 'A statically typed superset of JavaScript that compiles to plain JavaScript, offering improved tooling and error checking for large-scale applications.',
    },
    {
        name: 'SQL',
        byline: 'A domain-specific language used for managing and querying relational databases with structured query language.',
    },
    {
        name: 'Docker',
        byline: 'A platform for developing, shipping, and running applications in containers, ensuring consistency across multiple environments.',
    },
    {
        name: 'Kubernetes',
        byline: 'An open-source system for automating the deployment, scaling, and management of containerized applications.',
    },
    {
        name: 'Harbor',
        byline: 'An open-source container registry that stores and manages Docker images, providing security and access control.',
    },
    {
        name: 'AWS EC2',
        byline: "Amazon Web Services' Elastic Compute Cloud, offering scalable virtual servers for running applications in the cloud.",
    },
    {
        name: 'AWS ECR',
        byline: 'Amazon Elastic Container Registry, a fully managed Docker container registry for storing, managing, and deploying container images.',
    },
    {
        name: 'Amazon Elastic Kubernetes Service',
        byline: 'Amazon Elastic Kubernetes Service, a managed Kubernetes service that simplifies deploying, managing, and scaling Kubernetes applications on AWS.',
    },
    {
        name: 'Git',
        byline: 'A distributed version control system that tracks changes to source code, enabling collaboration among developers.',
    },
    {
        name: 'Neovim',
        byline: 'An open-source, extensible text editor built as an improved version of Vim, designed for modern development workflows.',
    },
    {
        name: 'ReactJS',
        byline: 'A JavaScript library for building user interfaces, especially for single-page applications, with a component-based architecture.',
    },
    {
        name: 'Ollama',
        byline: 'An AI framework that enables the deployment and interaction with large language models (LLMs) locally or on a server.',
    },
    {
        name: 'Aider.chat',
        byline: 'An AI-powered code assistant for developers that helps with debugging, writing, and optimizing code in real time.',
    },
    {
        name: 'Terraform',
        byline: 'An infrastructure-as-code tool for provisioning and managing cloud resources through declarative configuration files.',
    },
    {
        name: 'CDK8s',
        byline: 'Cloud Development Kit for Kubernetes, a framework for defining Kubernetes applications using familiar programming languages.',
    },
    {
        name: 'ArgoCD',
        byline: 'A declarative, GitOps continuous delivery tool for Kubernetes, enabling automated deployment and management of applications.',
    },
    {
        name: 'Github Actions',
        byline: 'An automation tool that integrates with GitHub repositories to run workflows for continuous integration and delivery (CI/CD).',
    },
    {
        name: 'Langchain',
        byline: 'A framework for developing applications powered by language models, enabling easy orchestration of LLMs with external tools.',
    },
    {
        name: 'GraphQL',
        byline: 'A query language for APIs and runtime for executing those queries, offering efficient, flexible, and real-time data fetching.',
    },
    {
        name: 'Apollo',
        byline: 'A GraphQL platform providing a complete ecosystem for building, querying, and managing GraphQL APIs.',
    },
    {
        name: 'Redis',
        byline: 'An in-memory key-value store used as a database, cache, and message broker, optimized for high-performance operations.',
    },
    {
        name: 'RAG',
        byline: 'Retrieval-Augmented Generation, a machine learning method that combines generative models with external knowledge retrieval for better responses.',
    },
    {
        name: 'Data Analytics',
        byline: 'The process of inspecting, cleaning, transforming, and modeling data to discover useful information for decision-making.',
    },
    {
        name: 'Probabilistic Web Design',
        byline: 'A design approach based on probabilistic models, used to optimize user interfaces based on user behavior and data.',
    },
    {
        name: 'OpenAI API',
        byline: 'A set of APIs provided by OpenAI, allowing developers to integrate advanced AI models like GPT into their applications.',
    },
    {
        name: 'Grafana',
        byline: 'An open-source platform for monitoring and visualizing time-series data, typically used for infrastructure and application monitoring.',
    },
    {
        name: 'AWS CloudWatch',
        byline: 'A monitoring and observability service for AWS cloud resources and applications, offering metrics, logs, and alarms.',
    },
    {
        name: 'Prometheus',
        byline: 'An open-source monitoring system and time-series database designed for reliability and scalability in cloud-native environments.',
    },
    {
        name: 'K9s',
        byline: 'A terminal-based UI for interacting with Kubernetes clusters, providing a fast and efficient way to manage Kubernetes resources.',
    },
    {
        name: 'Nginx',
        byline: 'A high-performance web server and reverse proxy server used to serve static content, handle load balancing, and reverse proxy for web applications.',
    },
    {
        name: 'PySpark',
        byline: 'A Python API for Apache Spark, enabling big data processing and analytics on distributed computing systems.',
    },
    {
        name: 'Cython',
        byline: 'A programming language that makes it easy to write C extensions for Python, improving performance for computationally intensive tasks.',
    },
    {
        name: 'Symbolic Regression',
        byline: 'A machine learning technique that searches for mathematical equations or models that best describe a dataset, typically used for modeling and optimization.',
    },
];

export const resourcesData: Resource[] = resourcesData1.map((rd) => {
    const byline = resourcesBylines.filter((rbl) => rbl.name === rd.name)[0]?.byline ?? 'N/A';

    // if (byline == 'N/A') {
    //     console.log(`issue with byline for`);
    //     console.log(rd);
    // }

    return {
        ...rd,
        byline,
    };
});
