import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Gradient Descent</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'derivatives-of-functions', children: 'Derivatives of Functions'},
                    {
                        link: 'gradients',
                        children: 'Gradients: Derivatives of Multivariate Functions',
                    },
                    {link: 'gradient-descent', children: 'Gradient Descent'},
                ]}
            />

            <div id="derivatives-of-functions">
                <h3>Derivatives of Functions</h3>
            </div>
            <div id="gradients">
                <h3>Gradients</h3>
            </div>
            <div id="gradient-descent">
                <h3>Gradient Descent</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
