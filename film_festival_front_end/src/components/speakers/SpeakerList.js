import React from 'react';
import Speaker from './Speaker.js';
import {Link} from 'react-router-dom';


const SpeakerList = ({speakers, extraUrl}) => {

	if (speakers.length === 0){
	  return (<p>Loading...</p>)
	}

	const speakersNodes = speakers.map((speaker, index) => {
		if (extraUrl){
			return (
				<li key={index} className="component-item">
					{speaker.name}
				</li>
			)
		} else {
			return (
				<li key={index} className="component-item">
					<Speaker speaker={speaker} />
				</li>
			)
		}
	})

	const checkLink = extraUrl ? <Link to={extraUrl}>Back</Link> : <Link to="/speakers/new">Add New</Link>

	return (
		<>
			<h3>All Speakers</h3>
	  	<ul className="component-list">
	  	  {speakersNodes}
	  	</ul>
			{checkLink}
		</>
	)
}
 export default SpeakerList;