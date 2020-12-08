import React from 'react';
import Speaker from './Speaker.js';
import {Link} from 'react-router-dom';
import SearchContainer from '../../containers/SearchContainer.js';
import './Speakers.css';

const SpeakerList = ({speakers, extraUrl}) => {

	if (speakers.length === 0){
	  return (<p>Loading...</p>)
	}

	const speakersNodes = speakers.map((speaker, index) => {
		if (extraUrl){
			return (
				<Link style={{ textDecoration: 'none' }} className="speakersButtonWrap" color="white">
					{speaker.name}
				</Link>
			)
		} else {
			return (
				<Link key={index} style={{ textDecoration: 'none' }} className="speakersButtonWrap" color="white">
					<Speaker style={{ textDecoration: 'none' }} className="speakersButtonWrap" color="white" speaker={speaker} />
				</Link>
			)
		}
	})

	const checkLink = extraUrl ? <Link to={extraUrl}>Back</Link> : <Link style={{ textDecoration: 'none' }} className="speakersActionButton" to="/speakers/new">Add New</Link>

	return (
		<>
			<h3 className="speakersTitle">All Speakers</h3>
	  	<ul className="speakersTable">
	  	  {speakersNodes}
	  	</ul>
			{checkLink}
			<button><SearchContainer objects={speakers}/></button>
		</>
	)
}
 export default SpeakerList;