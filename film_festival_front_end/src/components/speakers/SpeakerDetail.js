import React from 'react';
import {Link} from 'react-router-dom';

const SpeakerDetail = ({speaker}) => {

  if(!speaker){
    return <p>Loading...</p>
  }

  return (
    <>
      <h2 className="speakersTitle">{speaker.name}</h2>
      <table className="speakersTable2">
        <tbody>
          <tr>
            <label className="speakersLabel">Website URL:</label>
            <a href={speaker.webUrl}>{speaker.webUrl}</a>
          </tr>
          <tr>
            <label className="speakersLabel">Headshot URL:</label>
            <a href={speaker.headShot}>{speaker.headShot}</a>
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