import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



function Header(props) {
    return (
        <div>
            <nav className="header">
                <h2 className="logo"></h2>
                <h2 className="artiles"></h2>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/signup">Signup</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/article-list">Articles</Link>
                 
                 
          


            </nav>
        </div>
    );
}

export default Header;