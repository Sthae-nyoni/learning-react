import React from 'react';
import { Link } from "react-router-dom";


function Navbar()
{
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    );
}

export default Navbar;