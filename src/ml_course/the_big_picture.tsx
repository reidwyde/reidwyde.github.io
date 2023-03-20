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
                    <Link to="data-driven-modeling" smooth={true}>
                        Data Driven Modeling
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
                    <Link to="self-supervised-learning" smooth={true}>
                        Self-Supervised Learning
                    </Link>
                </li>
                <li>
                    <Link to="reinforcement-learning" smooth={true}>
                        Reinfocement Learning
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
            </ol>

            <br />
            <div id="a-word-of-caution">
                <h3>Data Driven Modeling</h3>

                <p>
                    Lately "artificial intelligence" and "machine learning" are popular terms
                    attracting a lot of time, money, and attention. The venerable
                    <a href="https://en.wikipedia.org/wiki/Andrew_Ng">{` Dr. Andrew Ng `}</a>
                    stresses that "Data is food for AI." This is why I actually prefer the term
                    "data driven modeling" to "machine learning", since it stresses the primacy of
                    data in these techniques. Nevertheless, in this course, I will use both terms
                    interchangeably.
                </p>

                <p>
                    The bulk of your efforts should be spent on obtaining a large amount of the
                    highest quality data you can get your hands on. Unfortunately, this is not a
                    course on how to find data, or scrape it from the internet. The purpose of this
                    course is to teach you about some of the many fun things that you can do once
                    you have access to data. It is my hope that you will find this course to be a
                    useful guide on your data journey.
                </p>

                <p>
                    Ultimately, we hope to be able to turn data into information. That is to say, we
                    hope to turn 1s and 0s into actionable insights that you can actually use. We
                    want to let the data do the talking, to let it tell us a story. The better
                    quality our data is and the more of it we have, the more sure we can be that
                    it's telling us the truth, that it's saying something real.
                </p>

                <p>
                    If you don't have a large amount of (at least decent quality) data, even a fancy
                    machine learning model won't be able to show you anything meaningful. Further, a
                    basic model with a large amount of data will always be more useful than a
                    complex model starved for data. Please read this very relevant post,
                    <a href="http://incompleteideas.net/IncIdeas/BitterLesson.html">
                        {` The Bitter Lesson`}
                    </a>
                    , by Dr. Richard Sutton, a titan of machine learning.
                </p>

                <p>
                    Machine learning comprises several entire fields of study. This course is but a
                    brief introduction. Still, I hope that this course will make it possible for you
                    to put these techniques into practice. In this first lesson, we will cover the
                    basic techniques that any practitioner of data driven modeling should
                    understand. As we continue, we will build in complexity.
                </p>

                <p>
                    This course will stop before a discussion of deep neural networks and deep
                    learning. This course will lay the foundation for understanding the techniques
                    in that field. Once you have completed this course, I recommend you continue on
                    to my course on deep learning.
                </p>

                <NoMarginH4>A Word of Caution</NoMarginH4>
                <p>
                    Deploying machine learning solutions to production can often increase complexity
                    in your application. It requires specialized infrastructure to deal with your
                    data, reduces transparency in the system, and ties performance improvements
                    directly to your ability to get more data, which can mean increased costs.
                    Remember: "No code is better than no code".
                </p>
            </div>
            <br />

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
                <NoMarginH3>The Unbridled Power of Machine Learning</NoMarginH3>
                <p>
                    One reason why machine learning is so powerful is its ability to process vast
                    amounts of data quickly and accurately. Machine learning models can analyze
                    massive datasets, identify patterns, and make predictions with a level of
                    accuracy that is often beyond human capabilities. This has led to the
                    development of automated decision-making systems that can be used in a wide
                    range of applications, including fraud detection, marketing, and self-driving
                    cars.
                </p>

                <p>
                    However, this power also comes with risks. As machine learning algorithms become
                    increasingly sophisticated, they may begin to make decisions that are difficult
                    to understand or even impossible to explain. This can lead to a loss of
                    transparency and accountability in decision-making processes, with potentially
                    serious consequences. The increasing adoption of machine learning has the
                    potential to revolutionize many industries, but it also raises concerns about
                    the power that these data-driven models may wield. As machine learning
                    algorithms continue to improve in accuracy and complexity, they are being used
                    to make decisions that have significant real-world consequences. From medical
                    diagnoses to credit risk assessments, machine learning is being used to automate
                    decision-making processes that were previously the domain of human experts.
                </p>

                <p>
                    By taking this course, you will be well poised to take advantage of these
                    amazing systems, while also gaining key insights that will help you avoid their
                    pitfalls.
                </p>
            </div>
            <br />

            <div id="defining-machine-learning">
                <NoMarginH3>Defining Machine Learning as Task-Performance-Experience</NoMarginH3>
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
                    <Centered>Task: What we want the model to do.</Centered>
                    <Centered>
                        Performance: How we measure how well the model does what we want it to do.
                    </Centered>
                    <Centered>
                        Experience: How we show the model what we want it to do (a.k.a. how we
                        "train" the model).
                    </Centered>
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
                <p>
                    In this course, you will learn about a task called "classification". When you
                    see a car, and think "that's a car," you're doing classification. You do this
                    naturally using your eyes and brain. Your eyes and brain form the channel,
                    taking the light that goes into your eye as input, and outputting the idea of
                    "car". Our goal is to use code to achieve this same task, and so our model will
                    model the eye and brain channel. This type of machine learning is called
                    "computer vision".
                </p>
                <p>
                    Performance metrics are how we quantitatively evaulate the models that we build.
                    The better the performance metric, the closer the model matches the real world
                    channel (with respect to the data), the better the performance metric should be.
                    There are a couple of mathematical constraints that we have to place on
                    performance measures that we use during training. In certain contexts, we call
                    these performance metrics "loss functions" or "objective functions".
                </p>
                <p>
                    We train the model by having it experience (or "see") our data. In certain
                    contexts, this is also called "parameter tuning" or "model optimization". It
                    means that we are going to (automatically) adjust the variables that are part of
                    the mathematical functions that make up our model as we show it data. The most
                    common type of experience in supervised machine learning is called "gradient
                    descent", which we will cover in detail.
                </p>
            </div>

            <br />
            <div id="supervised-vs-unsupervised">
                <NoMarginH3>Supervised vs Unsupervised Learning</NoMarginH3>

                <p>
                    Supervised learning and unsupervised learning are two of the main categories of
                    machine learning techniques. Supervised learning involves the use of labeled
                    data to train a machine learning model to make predictions or classifications.
                    The goal is to create a model that can accurately predict the label (A.K.A. the
                    "target variable", or the "desired output") based on input data. In supervised
                    learning, the algorithm is given a set of inputs and corresponding outputs, and
                    it learns to generalize from this data to make predictions on new, unseen data.
                    Examples of supervised learning include image classification, language
                    translation, and speech recognition.
                </p>
                <p>
                    Unsupervised learning, on the other hand, involves the use of unlabeled data to
                    find patterns and relationships in the data. The goal is to identify hidden
                    structures or features in the data without any prior knowledge of what those
                    structures might be. In unsupervised learning, the algorithm is given a set of
                    input data and it must learn to group similar data points together or identify
                    clusters in the data. Examples of unsupervised learning include anomaly
                    detection, clustering, and dimensionality reduction.
                </p>

                <b>
                    <Centered>The vast majority of all real world data is unlabeled!</Centered>
                </b>
            </div>

            <br />
            <div id="self-supervised-learning">
                <NoMarginH3>Self-Supervised Learning</NoMarginH3>
                <p>
                    Self-supervised learning is a type of machine learning technique in which the
                    model learns from unlabeled data, without the need for explicit human
                    annotations or labels. Instead, the model generates its own labels or
                    supervisory signals from the input data itself. This can be achieved by
                    designing tasks that require the model to predict or reconstruct certain aspects
                    of the input data.
                </p>

                <p>
                    The goal of self-supervised learning is to learn useful representations or
                    features of the input data that can be used for downstream tasks such as
                    classification, detection, or segmentation. By leveraging large amounts of
                    unlabeled data, self-supervised learning can help to reduce the need for
                    manually labeled data, which can be time-consuming and expensive to acquire.
                </p>

                <p>
                    Some common tasks used in self-supervised learning include autoencoders, where
                    the model is trained to reconstruct the input data from a compressed
                    representation, and contrastive learning, where the model learns to distinguish
                    between similar and dissimilar pairs of data points.
                </p>
            </div>

            <br />
            <div id="reinforcement-learning">
                <NoMarginH3>Reinforcement Learning</NoMarginH3>
                <p>
                    Reinforcement learning (RL) is unlike other kinds of machine learning. In RL,
                    instead of training a model to emulate a real-world channel, we traing a model
                    to emulate an oranism that can make decisions. We call this model an agent. We
                    train the agent to make optimal decisions in an environment by providing it with
                    feedback in the form of rewards or punishments. The agent learns through
                    trial-and-error and attempts to maximize the cumulative reward it receives over
                    time.
                </p>
                <p>
                    In RL, the agent interacts with the environment by taking actions, receiving
                    feedback (rewards or punishments), and updating its policy or strategy to
                    improve its performance. The goal of the agent is to learn a policy that
                    maximizes the expected cumulative reward over the long term. Reinforcement
                    learning has been successfully applied in a variety of domains, such as
                    robotics, game playing, and autonomous vehicles, among others.
                </p>
            </div>

            <br />
            <div id="generalization">
                <NoMarginH3>Generalization</NoMarginH3>
                <p>
                    Generalization is a key concept in machine learning that refers to the ability
                    of a model to accurately predict outcomes on new, unseen data. The goal of
                    machine learning is not just to make accurate predictions on the data it was
                    trained on, but to make accurate predictions on data that it has never seen
                    before. In other words, the ultimate goal of machine learning is to create a
                    model that can generalize to new and unknown situations. This is important
                    because in many real-world scenarios, the data used to train a model may not be
                    representative of the data that the model will encounter in the future.{' '}
                </p>

                <p>
                    To achieve good generalization, a machine learning model must strike a balance
                    between overfitting and underfitting. Overfitting occurs when a model is too
                    complex and fits the training data too closely, leading to poor performance on
                    new data. Underfitting occurs when a model is too simple and does not capture
                    the patterns in the data, again leading to poor performance on new data. To
                    achieve good generalization, a model must be able to generalize beyond the
                    specific examples in the training data, while still capturing the underlying
                    patterns and relationships in the data.
                </p>
            </div>

            <br />
            <div id="partition-data">
                <NoMarginH3>Partitioning Data, Train-Test Split</NoMarginH3>
                <p>
                    Partitioning the data means we divide it up into subsets. One of the most common
                    partitioning techniques is train-test split, where the original dataset is split
                    into two subsets, one for training and the other for testing.
                </p>
                <p>
                    Train-test split involves randomly dividing the dataset into two parts,
                    typically with a ratio of 70-30 or 80-20 for the training and testing subsets,
                    respectively. The training subset is used to train the machine learning model,
                    while the testing subset is used to evaluate the model's performance on unseen
                    data.
                </p>
                <p>
                    The purpose of the train-test split is to avoid overfitting, where the model
                    performs well on the training data but poorly on the testing data. Overfitting
                    can occur when a model is too complex, and it memorizes the training data
                    instead of generalizing to new data. The test subset serves as a check on the
                    model's ability to generalize to unseen data and avoid overfitting.
                </p>
                <p>
                    The train-test split is a straightforward and widely used technique in machine
                    learning, but it has some limitations. For example, the split may not be
                    representative of the entire dataset, leading to bias in the model's
                    performance. To address this issue, cross-validation techniques such as k-fold
                    cross-validation can be used, where the dataset is split into k subsets, and the
                    model is trained and tested on different subsets in each iteration.
                </p>
            </div>

            <br />
            <div id="data-leakage">
                <NoMarginH3>Data Leakage</NoMarginH3>
                <p>
                    Data leakage in machine learning refers to a situation where information from
                    outside of the training dataset is used to create or evaluate a model. This can
                    lead to inflated performance metrics and ultimately, a model that does not
                    perform well on new, unseen data. For example, if the target variable is whether
                    or not a customer will buy a product, and information about whether or not they
                    returned the product is included in the training data, this would be considered
                    target leakage because the model is using information about the future to make
                    predictions.
                </p>
                <p>
                    <b>
                        <Centered>
                            Data leakage happens anytime information from the test set is accessed
                            during training!
                        </Centered>
                    </b>
                </p>
            </div>
            <br />

            <div id="learning-curves">
                <NoMarginH3>
                    Learning Curves, Underfitting, Overfitting, Bias-Variance Tradeoff
                </NoMarginH3>
                <p>
                    Learning curves are graphical representations of a model's performance over time
                    as the amount of training data increases. By plotting the model's training and
                    testing error (the difference between the model output and the target variable)
                    as a function of the number of training samples, learning curves can help to
                    diagnose problems such as overfitting or underfitting.
                </p>
                <p>
                    Underfitting occurs when a model is too simple to capture the complexity of the
                    data and performs poorly on both the training and testing data. This can be
                    observed on learning curves as high training and testing errors that do not
                    decrease as more training data is added.
                </p>
                <p>
                    Overfitting occurs when a model is too complex and performs well on the training
                    data but poorly on the testing data. This can be observed on learning curves as
                    a large gap between the training and testing errors, with the training error
                    decreasing as more data is added while the testing error plateaus or even
                    increases.
                </p>
                <p>
                    The bias-variance tradeoff refers to the balance between the complexity of a
                    model and its ability to generalize to new data. A model with high bias (i.e.,
                    underfitting) has low complexity and may not be able to capture the patterns in
                    the data. On the other hand, a model with high variance (i.e., overfitting) has
                    high complexity and may capture noise in the data rather than true patterns. The
                    goal is to find a model that strikes a balance between bias and variance that
                    performs well on both the training and testing data.
                </p>
            </div>

            <br />
            <div id="data-augmentation">
                <NoMarginH3>Data Augmentation</NoMarginH3>
                <p>
                    Data augmentation is a technique used in machine learning to increase the size
                    and diversity of a training dataset by generating new, synthetic data from
                    existing data. The goal of data augmentation is to improve the performance and
                    robustness of machine learning models by exposing them to a wider range of
                    variations and scenarios.
                </p>
                <p>
                    Data augmentation can be applied to a wide range of data types, including
                    images, audio, text, and time series data. For example, in image classification
                    tasks, data augmentation techniques may include flipping or rotating images,
                    changing the brightness or contrast, adding noise or distortions, or cropping
                    the images to different sizes.
                </p>
                <p>
                    The benefits of data augmentation include reducing overfitting by increasing the
                    size of the training dataset, improving the generalization of models by exposing
                    them to a wider range of variations, and reducing the need for large, expensive
                    datasets. Data augmentation can also be used to balance class distributions in
                    imbalanced datasets, where one or more classes have significantly fewer samples
                    than others.
                </p>
                <p>
                    Data augmentation where you add noise to the input is called "noise aware
                    training".
                </p>
                <p>
                    <b>
                        <Centered>
                            If you add a kind of noise to your training data, the model becomes
                            robust to that kind of noise!
                        </Centered>
                    </b>
                </p>
            </div>
            <br />

            <div id="parameters-and-hyperparameters">
                <NoMarginH3>Parameters and Hyperparameters</NoMarginH3>
                <p>
                    Parameters refer to the variables that a model learns during training in order
                    to make predictions on new data. These are the variables we can automatically
                    adjust during our model's experience. The goal of training a machine learning
                    model is to find the optimal values of the parameters that minimize the
                    difference between the predicted and actual output.
                </p>
                <p>
                    Hyperparameters, on the other hand, are settings or configurations that are set
                    before training begins and govern the learning process. They control aspects of
                    the model that are not learned from the data. Unlike parameters, hyperparameters
                    are not learned from the data and must be chosen through experimentation or
                    trial and error.
                </p>
                <p>
                    We will discuss the parameters and hyperparameters of each model as we introduce
                    it.
                </p>
                <p>
                    The choice of hyperparameters can have a significant impact on the performance
                    of a model. Choosing the wrong hyperparameters can result in a model that is
                    overfit or underfit to the data, or that takes a long time to train. It is
                    therefore important to carefully tune hyperparameters in order to achieve the
                    best performance possible.
                </p>
            </div>
            <br />

            <div id="partitioning-data-2">
                <NoMarginH3>Partitioning Data II: Train-Validate-Test Split</NoMarginH3>

                <p>
                    Let's say we wanted to find the best hyperparameters for our model. If we
                    adjusted hyperparameters then retrain the model, and see that it does better on
                    the test set, then that would cause data leakage, since we are using information
                    in the test set during training. By partitioning data into 3 parts, it is
                    possible to adjust hyperparameters without falling prey to data leakage. This is
                    the train-validate-test split.
                </p>

                <p>
                    The training set is used to train the machine learning model. The validation set
                    is used to evaluate the performance of the model during training, and to tune
                    the hyperparameters of the model. The test set is used to evaluate the final
                    performance of the trained model on unseen data.
                </p>
                <p>
                    The goal of the train-test-validate split is to ensure that the machine learning
                    model is able to generalize well to new, unseen data. By using a separate
                    validation set to tune the hyperparameters of the model, we can prevent
                    overfitting to the training data and ensure that the model is not simply
                    memorizing the training data.
                </p>
                <p>
                    It is important to carefully select the size of each subset when partitioning
                    data. A common practice is to use a 60-20-20 split for the training, validation,
                    and test sets, respectively. However, the optimal split may vary depending on
                    the size and complexity of the dataset, as well as the specific machine learning
                    task.
                </p>
            </div>
            <br />

            <div id="k-folds">
                <NoMarginH3>K-Folds Cross Validation</NoMarginH3>
                <p>
                    K-fold cross-validation is a technique used to evaluate the performance of
                    machine learning models. It involves partitioning a dataset into k equal
                    subsets, or "folds", where k is typically chosen to be 5 or 10. One of the folds
                    is used as the validation set, and the remaining k-1 folds are used as the
                    training set.
                </p>
                <p>
                    The model is trained on the training set and evaluated on the validation set.
                    This process is repeated k times, with each of the k folds used as the
                    validation set exactly once. The performance of the model is then averaged
                    across the k iterations to obtain a more accurate estimate of its performance.
                </p>
                <p>
                    K-fold cross-validation is a more reliable method for estimating model
                    performance than a simple train-test split, as it provides a better estimate of
                    how the model will perform on new, unseen data. It also helps to mitigate issues
                    with overfitting that can occur when a model is trained and tested on the same
                    dataset.
                </p>
                <p>
                    K-fold cross-validation is a widely used technique in machine learning and is
                    especially useful when working with smaller datasets or when the data is highly
                    variable. However, it can be computationally expensive, as the model needs to be
                    trained and evaluated k times.
                </p>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
