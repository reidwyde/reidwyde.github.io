import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Reinforcement Learning</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {
                        link: 'what-is-reinforcement-learning',
                        children: 'What Is Reinforcement Learning?',
                    },
                ]}
            />
            <div id="what-is-reinforcement-learning">
                <h3>What Is Reinforcement Learning?</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
