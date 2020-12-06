import React from 'react';

const NavBar = (props) => {

    return(
        <div className="side-bar">
            <ul>
                <li className="navLink">
                    <a href="/">Home</a>
                </li>
                <li className="navLink">
                    <a href="/festivals">Festivals</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;