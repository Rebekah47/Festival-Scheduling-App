import React from 'react';
import {Link} from 'react-router-dom';

const Event = ({event}) => {

  if (!event){
    return "Loading..."
  }

  const url = "/event/" + event.id;

//   if (event.)

  return (
    <>
    <Link to = {url} className="name">
    {event.name}
    </Link>
    <p>Event Type: {event.event_type}</p>
    <p>Start Time: {event.start_time}</p>
    <p>Room: {event.room.name}</p>
    </>
  )
}

export default Pirate;