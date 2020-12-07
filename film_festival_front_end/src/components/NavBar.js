import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

const NavBar = (props) => {

    return(
        <div className="side-bar">
            <ul>
                <li className="navLink">
                    <a style={{ textDecoration: 'none' }} href="/"><FontAwesomeIcon icon={faHome}/> Home</a>
                </li>
                <li className="navLink">
                    <a style={{ textDecoration: 'none' }} href="/festivals"><FontAwesomeIcon icon={faVideo}/> Festivals</a>
                </li>
                <li className="navLink">
                    <a style={{ textDecoration: 'none' }} href="/events"><FontAwesomeIcon icon={faVideo}/> Events</a>
                </li>
                <li className="navLink">
                    <a style={{ textDecoration: 'none' }} href="/speakers"><FontAwesomeIcon icon={faVideo}/> Speakers</a>
                </li>
                <li className="navLink">
                    <a style={{ textDecoration: 'none' }} href="/attendees"><FontAwesomeIcon icon={faVideo}/> Guests</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;