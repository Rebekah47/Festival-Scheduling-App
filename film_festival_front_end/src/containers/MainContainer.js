import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FestivalContainer from './FestivalContainer';
import Home from '../components/Home.js'
import PageNotFound from '../components/PageNotFound.js'
import RoomContainer from './RoomContainer.js';


const MainContainer = () => {
    
    return(
        <Router>
        <div className='main-container'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/festivals" component={FestivalContainer} />
                <Route exact path="/rooms/festival/:id" component={RoomContainer} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
        </Router>
    )

}

export default MainContainer;