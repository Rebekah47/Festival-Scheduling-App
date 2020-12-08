import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import FestivalList from '../components/festivals/FestivalList.js'
import FestivalDetail from '../components/festivals/FestivalDetail.js'
import FestivalForm from '../components/festivals/FestivalForm.js'
import RoomList from '../components/rooms/RoomList';
import RoomForm from '../components/rooms/RoomForm';
import EventList from '../components/events/EventList.js'
import EventForm from '../components/events/EventForm.js'
import AttendeeList from '../components/attendees/AttendeeList.js'
import SpeakerList from '../components/speakers/SpeakerList.js'
import PageNotFound from '../components/PageNotFound.js'



const FestivalContainer = () => {

    const [festivals, setFestivals] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventTypes, setEventTypes ] = useState([]);
    const [attendees, setAttendees] = useState([]);
    const [speakers, setSpeakers] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const festivalPromise = request.get('/api/festivals')
        const roomPromise = request.get('/api/rooms')
        const eventPromise = request.get('/api/events')
        const eventTypePromise = request.get('/api/eventTypes')
        const attendeePromise = request.get('/api/attendees')
        const speakerPromise = request.get('/api/speakers')
    
        Promise.all([festivalPromise, roomPromise, eventPromise, eventTypePromise, attendeePromise, speakerPromise])
        .then((data) => {
            setFestivals(data[0])
            setRooms(data[1])
            setEvents(data[2])
            setEventTypes(data[3])
            setAttendees(data[4])
            setSpeakers(data[5])
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

    const findRoomById = function(id){
      return rooms.find((room) => {
          return room.id === parseInt(id);
      })
    }

    const handleRoomPost = function(room){
      const request = new Request();
      request.post("/api/rooms/", room)
      .then(() => window.location=`/festivals`)
    }

    const handleRoomPatch = function(room){
      const request = new Request();
      request.patch("/api/rooms/" + room.id, room)
      .then(() => window.location=`/festivals`)
    }

    const findEventById = function(id){
        return events.find((event) => {
            return event.id === parseInt(id);
        })
    }

    const handleEventUpdate = function(event){
        console.log("handlin");
        const request = new Request();
        request.patch('/api/events/' + event.id, event)
        .then(() => window.location='/festivals');
    }

    const handleEventPost = function(event){
        const request = new Request();
        request.post("/api/events", event)
        .then(() => window.location='/festivals')
    }

    const getFestivalRooms = function(id){
        let festivalRooms = rooms.filter((room) => {
            return room.festival.id === parseInt(id);
        })
        return festivalRooms;
    }

    const getAttendees = function(id){
        const festivalAttendees = attendees.filter((attendee) => {
            return attendee.events[0].room.festival.id === parseInt(id)
        })
        return festivalAttendees
    }

    const getSpeakers = function(id){
        const festivalSpeakers = speakers.filter((speaker) => {
            return speaker.events[0].room.festival.id === parseInt(id)
        })
        return festivalSpeakers
    }

    return (
        <Router>
            <Switch>

                <Route exact path="/festivals/:id/speakers" render={(props) => {
                    const id = props.match.params.id;
                    return <SpeakerList speakers={getSpeakers(id)} extraUrl={`/festivals/${id}`} />
                }} />

                <Route exact path="/festivals/:id/attendees" render={(props) => {
                    const id = props.match.params.id;
                    return <AttendeeList attendees={getAttendees(id)} extraUrl={`/festivals/${id}`} />
                }} />

                <Route exact path="/festivals/:id/events/:eventid/edit" render={(props) => {
                    const eventId = props.match.params.eventid;
                    const event = findEventById(eventId);
                    const id = props.match.params.id;
                    const festival = [findFestivalById(id)];
                    return <EventForm event={event} eventTypes={eventTypes} festivals={festival} rooms={getFestivalRooms(id)} onUpdate={handleEventUpdate}/>
                }}/>

                <Route exact path="/festivals/:id/events/new" render={(props) => {
                    const id = props.match.params.id;
                    const festival = [findFestivalById(id)];
                    return <EventForm onCreate={handleEventPost} eventTypes={eventTypes} festivals={festival} rooms={getFestivalRooms(id)}/>
                }}/>

                <Route exact path="/festivals/:id/events" render={(props) => {
                    const id = props.match.params.id;
                    const festivalEvents = events.filter((event) => {
                        return event.room.festival.id === parseInt(id)
                    })
                    return <EventList events={festivalEvents} extraUrl={`/festivals/${id}`}/>
                }}/>     

                <Route exact path="/festivals/:id/rooms/:roomid/edit" render={(props) => {
                    const roomId = props.match.params.roomid;
                    const room = findRoomById(roomId);
                    const id = props.match.params.id;
                    const festival = findFestivalById(id);
                    return <RoomForm festival={festival} room={room} onUpdate={handleRoomPatch}/>
                }}/>

                <Route exact path="/festivals/:id/rooms/new" render={(props) => {
                    const id = props.match.params.id;
                    const festival = findFestivalById(id);
                    return <RoomForm festival={festival} onCreate={handleRoomPost}/>
                }}/>

                <Route exact path="/festivals/:id/rooms" render={(props) => {
                    const id = props.match.params.id;
                    const festival = findFestivalById(id);
                    return <RoomList rooms={festival.rooms} festival={festival}/>
                }} />

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

                <Route exact path="/festivals" render={() => {
                    return <FestivalList festivals={festivals}/>
                }} />

                <Route component={PageNotFound}/>

            </Switch>
        </Router>
    )
}

export default FestivalContainer;