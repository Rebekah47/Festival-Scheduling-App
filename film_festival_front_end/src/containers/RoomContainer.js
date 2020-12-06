import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import RoomList from '../components/rooms/RoomList';
import PageNotFound from '../components/PageNotFound.js'
import RoomForm from '../components/rooms/RoomForm';

const RoomContainer = (props) => {

  const festivalId = props.match.params.id;

  const [rooms, setRooms] = useState([]);
  const [festival, setFestival] = useState({});
  const [allFestivals, setAllFestivals] = useState({});


  const requestAll = function(){
    const request = new Request();
    const festivalPromise = request.get(`/api/festivals/${festivalId}`)
    const allFestivalsPromise = request.get(`/api/festivals`)
    

    Promise.all([festivalPromise, allFestivalsPromise])
    .then((data) => {
      setRooms(data[0].rooms)
      setFestival(data[0])
      setAllFestivals(data[1])
    })
  }

  useEffect(() => {
    requestAll()
  }, [])

  const findRoomById = function(id){
    return rooms.find((room) => {
        return room.id === parseInt(id);
    })
  }

  const handlePost = function(room){
    const request = new Request();
    request.post("/api/rooms/", room)
    .then(() => window.location=`/rooms/festival/${festival.id}`)
  }

  const handlePatch = function(room){
    const request = new Request();
    request.patch("/api/rooms/" + room.id, room)
    .then(() => window.location=`/rooms/festival/${festival.id}`)
  }

  return(
    <Router>
      <Switch>

        <Route exact path="/rooms/festival/:id/room/:roomid/edit" render={(props) => {
          const roomId = props.match.params.roomid;
          const room = findRoomById(roomId);
          return <RoomForm festival={festival} room={room} onUpdate={handlePatch}/>
        }}/>

        <Route exact path="/rooms/festival/:id/new" render={() => {
          return <RoomForm festival={festival} onCreate={handlePost}/>
        }}/>

        <Route exact path="/rooms/festival/:id" render={() => {
          return <RoomList rooms={rooms} festival={festival}/>
        }} />

        <Route component={PageNotFound}/>

      </Switch>
    </Router>
  )
}

export default RoomContainer;