import React, {useState, useEffect} from 'react';

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
    heading = "create attendee"
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
    <h3>{heading}</h3>
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      placeholder="Name" 
      name="name" 
      onChange={handleChange} 
      value={stateAttendee.name} 
    />
    <input 
      type="number" 
      placeholder="Age" 
      name="age" 
      onChange={handleChange} 
      value={stateAttendee.age}
    />
    <input 
      type="text"
      placeholder="Accessibility Requirements"
      name="accessibilityRequirements"
      onChange={handleChange}
      value={stateAttendee.accessibilityRequirements}
    /> 
    <button type="submit">Save</button>
    </form>
    </>
  )
}

export default AttendeeForm;