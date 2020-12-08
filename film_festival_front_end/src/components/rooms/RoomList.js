import React from 'react';
import {Link} from 'react-router-dom';

const RoomList = ({rooms, festival}) => {

  if (rooms.length === 0){
    return "Loading"
  }

  const roomNodes = rooms.map((room, index) => {
    if (index !== 0){
      return(
        <tr key={index}>
          <td>{room.name} - Link</td>
          <th>{room.capacity}</th>
          <th>{room.events.length}</th>
          <td><Link to={`/rooms/festival/${festival.id}/room/${room.id}/edit`}>Edit</Link></td>
        </tr>
      )
    } else {
      return(
        <tr key={index}>
          <td>Full Festival - Link</td>
          <th>{room.capacity}</th>
          <th>All Events</th>
        </tr>
      )
    }
  })

  return(
    <>
      <h1>{festival.name} - Rooms</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>No Events</th>
          </tr>
          {roomNodes}
        </tbody>
      </table>
      <Link to={`/rooms/festival/${festival.id}/new`}>Create New</Link>
    </>
  )
}

export default RoomList;