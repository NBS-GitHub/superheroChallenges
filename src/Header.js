import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>superhero challenges</h1>
            <ul>
                <li><NavLink to={`${process.env.PUBLIC_URL}/`} exact>Home</NavLink></li>
                <li><NavLink to={`${process.env.PUBLIC_URL}/about`}>About</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;