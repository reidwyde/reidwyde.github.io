import {PadLeft2perc, PadRight8perc} from '../styled';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Unsupervised Learning</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'graphs', children: 'Graphs'},
                    {link: 'graph-laplacian', children: 'Graph Laplacian'},
                    {link: 'spectral-clustering', children: 'Spectral Clustering'},
                ]}
            />

            <div id="graphs">
                <h3>Graphs</h3>
            </div>
            <div id="graph-laplacian">
                <h3>Graph Laplacian</h3>
            </div>
            <div id="spectral-clustering">
                <h3>Spectral Clustering</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
