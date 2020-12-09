import React, {useState} from 'react';

const CalenderEventList = ({events, date}) => {

  if (events.length === 0){
    return(
      <p>Loading</p>
    )
  }

  let eventNodes = events.map ((event, index) => {
    if (event.startTime.substring(0,10) === date.toISOString().substring(0,10)){
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

  const handleFestivalClick = () => {
    console.log(eventNodes)
    // const newNodes = eventNodes.sort(function (a, b){
    //     var festName1 = a.props.children[1].props.children.toUpperCase();
    //     var festName2 = b.props.children[1].props.children.toUpperCase();
    //     if (festName1 < festName2) {
    //       return -1;
    //     }
    //     if (festName2 < festName1){
    //       return 1
    //     }
    //     return 0
    //   })
    //   console.log(newNodes)

    }


  const handleRoomClick = () => {

  }

  const handleTimeClick = () => {

  }

  const handleRunningClick = () => {

  }



  return(
    <>
    <table>
      <tbody>
        <tr>
          <th>What</th>
          <th><button onClick={handleFestivalClick}>Festival</button></th>
          <th><button onClick={() => {handleRoomClick()}}>Room</button></th>
          <th><button onClick={() => {handleTimeClick()}}>Start Time</button></th>
          <th><button onClick={() => {handleRunningClick()}}>Run Time(minutes)</button></th>
        </tr>
        {eventNodes}
      </tbody>
    </table>
    </>
  )

}

export default CalenderEventList;