import React from 'react';
import {Link} from 'react-router-dom';

const FestivalDetail = ({festival}) => {

  if(!festival){
    return <p>Loading...</p>
  }

  const getDateAsWords = function(date){
    const year = parseInt(date.substring(0, 4));
    const monthNo = parseInt(date.substring(5, 7));
    const dayNo = parseInt(date.substring(8,10));
    const jsDate = new Date(Date.UTC(year, monthNo-1, dayNo))
    const monthName = jsDate.toLocaleString('default', {month: 'long'})
    let suffix;
    if (dayNo === 1 || dayNo === 21 || dayNo ===31){
      suffix = "st"
    } else if (dayNo === 2 || dayNo === 22){
      suffix = "nd"
    } else if (dayNo === 3 || dayNo === 23){
      suffix = "rd"
    } else {
      suffix = "th"
    }
    const dateString = `${dayNo}${suffix} of ${monthName} ${year}`
    return dateString
  }

  const editUrl = "/festivals/" + festival.id +"/edit";
  const roomUrl = "/rooms/festival/" + festival.id;

  return(
    <>
      <h2>{festival.name}</h2>
      <table className="festival-deets">
        <tbody>
          <tr>
            <td>Start Date:</td>
            <th>{getDateAsWords(festival.startDate)}</th>
          </tr>
          <tr>
            <td>End Date:</td>
            <th>{getDateAsWords(festival.endDate)}</th>
          </tr>
          <tr>
            <td>Capacity:</td>
            <td>{festival.rooms[0].capacity}</td>
          </tr>
          <tr>
            <td>Rooms:</td>
            <td><a href={roomUrl}>Link</a></td>
          </tr>
          <tr>
            <td>Events:</td>
            <td>Link</td>
          </tr>
          <tr>
            <td>Guests:</td>
            <td>Link</td>
          </tr>
          <tr>
            <td>Speakers:</td>
            <td>Link</td>
          </tr>
        </tbody>
      </table>
      <Link to="/festivals">&lt; Back</Link><Link to={editUrl}>Edit</Link>
    </>
  )

}

export default FestivalDetail;