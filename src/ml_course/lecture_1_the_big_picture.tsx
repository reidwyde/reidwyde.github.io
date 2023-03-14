import React, {useRef} from 'react';
import '../app.css';
import {Radio, Tabs} from 'antd';
import type {RadioChangeEvent, TabsProps} from 'antd';
import {CenteredIframe, NoMarginP, PadLeft20px} from '../styled';
import lecture_1 from './resources/ml_course/lecture_1_The_Big_Picture.pdf';
import {Link} from 'react-scroll';

const content = (
    <PadLeft20px>
        <h2>Lesson 1: The Big Picture</h2>
        <h3>Outline</h3>

        <ol>
            <li>
                <Link to="please-stop-here" smooth={true}>
                    Please Stop Here!
                </Link>
            </li>

            <li>Defining Machine Learning as Task-Performance-Experience</li>
            <li>Supervised vs Unsupervised Learning</li>

            <li>Generalization</li>

            <li>Partitioning Data, Train-Test Split</li>

            <li>Data Leakage</li>

            <li>Learning Curves, Underfitting, Overfitting, Bias-Variance Tradeoff</li>

            <li>Data Augmentation</li>

            <li>Parameters and Hyperparameters</li>

            <li>Partitioning Data II: Train-Validate-Test Split</li>

            <li>K-Folds Cross Validation</li>

            <li>Summary</li>

            <li>Closing Thoughts</li>

            <li>Extra Resources</li>
        </ol>

        <br />

        <div id="please-stop-here">
            <h3>Please Stop Here!</h3>

            <p>
                Lately "artificial intelligence" and "machine learning" are popular terms attracting
                a lot of time, money, and attention. Take my advice. Stop here.
            </p>

            <p>
                Please, stop here. If you're an executive, or a consultant, or in operations, you
                probably don't need machine learning. You do need to know what's going on in your
                organization. You don't need data science, you just need data. Pick up the phone and
                call who you need to call. Talk to workers, talk to fulfillment. Find the problems.
                Direct your attention torwards the bottleneck. Fix the bottleneck. Rinse and repeat.
            </p>

            <p>
                Please, stop here. If you're a data analyst, you probably don't need machine
                learning. Basic statistics like mean, median, mode, first quartile, third quartile.
                These metrics can already be powerful and show you (and less mathy types) plenty of
                insights into your data that you can use to direct attention within your
                organization.
            </p>

            <p>
                Please, stop here. If you have don't have a large amount of (preferably good
                quality) data, even a fancy machine learning model won't be able to show you
                anything meaningful. Your efforts are far better spent on increasing the quantity
                and quality of the data you have access to, rather than using a fancy model on a
                paucity of data. Please read this very relevant post,
                <a href="http://incompleteideas.net/IncIdeas/BitterLesson.html">
                    {` The Bitter Lesson`}
                </a>
                , by Dr. Richard S Sutton, a titan of machine learning. The venerable
                <a href="https://en.wikipedia.org/wiki/Andrew_Ng">Dr. Andrew Ng </a>
                also stresses the importance of focusing on the amount of data you have access to,
                before turning to new methods in modeling. This is why I prefer the term "data
                driven modeling" to "machine learning", since it stresses the primacy of data in
                these techniques.
            </p>

            <p></p>

            <p>Truly, no code is better than "no code".</p>

            <ol>
                <li></li>
                <li></li>
            </ol>
        </div>
    </PadLeft20px>
);

const MLCourse = () => {
    return content;
};

export default MLCourse;
