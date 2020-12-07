import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import './Rss.css'

const Rss = (props) => {

    return(
        <div className="rss-bar">
            <ul>
                <li className="navLink">
                    <a style={{ textDecoration: 'none' }} href="/"><FontAwesomeIcon icon={faRss}/> RSS</a>
                </li>
            </ul>
        </div>
    )
}

export default Rss;