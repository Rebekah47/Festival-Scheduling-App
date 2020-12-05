import React from 'react';

const Festival = ({festival}) => {

  if (!festival){
    return "Loading"
  }

  return (
    <>
      {festival.name}
      {festival.startDate}
    </>
  )

}

export default Festival;