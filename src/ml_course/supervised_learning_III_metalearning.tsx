import {PadLeft2perc, PadRight8perc} from '../styled';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Meta-Learning</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {
                        link: 'meta-learning',
                        children: 'Meta-learning',
                    },
                    {
                        link: 'bootstrapping',
                        children: 'Bootstrapping Data',
                    },
                    {
                        link: 'bagging',
                        children: 'Bagging',
                    },
                    {
                        link: 'boosting',
                        children: 'Boosting',
                    },
                    {
                        link: 'random-forests',
                        children: 'Random Forests',
                    },
                ]}
            />

            <div id="meta-learning">
                <h3>Meta-learning</h3>
            </div>
            <div id="bootstrapping">
                <h3>Bootstrapping Data</h3>
            </div>
            <div id="bagging">
                <h3>Bagging</h3>
            </div>
            <div id="boosting">
                <h3>Boosting</h3>
            </div>
            <div id="random-forests">
                <h3>Random Forests</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
