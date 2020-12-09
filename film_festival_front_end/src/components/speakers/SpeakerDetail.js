import React from 'react';
import {Link} from 'react-router-dom';

const SpeakerDetail = ({speaker}) => {

  if(!speaker){
    return <p>Loading...</p>
  }

  return (
    <>
      <h2 className="speakersTitle">{speaker.name}</h2>
      <img height={"200px"} src={speaker.headShot} alt=""/>
      <table className="speakersTable2">
        <tbody>
          <tr>
            <label className="speakersLabel">More Info</label>
            <a href={speaker.webUrl}>Link</a>
          </tr>
          <tr>
            <label className="speakersLabel">Accessibility Requirements</label>
            <p>{speaker.accessibilityRequirements}</p>
          </tr>
        </tbody>
      </table>
      <Link style={{ textDecoration: 'none' }} className="speakersActionButton" to={`/speakers/${speaker.id}/edit`}>Edit</Link>
      <Link style={{ textDecoration: 'none' }} className="speakersActionButton" to="/speakers">&lt; Back</Link>
      
    </>
  )

}

export default SpeakerDetail