import React, {useRef} from 'react';
import '../app.css';
import {Radio, Tabs} from 'antd';
import type {RadioChangeEvent, TabsProps} from 'antd';
import {
    CenteredIframe,
    NoMarginP,
    PadLeft20px,
    PadLeft2perc,
    PadRight8perc,
    NoMarginH3,
    NoMarginH4,
    CenteredImg,
    Centered,
    BoldSpan,
} from '../styled';
import lecture_1 from './resources/ml_course/lecture_1_The_Big_Picture.pdf';
import {Link} from 'react-scroll';
import channel_image from './images/real_channel_vs_in_silico_model.PNG';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>The Big Picture</h2>
            <h3> Outline</h3>

            <ol>
                <li>
                    <Link to="a-word-of-caution" smooth={true}>
                        A Word of Caution
                    </Link>
                </li>
                <li>
                    <Link to="sources" smooth={true}>
                        Sources
                    </Link>
                </li>

                <li>
                    <Link to="the-unbridled-power-of-machine-learning" smooth={true}>
                        The Unbridled Power of Machine Learning
                    </Link>
                </li>

                <li>
                    <Link to="defining-machine-learning" smooth={true}>
                        Defining Machine Learning as Task-Performance-Experience
                    </Link>
                </li>

                <li>
                    <Link to="supervised-vs-unsupervised" smooth={true}>
                        Supervised vs Unsupervised Learning
                    </Link>
                </li>

                <li>
                    <Link to="generalization" smooth={true}>
                        Generalization
                    </Link>
                </li>

                <li>
                    <Link to="partition-data" smooth={true}>
                        Partitioning Data, Train-Test Split
                    </Link>
                </li>

                <li>
                    <Link to="data-leakage" smooth={true}>
                        Data Leakage
                    </Link>
                </li>

                <li>
                    <Link to="learning-curves" smooth={true}>
                        Learning Curves, Underfitting, Overfitting, Bias-Variance Tradeoff
                    </Link>
                </li>

                <li>
                    <Link to="data-augmentation" smooth={true}>
                        Data Augmentation
                    </Link>
                </li>

                <li>
                    <Link to="parameters-and-hyperparameters" smooth={true}>
                        Parameters and Hyperparameters
                    </Link>
                </li>

                <li>
                    <Link to="partitioning-data-2" smooth={true}>
                        Partitioning Data II: Train-Validate-Test Split
                    </Link>
                </li>

                <li>
                    <Link to="k-folds" smooth={true}>
                        K-Folds Cross Validation
                    </Link>
                </li>

                <li>
                    <Link to="summary" smooth={true}>
                        Summary
                    </Link>
                </li>

                <li>
                    <Link to="closing-thoughts" smooth={true}>
                        Closing Thoughts
                    </Link>
                </li>

            </ol>

            <br />

            <div id="a-word-of-caution">
                <h3>A Word of Caution</h3>

                <p>
                    Lately "artificial intelligence" and "machine learning" are popular terms
                    attracting a lot of time, money, and attention. I'd love to tell you that it's
                    not all hype, that machine learning will solve all of you and your customer's
                    problems forever, creating solutions that are performative and scale well, are
                    low cost, low maintenance, and easy to explain to your investors and your team.
                    I'd like to tell you that. The truth is that these techniques are often more
                    trouble than they're worth. Going through the effort to deploy them might not be
                    in your best interest. Take my advice. Stop here.
                </p>

                <p>
                    If you're an executive, or a consultant, or in operations, you probably don't
                    need machine learning. You do need to know what's going on in your organization.
                    You don't need data science, you just need data. Pick up the phone and call who
                    you need to call. Talk to workers, talk to fulfillment. Find the problems.
                    Direct your attention torwards the bottleneck. Fix the bottleneck. Rinse and
                    repeat.
                </p>

                <p>
                    If you're a data analyst, you probably don't need machine learning. Basic
                    statistics like mean, median, mode, first quartile, third quartile. These
                    metrics can already be powerful and show you (and less mathy types) plenty of
                    insights into your data that you can use to direct attention within your
                    organization.
                </p>

                <p>
                    If you don't have a large amount of (preferably good quality) data, even a fancy
                    machine learning model won't be able to show you anything meaningful. Your
                    efforts are far better spent on increasing the quantity and quality of the data
                    you have access to, rather than using a fancy model on a paucity of data. Please
                    read this very relevant post,
                    <a href="http://incompleteideas.net/IncIdeas/BitterLesson.html">
                        {` The Bitter Lesson`}
                    </a>
                    , by Dr. Richard Sutton, a titan of machine learning. The venerable
                    <a href="https://en.wikipedia.org/wiki/Andrew_Ng">{` Dr. Andrew Ng `}</a>
                    also stresses the importance of focusing on the amount of data you have access
                    to, before turning to new methods in modeling. This is why I prefer the term
                    "data driven modeling" to "machine learning", since it stresses the primacy of
                    data in these techniques.
                </p>

                <p>
                    If you are a CTO, a manager, a technical lead, an architect, or an independent
                    contributor, and you think that machine learning can shrink your complexity
                    while raising performance, it probably won't. Deploying machine learning
                    solutions to production doesn't reduce complexity. It shifts it from the
                    application layer to the infrastructure layer, reduces transparency in the
                    system, and ties performance improvements directly to increased costs. If you
                    think it's better to introduce a massive amount of new development and
                    infrastructure code to your codebase, no, it's probably not. Remember: "No code
                    is better than no code".
                </p>

                <h4>Don't say I didn't warn you!</h4>
            </div>

            <div id="sources">
                <NoMarginH3>Sources / Extra Resources</NoMarginH3>
                <p>
                    If you'd like to go straight to the source, these are the resources that I would
                    recommend. Each lesson will also contain a list of relevant resources. I would
                    like to express my deepest thanks to the authors. Their teaching has been
                    invaluable.
                </p>
                <ul>
                    <li>Mitchell, T. (1997). Machine Learning. McGraw Hill.</li>
                    <li>
                        Ng, A. (2017). Machine Learning. Coursera online course, Stanford
                        University.
                    </li>

                    <li>
                        Sadun, L. (2007). Applied Linear Algebra: The Decoupling Principle. American
                        Mathematical Society.
                    </li>

                    <li>
                        Sutton, R. S., & Barto, A. G. (2018). Reinforcement learning: An
                        introduction (2nd ed.). The MIT Press.
                    </li>
                </ul>
            </div>

            <br />

            <div id="the-unbridled-power-of-machine-learning">
                <NoMarginH3>2. The Unbridled Power of Machine Learning</NoMarginH3>
                <PadLeft20px>
                    <PadLeft20px>
                        <NoMarginH4>Why Data Driven Models Will Take Over the World</NoMarginH4>
                    </PadLeft20px>
                </PadLeft20px>
            </div>
            <br />

            <div id="defining-machine-learning">
                <NoMarginH3>3. Defining Machine Learning as Task-Performance-Experience</NoMarginH3>
                <p>
                    "...a machine learns with respect to a particular task T, performance metric P,
                    and type of experience E, if the system reliably improves its performance P at
                    task T, following experience E." (
                    <a href="http://www.cs.cmu.edu/~tom/files/MachineLearningTomMitchell.pdf">
                        Mitchell 1997
                    </a>
                    {', '}
                    <a href="https://www.cs.cmu.edu/~tom/pubs/MachineLearning.pdf">2006</a>). (
                    <a href="http://www.cs.cmu.edu/~tom>Michell">Dr. Tom Mitchell</a> is a force of
                    nature in the field of machine learning, and his task, performance, experience
                    formalism is a concise, yet powerful way to approach the topic.)
                </p>
                <b>
                    <Centered>Task: What we want the model to do</Centered>
                    <Centered>
                        Performance: How we measure how well the model does what we want it to do
                    </Centered>
                    <Centered>Experience: How we show the model what we want it to do</Centered>
                </b>
                <br />
                <NoMarginP>
                    These "machines" are input-output machines, A.K.A. functions! They can be
                    elementary functions, like addition or multiplication, or they can be
                    compositions of these basic building blocks.
                </NoMarginP>
                For example:
                <ol>
                    <li>Linear maps / linear transforms / affine transforms</li>
                    <li>Polynomials</li>
                    <li>Exponentials</li>
                    <li>Decision Trees</li>
                    <li>Neural Networks</li>
                    <li>And many more!</li>
                </ol>
                <p>
                    Our goal is to compose these functions to match a process that happens in the
                    real world. We call this "the channel". If we can model the channel correctly,
                    we can predict useful things, such as how much a house will sell for, or what
                    the weather will be like next week. The miracle of machine learning is that,
                    given enough data, we can approximate complex, real world phenomena! This
                    approximation is our model, and we say that we model the channel.
                </p>
                <CenteredImg src={channel_image} />
            </div>

            <div id="supervised-vs-unsupervised">
                <NoMarginH3>4. Supervised vs Unsupervised Learning</NoMarginH3>
            </div>

            <div id="generalization">
                <NoMarginH3>5. Generalization</NoMarginH3>
            </div>

            <div id="partition-data">
                <NoMarginH3>6. Partitioning Data, Train-Test Split</NoMarginH3>
            </div>

            <div id="data-leakage">
                <NoMarginH3>7. Data Leakage</NoMarginH3>
            </div>

            <div id="learning-curves">
                <NoMarginH3>
                    8. Learning Curves, Underfitting, Overfitting, Bias-Variance Tradeoff
                </NoMarginH3>
            </div>

            <div id="data-augmentation">
                <NoMarginH3>9. Data Augmentation</NoMarginH3>
            </div>

            <div id="parameters-and-hyperparameters">
                <NoMarginH3>10. Parameters and Hyperparameters</NoMarginH3>
            </div>

            <div id="partitioning-data-2">
                <NoMarginH3>11. Partitioning Data II: Train-Validate-Test Split</NoMarginH3>
            </div>

            <div id="k-folds">
                <NoMarginH3>12. K-Folds Cross Validation</NoMarginH3>
            </div>

            <div id="summary">
                <NoMarginH3>13. Summary</NoMarginH3>
            </div>

            <div id="closing-thoughts">
                <NoMarginH3>14. Closing Thoughts</NoMarginH3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
