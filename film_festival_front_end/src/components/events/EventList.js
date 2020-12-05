import React from 'react';
import Event from './Event.js';


const EventList = ({events}) => {

	if (events.length === 0){
	  return (<p>Loading...</p>)
	}

	const eventsNodes = events.map((event, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Event event={event} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {eventsNodes}
	  </ul>
	)
}
 export default EventList;