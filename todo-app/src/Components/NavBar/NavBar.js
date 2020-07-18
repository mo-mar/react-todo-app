import React from 'react';
import * as classes from './NavBar.module.css';

const NavBar = () => {
    return ( 
        <div className={classes.NavBar}>
            <a>Home</a>
            <a>My Todos</a>
            <a>My deleted Todos</a>
        </div>
    );
}

export default NavBar;