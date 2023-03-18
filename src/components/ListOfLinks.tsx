import {ReactNode} from 'react';
import {Link} from 'react-scroll';

const ListOfLinks = ({lcs}: {lcs: {link: string; children: ReactNode}[]}) => (
    <ol>
        {lcs.map((lc) => (
            <li>
                <Link to={lc.link} smooth={true}>
                    {lc.children}
                </Link>
            </li>
        ))}
    </ol>
);

export default ListOfLinks;
