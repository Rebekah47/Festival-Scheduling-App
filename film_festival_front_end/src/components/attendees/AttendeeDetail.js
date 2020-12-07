import React from 'react';
import Attendee from "./Attendee";
import {Link} from 'react-router-dom';

const AttendeeDetail = ({attendee, events, onDelete, onUpdate}) => {
  

    if (!attendee){
      return "Loading..."
    }

    console.log("hello")


  // const handleDelete = () => {
  //   onDelete(attendee.id)
  // }

  // const deleteEvent = (eventIndex) => {
  //   let copiedAttendee = {...attendee}
  //   copiedAttendee.events.splice(eventIndex, 1)
  //   onUpdate(attendee)
  // }

  // const attendeeHasEvent = () =>{
  //   return attendee.events.some((attendeeEvent) => {
  //     return event.id === attendeeEvent.id
  //   })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const index = parseInt(event.target.attendees.value)
  //   const event = events[index];
  //   attendee.events.push(event)
  //   onUpdate(attendee);
  // }

  // const attendeeEvents = attendee.events.map((event, index) => {
  //   return <li key={index}>
  //   {event.name}<button onClick={() => deleteEvent(index)}>Delete</button>
  //   </li>
  // })

  // const editUrl = "/attendees/" + attendee.id + "/edit"

  // const eventOptions = events.map((event, index) => {
  //   if (!attendeeHasEvent(event)){
  //     return (
  //       <option key={index} value={index}>{event.name}</option>
  //     )
  //   } else {
  //     return null
  //   }
  // })


  return (
    <div className = "component">
    <Attendee attendee = {attendee}/>
    <h1>Hello</h1>
    {attendee.name}
    </div>
  )
}

export default AttendeeDetail;
