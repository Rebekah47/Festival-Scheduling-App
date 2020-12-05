import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';



const FestivalContainer = () => {

const [attendees, setAttendees] = useState([]);
// const [discussions, setDiscussions] = useState([]);
const [events, setEvents] = useState([]);
const [festivals, setFestivals] = useState([]);
// const [films, setFilms] = useState([]);
// const [lectures, setLectures] = useState([]);
const [rooms, setRooms] = useState([]);
const [speakers, setSpeakers] = useState([]);

const requestAll = function(){
    const request = new Request();
    const attendeePromise = request.get('/api/attendees')
    // const discussionPromise = request.get('/api/discussions')
    // const filmPromise = request.get('/api/films')
    // const lecturePromise = request.get('/api/lectures')
    const speakerPromise = request.get('/api/speakers')
    const eventPromise = request.get('/api/events')
    const roomPromise = request.get('/api/rooms')
    const festivalPromise = request.get('/api/festivals')

Promise.all([
    attendeePromise, eventPromise, festivalPromise, roomPromise, speakerPromise])
    .then((data) => {
        setAttendees(data[0]);
        setEvents(data[1]);
        setFestivals(data[2])
        setRooms(data[3]);
        setSpeakers(data[4]);
    })
}


    return (
        <h1>I am the festival display</h1>
        // <Route path="/pirates" component={PirateContainer} />
    )
}

export default FestivalContainer;