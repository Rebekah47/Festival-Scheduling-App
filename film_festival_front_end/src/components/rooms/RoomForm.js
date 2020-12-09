import React, {useState, useEffect} from 'react'

const RoomForm = ({festival, room, onUpdate, onCreate}) => {

  const [stateRoom, setStateRoom] = useState({
    name:"",
    capacity:0,
    festival:null
  })

  let heading;

  useEffect(() => {
    if(room){
      let currentRoom = {
        id:room.id,
        name:room.name,
        capacity:room.capacity,
        festival:room.festival
      };
      setStateRoom(currentRoom);
    }
  }, [room]);

  if(!room){
    heading = "Create Room";
  } else {
    heading = "Edit " + room.name;
  }

  const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedRoom = {...stateRoom};
    copiedRoom[propertyName] = event.target.value;
    setStateRoom(copiedRoom)
  }

  const handleSubmit = function(event){
    event.preventDefault();
    if(stateRoom.id){
        onUpdate(stateRoom);
    } else {
        onCreate(stateRoom);
    }
  }

  return (
    <>
      <h3>{heading}</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="room name"
          name="name"
          onChange={handleChange}
          value={stateRoom.name}
          required
        />
        <label>Capacity:</label>
        <input
          type="number"
          name="capacity"
          onChange={handleChange}
          value={stateRoom.capacity}
          required
        />
        <button type="submit">Save</button>
      </form>
    </>
  )

}

export default RoomForm;