import React, {useState, useEffect} from 'react';

const FestivalForm = ({festival, onUpdate, onCreate}) => {

  const [stateFestival, setStateFestival] = useState({
    name:"",
    startDate:"2020-01-01",
    endDate:"2100-12-12"
  })

  const [stateCapacity, setStateCapacity] = useState(0)

  let heading;

  useEffect(() => {
    if(festival){
      let currentFestival = {
        id:festival.id,
        name:festival.name,
        startDate:festival.startDate,
        endDate:festival.endDate
      };
      setStateFestival(currentFestival);
      setStateCapacity(festival.rooms[0].capacity)
    }
  }, [festival]);

  if(!festival){
    heading = "Create Festival";
  } else {
    heading = "Edit " + festival.name;
  }

  const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedFestival = {...stateFestival};
    copiedFestival[propertyName] = event.target.value;
    setStateFestival(copiedFestival);
  }

  const handleCapacityChange = function(event){
    setStateCapacity(event.target.value)
  }

  const handleSubmit = function(event){
    event.preventDefault();
    if(stateFestival.id){
      let room = {
        "id": festival.rooms[0].id,
        "name": "Attending",
        "capacity": stateCapacity,
        "festival": stateFestival
      }
      onUpdate(stateFestival, room);
    } else {
      onCreate(stateFestival, stateCapacity);
    }
  }

  return (
    <>
      <h3>{heading}</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text"
          placeholder="festival name"
          name="name"
          onChange={handleChange}
          value={stateFestival.name}
          required
        />
        <label>Start Date:</label>
        <input
        type="date"
        name="startDate"
        onChange={handleChange}
        value={stateFestival.startDate}
        required
        max={stateFestival.endDate}
        />
        <label>End Date:</label>
        <input
        type="date"
        name="endDate"
        onChange={handleChange}
        value={stateFestival.endDate}
        required
        min={stateFestival.startDate}
        />
        <label>Capacity:</label>
        <input
        type="number"
        name="capacity"
        onChange={handleCapacityChange}
        required
        value={stateCapacity}
        />
        <button type="submit">Save</button>
      </form>
    </>
  )

}

export default FestivalForm;
