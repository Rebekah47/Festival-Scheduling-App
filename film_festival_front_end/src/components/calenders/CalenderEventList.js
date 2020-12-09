import React from 'react';

const CalenderEventList = ({events, date}) => {

  if (events.length === 0){
    return(
      <p>Loading</p>
    )
  }

  const eventNodes = events.map ((event, index) => {
    if (event.startTime.substring(0,10) === date.toISOString().substring(0,10) && event.name !== "Attending"){
      return(
        <tr key={index}>
          <td>{event.name}</td>
          <td>{event.room.festival.name}</td>
          <td>{event.room.name}</td>
          <th>{event.startTime.substring(11,16)}</th>
          <th>{event.runTime}</th>
        </tr>
      )
    } else {
      return null
    }
  })

  return(
    <>
    <table>
      <tbody>
        <tr>
          <th>What</th>
          <th>Festival</th>
          <th>Room</th>
          <th>Start Time</th>
          <th>Run Time(minutes)</th>
        </tr>
        {eventNodes}
      </tbody>
    </table>
    </>
  )

}

export default CalenderEventList;