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


    const newNodes = eventNodes.sort(function (a, b){
        var festName1 = a
        var festName2 = b

        if(festName1 == null && festName2 == null){
          return 0
        }

        if(festName1 == null){
          return 1
        }

        if(festName2 == null){
          return -1
        }

        if (festName1.props.children[1].props.children.toUpperCase() < festName2.props.children[1].props.children.toUpperCase()) {
          return -1;
        }
        if (festName2.props.children[1].props.children.toUpperCase() < festName1.props.children[1].props.children.toUpperCase()){
          return 1
        }
        return 0
      })
      console.log(newNodes)

    }


  const handleRoomClick = () => {
    console.log(eventNodes)


    const newNodes = eventNodes.sort(function (a, b){
        var festName1 = a
        var festName2 = b

        if(festName1 == null && festName2 == null){
          return 0
        }

        if(festName1 == null){
          return 1
        }

        if(festName2 == null){
          return -1
        }

        if (festName1.props.children[2].props.children.toUpperCase() > festName2.props.children[2].props.children.toUpperCase()) {
          return -1;
        }
        if (festName2.props.children[2].props.children.toUpperCase() > festName1.props.children[2].props.children.toUpperCase()){
          return 1
        }
        return 0
      })
      console.log(newNodes)
      eventNodes = newNodes

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