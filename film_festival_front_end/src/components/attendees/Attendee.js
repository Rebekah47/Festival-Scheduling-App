import React from 'react';
import {Link} from 'react-router-dom';

const Attendee = ({attendee}) => {

  if (!attendee){
    return "Loading..."
  }

  const url = "/attendees/" + attendee.id;

  return (
    <>
    <Link to = {url} className="name">
      {attendee.name}
    </Link>
    </>
  )
}

export default Attendee;