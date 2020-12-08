import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const SpeakerForm = ({speaker, onUpdate, onCreate}) => {

  const [stateSpeaker, setStateSpeaker] = useState({
    name:"",
    headShot:"",
    webUrl:"",
    accessibilityRequirements:""
  })

  let heading = "";

  if(!speaker){
    heading = "Create Speaker"
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
      <h3 className="speakersTitle">{heading}</h3>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input 
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={stateSpeaker.name}
          required
        />
        <label>HeadShot URL</label>
        <input 
          type="text"
          placeholder="HeadShot Url"
          name="headShot"
          onChange={handleChange}
          value={stateSpeaker.headShot}
          required
        />
        <label>WebSite URL</label>
        <input 
          type="text"
          placeholder="Web Url"
          name="webUrl"
          onChange={handleChange}
          value={stateSpeaker.webUrl}
          required
        />
        <label>Accessibility Requirements</label>
        <input 
          type="text"
          placeholder="Accessibility Requirements"
          name="accessibilityRequirements"
          onChange={handleChange}
          value={stateSpeaker.accessibilityRequirements}
          required
        />
        <button className="speakersActionButton" type="submit">Save</button>
        <Link style={{ textDecoration: 'none' }} className="speakersActionButton" to="/speakers">&lt; Back</Link>
      </form>
    </>
  )

}

export default SpeakerForm;