import React, {useState, useEffect} from 'react';
import Calendar from'react-calendar';
import CalenderEventList from '../components/calenders/CalenderEventList';
import Request from '../helpers/Request.js'

const CalendarContainer = () => {

  const [date, setDate] = useState(new Date())
  const [events, setEvents ] = useState([]);

  const requestAll = function(){
    const request = new Request();
    const eventsPromise = request.get('/api/events')  

    Promise.all([eventsPromise])
    .then((data) => {
        setEvents(data[0])
    })
    
  }    

  useEffect(() => {
    requestAll()
  }, []) 

  const onChange = date => {
      setDate(date);
  };
  
  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <h4>{date.toDateString()}</h4>
      <CalenderEventList events={events} date={date}/>
    </div>
  );

}

export default CalendarContainer;