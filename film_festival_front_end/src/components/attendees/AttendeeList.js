import React, { useState, useEffect } from 'react';
import Attendee from './Attendee.js';
import {Link} from 'react-router-dom';
import SearchContainer from '../../containers/SearchContainer.js';


const AttendeeList = ({attendees, extraUrl}) => {

	if (attendees.length === 0){
	  return (<p>Loading...</p>)
	}

	const attendeesNodes = attendees.map((attendee, index) => {
		if (extraUrl){
			return (
				<li key={index} className="component-item">
					{attendee.name}
				</li>
			)
		} else {
			return (
				<li key={index} className="component-item">
					<Attendee attendee={attendee}/>
				</li>
			)
		}
	})

	const checkLink = extraUrl ? <Link to={extraUrl}>Back</Link> : <Link to="/attendees/new">Add New</Link>

	return (
		<>
			<h3>All Attendees</h3>
	  	<ul className="component-list">
	  	  {attendeesNodes}
	  	</ul>
			{checkLink}
			<button><SearchContainer objects={attendees}/></button>
		</>
	)
}

 export default AttendeeList;
