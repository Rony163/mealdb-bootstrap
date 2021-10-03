import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const PageNotFound = () => {
    const history = useHistory();
    const handleHomePage = () => {
        history.push('/home');
    }
    return (
        <div>
            <h2 className="text-green">Page not found</h2>
            <h1>ERROR 404</h1>
            <Button onClick={handleHomePage}>Go To Home Page</Button>
        </div>
    );
};

export default PageNotFound;