import React from 'react';
import {Link} from 'react-router-dom';const Event = ({oneEvent}) => {  if (!oneEvent){
    return "Loading..."
  }  const url = "/events/" + oneEvent.id;  return (
    <>
    <Link to = {url} className="name">
    {oneEvent.name}
    </Link>
    <p>Event Type: {oneEvent.event_type}</p>
    <p>Start Time: {oneEvent.start_time}</p>
    <p>Room: {oneEvent.room.name}</p>
    </>
  )
}

export default Event;