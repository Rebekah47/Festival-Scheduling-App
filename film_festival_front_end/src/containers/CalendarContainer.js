import React, {useState} from 'react';
import Calendar from'react-calendar';

const CalendarContainer = () => {

    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date);
      };
    
      return (
        <div>
          <Calendar onChange={onChange} value={date} />
          {console.log(date)}
          {date.toString()}
        </div>
      );
}

export default CalendarContainer;