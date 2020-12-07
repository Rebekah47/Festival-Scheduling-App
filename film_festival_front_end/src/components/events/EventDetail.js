import React from 'react';
import Event from "./Event";
import {Link} from 'react-router-dom';const EventDetail = ({oneEvent}) => {    
  
  if (!oneEvent){
      return "Loading..."
    }    
    return(
      <h1>I am an Event</h1>
    )}
    
    
    export default EventDetail;