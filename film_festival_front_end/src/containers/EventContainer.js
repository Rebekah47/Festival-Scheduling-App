import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import EventList from '../components/events/EventList.js'
import EventForm from '../components/events/EventForm.js'


const EventContainer = () => {


    const [events, setEvents ] = useState([]);
    const [eventTypes, setEventTypes ] = useState([]);
    const [festivals, setFestivals ] = useState([]);
    const [rooms, setRooms ] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const eventsPromise = request.get('/api/events')  
        const eventTypePromise = request.get('/api/eventTypes')
        const festivalsPromise = request.get('/api/festivals')
        const roomsPromise = request.get('/api/rooms');

        Promise.all([eventsPromise, eventTypePromise, festivalsPromise, roomsPromise])
        .then((data) => {
            setEvents(data[0])
            setEventTypes(data[1])
            setFestivals(data[2])
            setRooms(data[3])
        })
    }    

    useEffect(() => {
        requestAll()
    }, [])  
    
    const findEventById = function(id){
        return events.find((event) => {
            return event.id === parseInt(id);
        })
    }

    const handleUpdate = function(event){
        console.log("handlin");
        const request = new Request();
        request.patch('/api/events/' + event.id, event)
        .then(() => window.location='/events');
    }

    const handlePost = function(event){
        const request = new Request();
        request.post("/api/events", event)
        .then(() => window.location='/events')
    }

    return(
        <Router>
            <Switch>

                <Route exact path="/events/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const event = findEventById(id);
                    return <EventForm event={event} eventTypes={eventTypes} festivals={festivals} rooms={rooms} onUpdate={handleUpdate}/>
                }}/>

                <Route exact path="/events/new" render={() => {
                    return <EventForm onCreate={handlePost} eventTypes={eventTypes} festivals={festivals} rooms={rooms}/>
                }}/>

                <Route exact path="/events" render={() => {
                    return <EventList events={events}/>
                }}/>     

            </Switch>
        </Router>
    )
}
export default EventContainer;