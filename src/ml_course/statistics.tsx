import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

/*
Sampling
IID Sampling
Population statistics 
ANOVA 
*/



export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Statistics</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'what-is-a-stat', children: 'What Is A Statistic?'},
                    {link: 'hypothesis-testing', children: 'Hypothesis Testing'},
                    {
                        link: 'confidence-intervals-pvalues',
                        children: 'Confidence intervals and p-values',
                    },
                    {link: 'power-of-a-test', children: 'Power of a Test'},
                    { link: 'causal-inference', children: 'Causal Inference'},
                ]}
            />

            <div id="what-is-a-statistic">
                <h3>What Is A Statistic?</h3>
            </div>
            <div id="hypothesis-testing">
                <h3>Hypothesis Testing</h3>
            </div>

            <div id="confidence-intervals-pvalues">
                <h3>Confidence intervals and p-values</h3>
            </div>

            <div id="power-of-a-test">
                <h3>Power of a Test</h3>
            </div>

        </PadRight8perc>
    </PadLeft2perc>
);
