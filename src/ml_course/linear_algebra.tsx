import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Linear Algebra</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'what-is-linear-algebra', children: 'What Is Linear Algebra?'},
                    {link: 'vectors', children: 'Vectors'},
                    {link: 'matrices', children: 'Matrices'},
                    {link: 'inner-product', children: 'Inner Products'},
                    {link: 'outer-product', children: 'Outer Products'},
                    {link: 'transpose', children: 'Transpose'},
                    {link: 'metric-inner-product', children: 'Metric Inner Product'},
                    {link: 'linear-systems', children: 'Linear Systems'},
                    {link: 'affine-systems', children: 'Affine Systems'},
                    {link: 'rank', children: 'Rank'},
                    {link: 'column-space', children: 'Column Space'},
                    {link: 'null-space', children: 'Null Space'},
                    {link: 'basis', children: 'Basis'},
                    {link: 'eigen', children: 'Eigenvectors and Eigenvalues'},
                ]}
            />

            <div id="intro">
                <h3>What Is Linear Algebra?</h3>
            </div>
            <div id="vectors">
                <h3>Vectors</h3>
            </div>
            <div id="matrices">
                <h3>Matrices</h3>
            </div>
            <div id="inner-product">
                <h3>Inner Products</h3>
            </div>
            <div id="outer-product">
                <h3>Outer Products</h3>
            </div>
            <div id="transpose">
                <h3>Transpose</h3>
            </div>
            <div id="metric-inner-product">
                <h3>Metric Inner Product</h3>
            </div>
            <div id="linear-systems">
                <h3>Linear Systems</h3>
            </div>
            <div id="affine-systems">
                <h3>Affine Systems</h3>
            </div>
            <div id="rank">
                <h3>Rank</h3>
            </div>
            <div id="column-space">
                <h3>Column Space</h3>
            </div>
            <div id="null-space">
                <h3>Null Space</h3>
            </div>
            <div id="basis">
                <h3>Basis</h3>
            </div>
            <div id="eigen">
                <h3>Eigenvectors and Eigenvalues</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
