import {PadLeft2perc, PadRight8perc} from '../styled';
import ListOfLinks from '../components/ListOfLinks';

export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Supervised Learning II: Classification</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {
                        link: 'Classification Task',
                        children: 'Classification Task',
                    },
                    {
                        link: 'Classification Performance Measures',
                        children: 'Classification Performance Measures',
                    },
                    {
                        link: 'Logistic Regression',
                        children: 'Logistic Regression',
                    },

        {
                        link: 'bayesian-classification',
                        children: 'Logistic Regression',
                    },


                    {
                        link: 'K Nearest Neighbors',
                        children: 'K Nearest Neighbors',
                    },
                    {
                        link: 'Support Vector Machines',
                        children: 'Support Vector Machines',
                    },
                    {
                        link: 'The Kernel Trick',
                        children: 'The Kernel Trick',
                    },
                    {
                        link: 'Decision Trees',
                        children: 'Decision Trees',
                    },
                    {
                        link: 'Fitting Decision Trees',
                        children: 'Fitting Decision Trees',
                    },
                ]}
            />

            <div id="Classification Task">
                <h3>Classification Task</h3>
            </div>
            <div id="Classification Performance Measures">
                <h3>Classification Performance Measures</h3>
            </div>
            <div id="Logistic Regression">
                <h3>Logistic Regression</h3>
            </div>
                <div id="Bayesian Classification">
                <h3>Bayesian Classification</h3>
            </div>

            <div id="K Nearest Neighbors">
                <h3>K Nearest Neighbors</h3>
            </div>
            <div id="Support Vector Machines">
                <h3>Support Vector Machines</h3>
            </div>
            <div id="The Kernel Trick">
                <h3>The Kernel Trick</h3>
            </div>
            <div id="Decision Trees">
                <h3>Decision Trees</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
