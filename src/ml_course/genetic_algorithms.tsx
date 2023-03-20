import {PadLeft2perc, PadRight8perc} from '../styled';
import {Link} from 'react-scroll';
import ListOfLinks from '../components/ListOfLinks';

/*
 *
 *Representation of individuals
Fitness function
Selection methods
Genetic operators (crossover and mutation)
Termination conditions
 */
export default () => (
    <PadLeft2perc>
        <PadRight8perc>
            <h2>Genetic Algorithms</h2>
            <h3> Outline</h3>
            <ListOfLinks
                lcs={[
                    {link: 'what-are-genetic-algorithms', children: 'What Are Genetic Algorithms?'},
                    {
                        link: 'representation-of-individuals',
                        children: 'Representation of Individuals',
                    },
                    {link: 'fitness-function', children: 'Fitness Function'},
                    {link: 'selection-methods', children: 'Selection Methods'},
                    {link: 'crossover', children: 'Crossover'},
                    {link: 'mutation', children: 'Mutation'},
                    {link: 'termination-conditions', children: 'Termination Conditions'},
                ]}
            />
            <div id="what-are-genetic-algorithms">
                <h3>What Are Genetic Algorithms?</h3>
            </div>
            <div id="representation-of-individuals">
                <h3>Representation of Individuals</h3>
            </div>
            <div id="fitness-function">
                <h3>Fitness Function</h3>
            </div>
            <div id="selection-methods">
                <h3>Selection Methods</h3>
            </div>
            <div id="crossover">
                <h3>Crossover</h3>
            </div>
            <div id="mutation">
                <h3>Mutation</h3>
            </div>
            <div id="termination-conditions">
                <h3>Termination Conditions</h3>
            </div>
        </PadRight8perc>
    </PadLeft2perc>
);
