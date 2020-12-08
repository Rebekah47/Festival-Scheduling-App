import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import AttendeeList from '../components/attendees/AttendeeList.js';
import AttendeeDetail from '../components/attendees/AttendeeDetail';
import AttendeeForm from '../components/attendees/AttendeeForm';

const AttendeeContainer = () => {

    const [attendees, setAttendees] = useState([]);

    const requestAll = function(){
        const request = new Request();

        const attendeePromise = request.get('/api/attendees')

        Promise.all([attendeePromise])
        .then((data) => {
            setAttendees(data[0])
        })

    }

    useEffect(() => {
        requestAll()
    }, [])

    const findAttendeeById = function(id){
        return attendees.find((attendee) => {
            return attendee.id === parseInt(id);
        })
    }

    const handleUpdate = function(attendee){
      const request = new Request();
      request.patch("/api/attendees/" + attendee.id, attendee)
      .then(() => window.location='/attendees');
    }

    const handlePost = function(attendee){
      const request = new Request();
      request.post("/api/attendees", attendee)
      .then(() => window.location='/attendees');
    }

    return (
        <Router>
            <Switch>

                <Route exact path="/attendees/new" render={() => {
                    return <AttendeeForm onCreate={handlePost} />
                }} />

                <Route exact path="/attendees/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const attendee = findAttendeeById(id);
                    return <AttendeeForm attendee={attendee} onUpdate={handleUpdate} />
                }} />

                <Route exact path="/attendees" render={() => {
                    return <AttendeeList attendees={attendees}/>
                }} />

                <Route exact path="/attendees/:id" render={(props) => {
                    const id = props.match.params.id;
                    const attendee = findAttendeeById(id);
                    return <AttendeeDetail attendee={attendee}/>
                }} />

            </Switch>
        </Router>
    )

}

export default AttendeeContainer;