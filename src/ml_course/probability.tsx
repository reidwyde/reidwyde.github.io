import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';


/*
Probability Density Functions 
Cumulative Distribution Functions

Uniform Discrete Distribution
Bernoulli Distribution
Binomial Distribution

Uniform Continuous Distribution
Gaussian Distribution 
T distribution 
Pareto Distribution
*/



export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Probability</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {
                        link: 'discrete-continuous-prob-distributions',
                        children: 'Discrete and Continuous Probability Distributions',
                    },
                    {link: 'important-examples', children: 'Important Examples'},
                    {
                        link: 'expectation-values',
                        children: 'Expectation Values – LOTUS and moments',
                    },

                    {link: 'multivariate-distributions', children: 'Multivariate Distributions'},
                    {
                        link: 'distributions-of-sums',
                        children: 'Distributions of Sums of Random Variables',
                    },
                    {link: 'central-limit-theorem', children: 'Central Limit Theorem'},
                    {link: 'law-of-large-numbers', children: 'Law of Large Numbers'},
                    {
                        link: 'non-parametric-methods',
                        children: 'Non-parametric methods - Histograms, Empirical CDFs',
                    },
                ]}
            />

            <div id="discrete-continuous-prob-distributions">
                <h3>Discrete and Continuous Probability Distributions</h3>
            </div>

            <div id="important-examples">
                <h3>Important Examples</h3>
            </div>

            <div id="expectation-values">
                <h3>Expectation Values – LOTUS and moments</h3>
            </div>

            <div id="multivariate-distributions">
                <h3>Multivariate Distributions</h3>
            </div>

            <div id="distributions-of-sums">
                <h3>Distributions of Sums of Random Variables</h3>
            </div>

            <div id="central-limit-theorem">
                <h3>Central Limit Theorem</h3>
            </div>

            <div id="law-of-large-numbers">
                <h3>Law of Large Numbers</h3>
            </div>

            <div id="non-parametric-methods">
                <h3>Non-parametric methods - Histograms, Empirical CDFs</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
