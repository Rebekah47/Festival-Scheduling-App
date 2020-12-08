import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const AttendeeForm = ({attendee, onCreate, onUpdate}) => {

  const [stateAttendee, setStateAttendee] = useState(
    {
      name: "",
      age: 0,
      accessibilityRequirements: ""
    }
  )

  let heading = "";

  if(!attendee){
    heading = "Create Attendee"
  } else {
    heading = "edit - " + attendee.name
  }

  useEffect(() => {
    if(attendee){
      let currentAttendee = {...attendee};
      setStateAttendee(currentAttendee)
    }
  }, [attendee])

  const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedAttendee = {...stateAttendee};
    copiedAttendee[propertyName] = event.target.value;
    setStateAttendee(copiedAttendee)
  }

  const handleSubmit = function(event){
    event.preventDefault();
    if(stateAttendee.id){
      onUpdate(stateAttendee)
    } else {
      onCreate(stateAttendee)
    }
  }


  return(
    <>
    <h3 className="attendeeTitle">{heading}</h3>
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      type="text" 
      placeholder="Name" 
      name="name" 
      onChange={handleChange} 
      value={stateAttendee.name}
      required
    />
    <label>Age</label>
    <input 
      type="number" 
      placeholder="Age" 
      name="age" 
      onChange={handleChange} 
      value={stateAttendee.age}
      required
    />
    <label>Accessibility Requirements</label>
    <input 
      type="text"
      placeholder="Accessibility Requirements"
      name="accessibilityRequirements"
      onChange={handleChange}
      value={stateAttendee.accessibilityRequirements}
      required
    /> 
    <button style={{ textDecoration: 'none' }} className="attendeeActionButton" type="submit">Save</button>
    <Link style={{ textDecoration: 'none' }} className="attendeeActionButton" to="/attendees">&lt; Back</Link>
    </form>
    </>
  )
}

export default AttendeeForm;