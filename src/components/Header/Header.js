import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="nav-style">
                <Link to="/home">Home</Link>
                <Link to="/resturent">Resturent</Link>
            </nav>
        </div>
    );
};

export default Header;