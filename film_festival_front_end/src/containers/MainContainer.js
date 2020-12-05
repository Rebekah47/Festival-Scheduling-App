import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideBarContainer from './SideBarContainer';
import NavBar from '../components/NavBar';
import FestivalContainer from './FestivalContainer';


const MainContainer = () => {
    return(
        <Router>
        <>
        <NavBar/>
        <FestivalContainer/>
        <SideBarContainer/>
        </>
        </Router>
    )



}

export default MainContainer;