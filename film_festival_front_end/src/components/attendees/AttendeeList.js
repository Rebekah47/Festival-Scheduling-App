import React from 'react';
import Attendee from './Attendee.js';
import {Link} from 'react-router-dom';


const AttendeeList = ({attendees}) => {

	if (attendees.length === 0){
	  return (<p>Loading...</p>)
	}

	const attendeesNodes = attendees.map((attendee, index) => {
	  return (
	    <li key={index} className="component-item">
	    	<Attendee attendee={attendee} />
	    </li>
	  )
	})

	return (
		<>
			<h3>All Attendees</h3>
	  	<ul className="component-list">
	  	  {attendeesNodes}
	  	</ul>
			<Link to="/attendees/new">Add New</Link>
		</>
	)
}
 export default AttendeeList;
