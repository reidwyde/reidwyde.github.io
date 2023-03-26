import {PadLeft2perc, PadRight8perc} from '../styled';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Neural Networks</h2>
            <h3>Outline</h3>
            <ListOfLinks
                lcs={[
                    {
                        link: 'neural-networks',
                        children: 'Neural Networks',
                    },
                    {
                        link: 'backpropagation',
                        children: 'Backpropagation',
                    },
                ]}
            />

            <div id="neural-networks">
                <h3>Neural Networks</h3>
            </div>

            <div id="backpropagation">
                <h3>Backpropagation</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
