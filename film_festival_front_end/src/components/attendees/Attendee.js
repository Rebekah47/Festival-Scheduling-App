import React from 'react';
import {Link} from 'react-router-dom';

const Attendee = ({attendee}) => {

  if (!attendee){
    return "Loading..."
  }

  const url = "/attendee/" + attendee.id;

  return (
    <>
    <Link to = {url} className="name">
    {attendee.name}
    </Link>
    <p>Age: {attendee.age}</p>
    <p>Access: {attendee.access_regs}</p>
    </>
  )
}

export default Attendee;