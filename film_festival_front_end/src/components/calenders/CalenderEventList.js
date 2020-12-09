import React, {useState, useEffect} from 'react';
const CalenderEventList = ({events, date}) => {
  const [stateEvents, setStateEvents] = useState(null)
  useEffect(() => {
    setStateEvents([...events])
  }, [events])
  if (stateEvents === null){
    return(
      <p>Loading</p>
    )
  }
  let eventNodes = stateEvents.map ((event, index) => {
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
    }
  })
  const handleFestivalClick = () => {
    let copiedState = [...events]
    const sortedbyFestival = copiedState.sort(function(a, b){
      const fest1 = a.name.toUpperCase();
      const fest2 = b.name.toUpperCase();
      if (fest1 < fest2){
        return -1
      } if (fest2 < fest1){
        return 1
      } 
      return 0
    })
    setStateEvents(sortedbyFestival)

    }
  const handleRoomClick = () => {
    let copiedState = [...events]
    const sortedbyRoom = copiedState.sort(function(a, b){
      const fest1 = a.room.name.toUpperCase();
      const fest2 = b.room.name.toUpperCase();
      if (fest1 < fest2){
        return -1
      } if (fest2 < fest1){
        return 1
      } 
      return 0
    })
    setStateEvents(sortedbyRoom)
  }
  const handleTimeClick = () => {
  }
  const handleRunningClick = () => {
    let copiedState = [...events]
    console.log(copiedState)
    const sortedByTime = copiedState.sort(function(a, b){
      return a.runTime-b.runTime
    })
    setStateEvents(sortedByTime)
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

// import React, {useState, useEffect} from 'react';

// const CalenderEventList = ({events, date}) => {

//   const [nodes, setNodes] = useState([]);

//   if (events.length === 0){
//     return(
//       <p>Loading</p>
//     )
//   }

//   let eventNodes = events.map ((event, index) => {
//     if (event.startTime.substring(0,10) === date.toISOString().substring(0,10)){
//       return(
//         <tr key={index}>
//           <td>{event.name}</td>
//           <td>{event.room.festival.name}</td>
//           <td>{event.room.name}</td>
//           <th>{event.startTime.substring(11,16)}</th>
//           <th>{event.runTime}</th>
//         </tr>
//       )
//     } else {
//       return null
//     }
//   })


//   const handleFestivalClick = () => {
//     console.log(nodes)


//     const newNodes = nodes.sort(function (a, b){
//         var festName1 = a
//         var festName2 = b

//         if(festName1 == null && festName2 == null){
//           return 0
//         }

//         if(festName1 == null){
//           return 1
//         }

//         if(festName2 == null){
//           return -1
//         }

//         if (festName1.props.children[1].props.children.toUpperCase() < festName2.props.children[1].props.children.toUpperCase()) {
//           return -1;
//         }
//         if (festName2.props.children[1].props.children.toUpperCase() < festName1.props.children[1].props.children.toUpperCase()){
//           return 1
//         }
//         return 0
//       })
//       console.log(newNodes)

//     }


//   const handleRoomClick = () => {
//     console.log(nodes)


//     const newNodes = nodes.sort(function (a, b){
//         var festName1 = a
//         var festName2 = b

//         if(festName1 == null && festName2 == null){
//           return 0
//         }

//         if(festName1 == null){
//           return 1
//         }

//         if(festName2 == null){
//           return -1
//         }

//         if (festName1.props.children[2].props.children.toUpperCase() > festName2.props.children[2].props.children.toUpperCase()) {
//           return -1;
//         }
//         if (festName2.props.children[2].props.children.toUpperCase() > festName1.props.children[2].props.children.toUpperCase()){
//           return 1
//         }
//         return 0
//       })
//       console.log(newNodes)
//       setNodes(newNodes)

//   }

//   const handleTimeClick = () => {

//   }

//   const handleRunningClick = () => {

//   }



//   return(
//     <>
//     <table>
//       <tbody>
//         <tr>
//           <th>What</th>
//           <th><button onClick={handleFestivalClick}>Festival</button></th>
//           <th><button onClick={() => {handleRoomClick()}}>Room</button></th>
//           <th><button onClick={() => {handleTimeClick()}}>Start Time</button></th>
//           <th><button onClick={() => {handleRunningClick()}}>Run Time(minutes)</button></th>
//         </tr>
//         {eventNodes}
//       </tbody>
//     </table>
//     </>
//   )

// }

// export default CalenderEventList;