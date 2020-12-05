import React from 'react';
import Festival from './Festival.js'

const FestivalList = ({festivals}) => {

  if(festivals.length === 0){
    return "Loading"
  }

  const festivalNodes = festivals.map((festival, index) => {
    return(
        <li key={index} className="festival-item">
          <Festival festival={festival}/>
        </li>
    )
  })

  return(
    <>
      {festivalNodes}
    </>
  )
}

export default FestivalList;