import React from 'react';
import Speaker from './Speaker.js';


const SpeakerList = ({speakers}) => {

	if (speakers.length === 0){
	  return (<p>Loading...</p>)
	}

	const speakersNodes = speakers.map((speaker, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Speaker speaker={speaker} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {speakersNodes}
	  </ul>
	)
}
 export default SpeakerList;