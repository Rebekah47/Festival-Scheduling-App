import React from 'react';
import {Link} from 'react-router-dom';

const EventList = ({events, festivals}) => {
	
	if (events.length === 0){
	  return (<p>Loading...</p>)
	}	
	
	const eventsNodes = events.map((event, index) => {

		if (event.eventType.type !== "Attending"){
			return(
				<tr key={index}>
					<td>{event.name}</td>
					<td>{event.room.festival.name}</td>
					<td>{event.room.name}</td>
					<td>{event.startTime.substring(0, 10)}</td>
					<th>{event.startTime.substring(11, 16)}</th>
					<td>{event.eventType.type}</td>
					<td><Link to={`/events/${event.id}/edit`}>edit</Link></td>
				</tr>
			)
		} else {
			return null
		}

	})	

	return (
		<>
			<h2>All Events</h2>
			<table className="events-table">
				<tbody>
					<tr>
						<th>Event Name</th>
						<th>Festival</th>
						<th>Room</th>
						<th>Date</th>
						<th>Start Time</th>
						<th>Type of Event</th>
					</tr>
					{eventsNodes}
				</tbody>
			</table>
			<Link to='/events/new'>Create New</Link>
		</>
	)
}
 export default EventList;