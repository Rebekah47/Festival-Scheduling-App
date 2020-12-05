import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
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



=======
import NavBar from '../components/NavBar.js';
import FestivalContainer from './FestivalContainer.js';

const MainContainer = () => {

    return (
        <Router>
            <>
                <NavBar/>
                <Switch>
                    <Route path="/festivals" component={FestivalContainer} />
                </Switch>
            </>
        </Router>
    )
>>>>>>> d9806a7... created front end app, can call festivals
}

export default MainContainer;