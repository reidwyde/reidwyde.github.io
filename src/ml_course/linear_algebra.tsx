import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';
import Tex from '@matejmazur/react-katex';
import {Centered} from '../styled';
const columnVector = (
    <Centered>
        <Tex>{'\\left[ {\\begin{array}{c} x_1 \\\\ x_2 \\\\ x_3 \\end{array}} \\right]'}</Tex>
    </Centered>
);
const rowVector = (
    <Centered>
        <Tex>{'\\left[ {\\begin{array}{cc} x_1 & x_2 & x_3 \\end{array}} \\right]'}</Tex>
    </Centered>
);

const matrix32 = (
    <Tex>
        {
            '\\left[ {\\begin{array}{cc} x_{11} & x_{12} \\\\ x_{21} & x_{22} \\\\ x_{31} & x_{32} \\\\ \\end{array}} \\right]'
        }
    </Tex>
);

const matrix23 = (
    <Tex>
        {
            '\\left[ {\\begin{array}{ccc} x_{11} & x_{12} & x_{13}  \\\\ x_{21} & x_{22} & x_{23} \\end{array}} \\right]'
        }
    </Tex>
);

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
                    {link: 'vector-spaces', children: 'Vector Spaces'},
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
                <p>
                    Linear algebra is the branch of mathematics that deals with vectors, matrices,
                    vector spaces, and linear transforms. It provides a convenient notation and
                    formalism for describing many mathematical operations over multiple numbers at
                    the same time.
                </p>
            </div>
            <div id="vectors">
                <h3>Vectors</h3>
                <p>
                    A vector is a list of numbers (i.e. a 1 dimensional array). If we have a list of
                    numbers <Tex>x_1</Tex>, <Tex>x_2</Tex>, <Tex>x_3</Tex>, then we can put them in
                    vector{' '}
                    <b>
                        <i>x</i>
                    </b>
                    . We can write{' '}
                    <b>
                        <i>x</i>
                    </b>{' '}
                    two ways, <br /> vertically, as a column vector: {columnVector} or horizontally,
                    as a row vector: {rowVector}
                </p>
            </div>
            <div id="matrices">
                <h3>Matrices</h3>
                <p>
                    A matrix is a list of vectors, (i.e. a 2 dimensional array). We commonly refer
                    to a matrix by its dimensions, which we always list as "(# of rows) x (# of
                    columns)".
                </p>
                <p>For example:</p>
                <Centered>
                    {matrix32}
                </Centered>
                <Centered>
                    <p>A 3x2 matrix</p>
                </Centered>
                <Centered>
                    {matrix23}
                </Centered>
    
                <Centered>
                    <p>A 2x3 matrix</p>
                </Centered>

            </div>
            <div id="vector-spaces">
                <h3>Vector Spaces</h3>
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
