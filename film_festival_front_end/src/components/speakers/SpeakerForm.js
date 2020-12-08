import React, {useEffect, useState} from 'react';

const SpeakerForm = ({speaker, onUpdate, onCreate}) => {

  const [stateSpeaker, setStateSpeaker] = useState({
    name:"",
    headShot:"",
    webUrl:"",
    accessibilityRequirements:""
  })

  let heading = "";

  if(!speaker){
    heading = "create speaker"
  } else {
    heading = "edit - " + speaker.name
  }

  useEffect(() => {
    if(speaker){
      let currentSpeaker = {...speaker};
      setStateSpeaker(currentSpeaker);
    }
  }, [speaker])

  const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedSpeaker = {...stateSpeaker};
    copiedSpeaker[propertyName] = event.target.value;
    setStateSpeaker(copiedSpeaker);
  }

  const handleSubmit = function(event){
    event.preventDefault();
    if(stateSpeaker.id){
      onUpdate(stateSpeaker)
    } else {
      onCreate(stateSpeaker)
    }
  }

  return (
    <>
      <h3>{heading}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={stateSpeaker.name}
        />
        <input 
          type="text"
          placeholder="HeadShot Url"
          name="headShot"
          onChange={handleChange}
          value={stateSpeaker.headShot}
        />
        <input 
          type="text"
          placeholder="Web Url"
          name="webUrl"
          onChange={handleChange}
          value={stateSpeaker.webUrl}
        />
        <input 
          type="text"
          placeholder="Accessibility Requirements"
          name="accessibilityRequirements"
          onChange={handleChange}
          value={stateSpeaker.accessibilityRequirements}
        />
        <button type="submit">Save</button>
      </form>
    </>
  )

}

export default SpeakerForm;