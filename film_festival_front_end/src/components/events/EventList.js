import React from 'react';
import Event from './Event.js';
import EventDetail from './EventDetail.js';
import {Link} from 'react-router-dom';
const EventList = ({events, festivals}) => {
	console.log("hi");
	console.log(events);	
	
	if (events.length === 0){
	  return (<p>Loading...</p>)
	}	
	
	const eventsNodes = events.map((oneEvent, index) => {
		return(
		<li key={index} className="component-item">
	    <div className="component">
			<h1>{oneEvent.name}</h1>
	    <Event oneEvent={oneEvent} />
		<EventDetail oneEvent={oneEvent}/>
	    </div>
	    </li>
		)	})	
	return (
	  <ul className="component-list">
     {eventsNodes}
		<h1>I am an event list</h1>
	  </ul>
	)
}
 export default EventList;