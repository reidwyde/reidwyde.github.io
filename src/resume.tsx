import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';
import resume from './resources/Wyde_Resume_Spring_2023.pdf';
import {CenteredIframe} from './styled';

const Resume = () => {
    const [numPages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}: {numPages: number}) => {
        setNumPages(numPages);
    };

    return <CenteredIframe src={resume} height="1100" width="850" scrolling="no" frameBorder="0" />;
};
export default Resume;
