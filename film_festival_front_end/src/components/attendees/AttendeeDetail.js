import React from 'react';
import {Link} from 'react-router-dom';

const AttendeeDetail = ({attendee}) => {
  

    if (!attendee){
      return "Loading..."
    }

  return (
    <>
      <h2>{attendee.name}</h2>
      <table>
        <tbody>
          <tr>
            <td>Age:</td>
            <td>{attendee.age}</td>
          </tr>
          <tr>
            <td>Accessibility Requirements</td>
            <td>{attendee.accessibilityRequirements}</td>
          </tr>
        </tbody>
      </table>
      <Link to={`/attendees/${attendee.id}/edit`}>Edit</Link>
    </>
  )
}

export default AttendeeDetail;
