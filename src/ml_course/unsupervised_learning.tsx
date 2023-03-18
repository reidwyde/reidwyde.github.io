import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Unsupervised Learning</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {
                        link: 'what-is-unsupervised-learning',
                        children: 'What Is Unsupervised Learning?',
                    },
                    {link: 'clustering', children: 'Clustering'},
                    {link: 'distance-measures', children: 'Distance Measures'},
                    {link: 'jaccard-distance', children: 'Jaccard Distance'},
                    {link: 'k-means', children: 'K Means'},
                    {link: 'k-modes', children: 'K Modes'},
                    {link: 'k-prototypes', children: 'K Prototypes'},
                    {link: 'gaussian-mixture-models', children: 'Gaussian Mixture Models'},
                    {link: 'hierarchical-clustering', children: 'Hierarchical Clustering'},
                    {link: 't-sne', children: 't-SNE'},
                ]}
            />

            <div id="what-is-unsupervised-learning">
                <h3>What is Unsupervised Learning?</h3>
            </div>
            <div id="clustering">
                <h3>Clustering</h3>
            </div>
            <div id="distance-measures">
                <h3>Distance Measures</h3>
            </div>
            <div id="jaccard-distance">
                <h3>Jaccard Distance</h3>
            </div>
            <div id="k-means">
                <h3>K Means</h3>
            </div>
            <div id="k-modes">
                <h3>K Modes</h3>
            </div>
            <div id="k-prototypes">
                <h3>K Prototypes</h3>
            </div>
            <div id="gaussian-mixture-models">
                <h3>Gaussian Mixture Models</h3>
            </div>
            <div id="hierarchical-clustering">
                <h3>Hierarchical Clustering</h3>
            </div>
            <div id="t-sne">
                <h3>t-SNE</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
