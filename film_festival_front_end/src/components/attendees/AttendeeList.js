import React from 'react';
import Attendee from './Attendee.js';


const AttendeeList = ({attendees}) => {

	if (attendees.length === 0){
	  return (<p>Loading...</p>)
	}

	const attendeesNodes = attendees.map((attendee, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Attendee attendee={attendee} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {attendeesNodes}
	  </ul>
	)
}
 export default AttendeeList;
