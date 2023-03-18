import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Supervised Learning I: Regression</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'supervised-machine-learning', children: 'Supervised Machine Learning'},
                    {
                        link: 'regression-task-performance-experience',
                        children: 'Regression Task-Performance-Experience',
                    },
                    {
                        link: 'statistical-assumptions-regression-predictors',
                        children: 'Statistical Assumptions of Regression Predictors',
                    },
                    {link: 'linear-regression', children: 'Linear Regression'},
                    {
                        link: 'statistical-assumptions-regression-residuals',
                        children: 'Statistical Assumptions of Regression Residuals',
                    },
                    {link: 'polynomial-regression', children: 'Polynomial Regression'},
                    {link: 'nonlinear-regression', children: 'Nonlinear Regression'},
                    {link: 'correlation-coefficient', children: 'Correlation Coefficient'},
                    {
                        link: 'coefficient-of-determination',
                        children: 'Coefficient of Determination',
                    },
                    {
                        link: 'statistical-significance-predictor',
                        children: 'Statistical Significance of a Predictor',
                    },
                    {
                        link: 'regularized-models-lasso-ridge-regression',
                        children: 'Regularized Models, Lasso and Ridge Regression',
                    },
                ]}
            />

            <div id="supervised-machine-learning">
                <h3>Supervised Machine Learning</h3>
            </div>

            <div id="regression-task-performance-experience">
                <h3>Regression Task-Performance-Experience</h3>
            </div>

            <div id="statistical-assumptions-regression-predictors">
                <h3>Statistical Assumptions of Regression Predictors</h3>
            </div>

            <div id="linear-regression">
                <h3>Linear Regression</h3>
            </div>

            <div id="statistical-assumptions-regression-residuals">
                <h3>Statistical Assumptions of Regression Residuals</h3>
            </div>

            <div id="polynomial-regression">
                <h3>Polynomial Regression</h3>
            </div>

            <div id="nonlinear-regression">
                <h3>Nonlinear Regression</h3>
            </div>

            <div id="correlation-coefficient">
                <h3>Correlation Coefficient</h3>
            </div>

            <div id="coefficient-of-determination">
                <h3>Coefficient of Determination</h3>
            </div>

            <div id="statistical-significance-predictor">
                <h3>Statistical Significance of a Predictor</h3>
            </div>

            <div id="regularized-models-lasso-ridge-regression">
                <h3>Regularized Models, Lasso and Ridge Regression</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
