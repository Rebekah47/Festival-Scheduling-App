import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Trailer from './Trailer.js'
import SearchContainer from '../../containers/SearchContainer.js';

const EventList = ({events, extraUrl}) => {

	const [trailer, setTrailer] = useState("");
	
	if (events.length === 0){
	  return (<p>Loading...</p>)
	}	

	const getEditUrl = function(id){
		if (extraUrl){
			return `${extraUrl}/events/${id}/edit`
		} else {
			return `/events/${id}/edit`
		}
	}

	const getNewUrl = function(){
		if (extraUrl){
			return `${extraUrl}/events/new`
		} else {
			return `/events/new`
		}
	}

	const handleClick = (url) => {
		setTrailer(url)

	}
	
	const eventsNodes = events.map((event, index) => {

		const trailerLink = event.trailerLink;

		if (event.eventType.type !== "Attending"){
			return(
				<tr key={index}>
					<td>{event.name}</td>
					<td>{event.room.festival.name}</td>
					<td>{event.room.name}</td>
					<td>{event.startTime.substring(0, 10)}</td>
					<th>{event.startTime.substring(11, 16)}</th>
					<td>{event.eventType.type}</td>
					<th>{event.runTime}</th>
					<td><button onClick={() => {handleClick(event.trailerLink)}}>Click for Preview</button></td>
					<td><Link to={getEditUrl(event.id)}>edit</Link></td>
				</tr>
			)
		} else {
			return (
			null
			)
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
						<th>Run Time</th>
						<th>Trailer</th>
					</tr>
					{eventsNodes}
				</tbody>
			</table>
			<Link to={getNewUrl}>Create New</Link>
			<Trailer trailerLink={trailer}/>
			<button><SearchContainer objects={events}/></button>
		
		</>
	)
}
 export default EventList;