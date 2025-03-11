import React from 'react';
import NavBar from './components/navBar';
import {StyledButton as Button, PadLeft20px} from './styled';

import {useNavigate} from 'react-router-dom';

export default () => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar activeTabKey="" />
            <div className="error-container">
                <PadLeft20px>
                    <h1>404 - Page Not Found</h1>
                    <Button
                        onClick={() => {
                            navigate(`/home`);
                        }}
                    >
                        Home page
                    </Button>
                </PadLeft20px>
            </div>
        </>
    );
};
