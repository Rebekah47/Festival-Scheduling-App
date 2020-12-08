import React from 'react';
import Speaker from './Speaker.js';
import {Link} from 'react-router-dom';


const SpeakerList = ({speakers}) => {

	if (speakers.length === 0){
	  return (<p>Loading...</p>)
	}

	const speakersNodes = speakers.map((speaker, index) => {
	  return (
	    <li key={index} className="component-item">
	    	<Speaker speaker={speaker} />
	    </li>
	  )
	})

	return (
		<>
			<h3>All Speakers</h3>
	  	<ul className="component-list">
	  	  {speakersNodes}
	  	</ul>
			<Link to="/speakers/new">Add New</Link>
		</>
	)
}
 export default SpeakerList;