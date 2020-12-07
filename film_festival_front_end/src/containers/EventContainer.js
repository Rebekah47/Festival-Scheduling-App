import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import EventList from '../components/events/EventList'
const EventContainer = () => {
        const [events, setEvents ] = useState([]);
        const [festivals, setFestivals] = useState([]);        
        const requestAll = function(){
            const request = new Request();
            const festivalPromise = request.get('/api/festivals')
            const eventsPromise = request.get('/api/events')        
            Promise.all([festivalPromise, eventsPromise])
        .then((data) => {
            setFestivals(data[0])
            setEvents(data[1])
            console.log(setEvents)
        })
    }    
    useEffect(() => {
        requestAll()
    }, [])    
    return(
        <Router>
            <Switch>
                <Route exact path="/events" render={() => {
                    return <EventList events={events} festivals={festivals}/>
                }}/>            </Switch>
        </Router>
    )
}
export default EventContainer;