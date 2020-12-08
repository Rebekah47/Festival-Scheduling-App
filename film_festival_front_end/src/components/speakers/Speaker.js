import React from 'react';
import {Link} from 'react-router-dom';

const Speaker = ({speaker}) => {

  if (!speaker){
    return "Loading..."
  }

  const url = "/speakers/" + speaker.id;

  return (
    <>
    <Link to = {url} className="name">
      {speaker.name}
    </Link>
    </>
  )

}

export default Speaker;