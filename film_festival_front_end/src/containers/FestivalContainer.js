import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import FestivalList from '../components/festivals/FestivalList.js'
import FestivalDetail from '../components/festivals/FestivalDetail.js'
import FestivalForm from '../components/festivals/FestivalForm.js'



const FestivalContainer = () => {

    const [festivals, setFestivals] = useState([]);
    // const [attendees, setAttendees] = useState([]);
    // const [events, setEvents] = useState([]);
    // const [rooms, setRooms] = useState([]);
    // const [speakers, setSpeakers] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const festivalPromise = request.get('/api/festivals')
        // const attendeePromise = request.get('/api/attendees')
        // const speakerPromise = request.get('/api/speakers')
        // const eventPromise = request.get('/api/events')
        // const roomPromise = request.get('/api/rooms')
    
        Promise.all([festivalPromise]) //, attendeePromise, eventPromise, roomPromise, speakerPromise])
        .then((data) => {
            setFestivals(data[0])
            // setAttendees(data[1]);
            // setEvents(data[2]);
            // setRooms(data[3]);
            // setSpeakers(data[4]);
        })

    }

    useEffect(() => {
        requestAll()
    }, [])

    const findFestivalById = function(id){
        return festivals.find((festival) => {
            return festival.id === parseInt(id);
        })
    }

    const handlePost = function(festival, capacity){
        const request = new Request();
        request.post("/api/festivals/" + capacity, festival)
        .then(() => window.location='/festivals')
    }

    const handlePatch = function(festival, room){
        const request = new Request();
        Promise.all([request.patch("/api/festivals/" + festival.id, festival), request.patch("/api/rooms/" + room.id, room)])
        .then(() => window.location='/festivals')
    }

    return (
        <Router>
            <Switch>

                <Route exact path="/festivals/new" render={() => {
                    return <FestivalForm onCreate={handlePost}/>
                }}/>

                <Route exact path="/festivals/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const festival = findFestivalById(id);
                    return <FestivalForm festival={festival} onUpdate={handlePatch}/>
                }}/>

                <Route exact path="/festivals/:id" render={(props) => {
                    const id = props.match.params.id;
                    const festival = findFestivalById(id);
                    return <FestivalDetail festival={festival} />
                }} />

                <Route render={() => {
                    return <FestivalList festivals={festivals}/>
                }} />

            </Switch>
        </Router>
    )
}

export default FestivalContainer;