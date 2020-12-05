import React, {useState, useEffect} from 'react';

const AttendeeForm = ({attendee, events, onCreate, onUpdate}) => {

const [stateAttendee, setStateAttendee] = useState(
    {
        name: "",
        age: 0,
        access_regs: ""
    }
)

const addAttendeePropToState = () => {
    if(attendee){
        let copiedAttendee = {...attendee}
        setStatePirate(copiedAttendee)
    }
}

const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedAttendee = {...stateAttendee}
    copiedAttendee[propertyName] = event.target.value;
    setStateAttendee(copiedAttendee)
}

const handleEvent = function(event){
    const index = parseInt(event.target.value)
    const selectedEvent = events[index]
    let copiedAttendee = {...stateAttendee};
    copiedAttendee['event'] = selectedEvent
    setStateAttendee(copiedAttendee)
}

const handleSubmit = function(event){
    event.preventDefault();
    if(stateAttendee.id){  
        onUpdate(stateAttendee)
      } else {
        onCreate(stateAttendee);
      }
}

const findEventIndex = function(){
    if(attendee){
      return events.findIndex(event => attendee.event.id === event.id)
    } else {
      return null;
    }
  }

useEffect(()=>{
    addAttendeePropToState()
  }, [attendee])

const eventOptions = events.map((event, index) => {
    return <option key={index} value={index}>{event.name}</option>
})

let heading = "";

if (!attendee){
    heading = "Create Attendee"
  } else {
    heading = "Edit " + attendee.name;
  }

if (!events.length === 0){
    return <p>Loading...</p>
    }
  return(
    <>
    <h3>{heading}</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateAttendee.name} />
    <input type="number" placeholder="Age" name="age" onChange={handleChange} value={stateAttendee.age}/>
    <select name="event" onChange={handleEvent} defaultValue={findEventIndex() || 'select-event'}>
    <option disabled value='select-event'>Select an Event</option>
        {eventOptions}
    </select>   
    <button type="submit">Save</button>
    </form>
    </>
  )
}

export default AttendeeForm;