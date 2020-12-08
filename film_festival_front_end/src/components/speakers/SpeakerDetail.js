import React from 'react';
import {Link} from 'react-router-dom';

const SpeakerDetail = ({speaker}) => {

  if(!speaker){
    return <p>Loading...</p>
  }

  return (
    <>
      <h2>{speaker.name}</h2>
      <table>
        <tbody>
          <tr>
            <td>website url:</td>
            <td>{speaker.webUrl}</td>
          </tr>
          <tr>
            <td>headshot url:</td>
            <td>{speaker.headShot}</td>
          </tr>
          <tr>
            <td>Accessibility Requirements</td>
            <td>{speaker.accessibilityRequirements}</td>
          </tr>
        </tbody>
      </table>
      <Link to={`/speakers/${speaker.id}/edit`}>Edit</Link>
    </>
  )

}

export default SpeakerDetail