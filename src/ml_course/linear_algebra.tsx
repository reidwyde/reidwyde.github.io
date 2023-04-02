import {PadLeft2perc, PadRight8perc} from '../styled';
import ListOfLinks from '../components/ListOfLinks';
import Tex from '@matejmazur/react-katex';
import {Centered, NoMarginH4, NoMarginH3, Caption} from '../styled';
import {ReactNode} from 'react';

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
const Ctex = ({children}: {children: ReactNode}) => (
    <Centered>
        <Tex>{children}</Tex>
    </Centered>
);

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Linear Algebra</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'what-is-linear-algebra', children: 'What Is Linear Algebra?'},
                    {link: 'why-linear-algebra', children: 'Why Linear Algebra?'},
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

            <div id="what-is-linear-algebra">
                <NoMarginH3>What Is Linear Algebra?</NoMarginH3>
                <p>
                    Linear algebra is the branch of mathematics that deals with vectors, matrices,
                    vector spaces, and linear transforms.
                </p>
            </div>

            <div id="why-linear-algebra">
                <NoMarginH3>Why Linear Algebra?</NoMarginH3>
                <p>
                    In data driven modeling, we often want to work on multiple datapoints at the
                    same time, in the same way. Linear algebra provides us with a convenient and
                    concise notation for describing this kind of math.
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
                    A matrix is a list of vectors (i.e. a 2 dimensional array). We commonly refer to
                    a matrix by its dimensions, which we write as NxM (pronounced "N by M"), where N
                    is the number of rows and M is the number of columns.
                </p>
                <p>For example, a 2x3 matrix:</p>
                <Centered>{matrix23}</Centered>

                <p>A 3x2 matrix:</p>
                <Centered>{matrix32}</Centered>
                <p>
                    Notice that the subscripts of each entry in the matrix are also in row, column
                    order.
                </p>

                <p>
                    It turns out that vectors are a special case of matrices. Row vectors are 1xN
                    matrices and column vectors are Nx1 matrices.
                </p>
            </div>
            <div id="vector-spaces">
                <h3>Vector Spaces</h3>

                <p>
                    A vector space is a specific set of vectors. Before we can talk about vector
                    spaces, we need to talk about some basic sets.{' '}
                </p>
                <p>
                    The set of counting numbers is written as <Tex>{`\\mathbf{N}`}</Tex>:
                    <Centered>
                        <Tex>{`\\mathbf{N} = \\{1, 2, 3\\}`}</Tex>
                    </Centered>
                </p>

                <p>
                    {' '}
                    First we'll give some examples, and then get into properties of a vector space.
                    In the previous lecture, "The Big Picture", we gave the example of the
                    polynomial function. The dataset that we used to train that function was a set
                    of points in the x-y plane:
                </p>
                <Centered>
                    <Tex>{`D = \\{(x_i, y_i)\\}; i = 1, 2, ..., N`}</Tex>
                </Centered>
                <p>
                    Equivalently, we can write each datapoint as a vector in{' '}
                    <Tex>{`\\Reals^2`}</Tex> ("R two"):
                    <Centered>
                        <Tex>{`D = \\{\\mathbb{x}_i\\}; x \\epsilon \\Reals^2; i = 1, 2, ..., N`}</Tex>
                    </Centered>
                </p>
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
