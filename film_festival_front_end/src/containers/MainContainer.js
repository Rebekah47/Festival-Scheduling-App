import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FestivalContainer from './FestivalContainer';
import Home from '../components/Home.js'
import PageNotFound from '../components/PageNotFound.js'
import EventContainer from './EventContainer';
import AttendeeContainer from './AttendeeContainer';
import SpeakerContainer from './SpeakerContainer';


const MainContainer = () => {
    
    return(
        <Router>
        <div className='main-container'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/festivals" component={FestivalContainer} />
                <Route exact path="/events" component={EventContainer}/>
                <Route exact path="/attendees" component={AttendeeContainer}/>
                <Route exact path="/speakers" component={SpeakerContainer}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
        </Router>
    )

}

export default MainContainer;