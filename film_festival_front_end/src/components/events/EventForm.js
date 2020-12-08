import React, {useEffect, useState} from 'react';

const EventForm = ({event, eventTypes, festivals, rooms, onUpdate, onCreate}) => {

  const [stateEvent, setStateEvent] = useState({
    ageRating:0,
    eventType:null,
    name:"",
    room:null,
    startTime:"",
    runTime:0,
    trailerLink:""
  })

  const [stateFestivalId, setStateFestivalId] = useState(0)

  let heading = "";

  if (!event){
    heading = "Create Event"
  } else {
    heading = "Edit - " + event.name
  }

  useEffect(() => {
    if(event){
      let currentEvent = {
        ageRating:0,
        eventType:event.eventType,
        name:event.name,
        room:event.room,
        startTime:event.startTime,
        runTime:event.runTime,
        trailerLink:event.trailerLink,
        id:event.id
      };
      setStateEvent(currentEvent);
      setStateFestivalId(event.room.festival.id)
    }
  }, [event]);

  if(festivals.length === 0){
    return <p>Loading...</p>
  }

  const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedEvent = {...stateEvent};
    copiedEvent[propertyName] = event.target.value;
    setStateEvent(copiedEvent);
  }

  const handleSubmit = function(event){
    event.preventDefault();
    if(stateEvent.id){
      onUpdate(stateEvent)
    } else {
      onCreate(stateEvent)
    }
  }

  const handleEventType = function(event){
    const index = parseInt(event.target.value);
    const selectedEventType = eventTypes[index];
    let copiedEvent = {...stateEvent}
    copiedEvent['eventType'] = selectedEventType;
    setStateEvent(copiedEvent);
  }

  const handleFestival = function(event){
    const index = parseInt(event.target.value);
    setStateFestivalId(index + 1);
  }

  const handleRoom = function(event){
    const index = parseInt(event.target.value);
    const selectedRoom = rooms[index];
    let copiedEvent = {...stateEvent}
    copiedEvent['room'] = selectedRoom
    setStateEvent(copiedEvent)
  }

  const findEventTypeIndex = function(){
    if(event){
      return eventTypes.findIndex(eventType => event.eventType.id === eventType.id);
    } else {
      return null;
    }
  }

  const findFestivalIndex = function(){
    if(event){
      return festivals.findIndex(festival => event.room.festival.id === festival.id);
    } else {
      return null
    }
  }

  const findRoomIndex = function(){
    if(event){
      return rooms.findIndex(room => event.room.id === room.id);
    } else {
      return null
    }
  }

  const eventTypeOptions = eventTypes.map((eventType, index) => {
    if(index !== 0){
      return <option key={index} value={index}>{eventType.type}</option>
    } else {
      return null
    }
  })
  
  const festivalOptions = festivals.map((festival, index) => {
    return <option key={index} value={index}>{festival.name}</option>
  })

  const roomOptions = rooms.map((room, index) => {
    if (room.festival.id === stateFestivalId && room.name !== "Attending"){
      return <option key={index} value={index}>{room.name}</option>
    } else {
      return null
    }
  })

  return (
    <>
      <h3>{heading}</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={stateEvent.name}
        />
        <label>Start Date and Time:</label>
        <input 
          type="datetime-local"
          name="startTime"
          onChange={handleChange}
          value={stateEvent.startTime}
        />
        <label>Age Rating:</label>
        <input
          type="number"
          name="ageRating"
          onChange={handleChange}
          value={stateEvent.ageRating}
        />
        <label>Run Time(minutes):</label>
        <input
          type="number"
          name="runTime"
          onChange={handleChange}
          value={stateEvent.runTime}
        />
        <label>Preview Link:</label>
        <input
          type="text"
          name="trailerLink"
          onChange={handleChange}
          value={stateEvent.trailerLink}
        />
        <label>Event Type:</label>
        <select name="eventType" onChange={handleEventType} defaultValue={findEventTypeIndex() || 'select event type'}>
          <option disabled value='select event type'>Select an Event Type</option>
          {eventTypeOptions}
        </select>
        <label>Select Festival:</label>
        <select name="festival" onChange={handleFestival} defaultValue={findFestivalIndex() || 'select festival'}>
          <option disabled value='select festival'>Select Festival</option>
          {festivalOptions}
        </select>
        <label>Select Room:</label>
        <select name="room" onChange={handleRoom} defaultValue={findRoomIndex() || 'select room'}>
          <option disabled value='select room'>Select Room</option>
          {roomOptions}
        </select>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default EventForm;