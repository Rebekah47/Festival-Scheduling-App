import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import AttendeeList from '../components/attendees/AttendeeList.js';
import FestivalDetail from '../components/festivals/FestivalDetail';
import AttendeeDetail from '../components/attendees/AttendeeDetail';

const AttendeeContainer = () => {

    const [festivals, setFestivals] = useState([]);
    const [attendees, setAttendees] = useState([]);
    const [events, setEvents] = useState([]);


    const requestAll = function(){
        const request = new Request();
        const festivalPromise = request.get('/api/festivals')
        const attendeePromise = request.get('/api/attendees')
        const eventPromise = request.get('/api/events')
        

        Promise.all([festivalPromise, attendeePromise, eventPromise])
        .then((data) => {
            setFestivals(data[0])
            setAttendees(data[1])
            setEvents(data[2])
        })

    }

    console.log(attendees);

    useEffect(() => {
        requestAll()
    }, [])

    const findAttendeeById = function(id){
        return attendees.find((attendee) => {
            return attendee.id === parseInt(id);
        })
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/attendees" render={() => {
                    return <AttendeeList attendees={attendees} festivals={festivals} events={events}/>
                }} />
                <Route exact path="attendees/:id" render={(props) => {
                    const id = props.match.params.id;
                    const attendee = findAttendeeById(id);
                    return <AttendeeDetail attendee={attendee}/>
                }} />
            </Switch>
        </Router>
    )

}

export default AttendeeContainer;