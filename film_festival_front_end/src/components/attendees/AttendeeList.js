import React from 'react';
import Attendee from './Attendee.js';
import {Link} from 'react-router-dom';
import SearchContainer from '../../containers/SearchContainer.js';
import './Attendee.css';


const AttendeeList = ({attendees, extraUrl}) => {

	if (attendees.length === 0){
	  return (<p>Loading...</p>)
	}

	const attendeesNodes = attendees.map((attendee, index) => {
		if (extraUrl){
			return (
				<Link key={index} style={{ textDecoration: 'none' }} className="attendeeButtonWrap">
					{attendee.name}
				</Link>
			)
		} else {
			return (
				<Link key={index} style={{ textDecoration: 'none' }} className="attendeeButtonWrap">
					<Attendee attendee={attendee}/>
				</Link>
			)
		}
	})

	const checkLink = extraUrl ? <Link to={extraUrl}>Back</Link> : 
	<Link style={{ textDecoration: 'none' }} className="attendeeActionButton" to="/attendees/new">Add New</Link>

	return (
		<>
			<h3 className="attendeeTitle">All Attendees</h3>
	  	<ul className="attendeeTable">
	  	  {attendeesNodes}
	  	</ul>
			{checkLink}
		<SearchContainer objects={attendees}/>
		</>
	)
}

 export default AttendeeList;
