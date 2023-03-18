import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Genetic Algorithms</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'what-are-genetic-algorithms', children: 'What Are Genetic Algorithms?'},
                ]}
            />
            <div id="what-are-genetic-algorithms">
                <h3>What Are Genetic Algorithms?</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
