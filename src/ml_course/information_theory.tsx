import {PadLeft2perc, PadRight8perc} from '../styled';
import ListOfLinks from '../components/ListOfLinks';



export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Information Theory</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {
                        link: 'information-theory',
                        children: 'What Is Information Theory?',
                    },
                    {link: 'entropy', children: 'Entropy Of A Random Variable'},
                    {link: 'conditional-entropy', children: 'Conditional Entropy'},
                    {link: 'mutual-information', children: 'Mutual Information'},
                    {link: 'mutual-information-vs-correlation', children: 'Mutual Information vs Correlation'},
                    {link: 'kl-divergence', children: 'KL Divergence'},
                ]}
            />
            <div id="information-theory">
                <h3>What Is Information Theory?</h3>
            </div>
            <div id="entropy">
                <h3>Entropy Of A Random Variable</h3>
            </div>
            <div id="conditional-entropy">
                <h3>Conditaionl Entropy</h3>
            </div>

            <div id="mutual-information">
                <h3>Mutual Information</h3>
            </div>
            <div id="mutual-information-vs-correlation">
                <h3>Mutual Information vs Correlation</h3>
            </div>
            <div id="KL Divergence">
                <h3>KL Divergence</h3>
            </div>


        </PadRight8perc>
    </PadLeft2perc>
);
