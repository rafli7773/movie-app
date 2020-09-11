import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <Link to="/" ><h2>Logo</h2></Link>
            <Link to="/about" ><li>About</li></Link>
            <Link to="/movie" ><li>Movie</li></Link>
        </header>
    )
}

export default Nav;