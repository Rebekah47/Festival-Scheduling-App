import React from 'react';
import {Link} from 'react-router-dom';

const FestivalList = ({festivals}) => {

  if(festivals.length === 0){
    return "Loading"
  }

  const festivalNodes = festivals.map((festival, index) => {
    return(
      <tr key={index}>
        <td>
          <Link to={"/festivals/" + festival.id} >
            {festival.name}
          </Link>
        </td>
        <td>{festival.startDate}</td>
        <td>{festival.endDate}</td>
      </tr>
    )
  })

  return(
    <>
    <h1>Festivals</h1>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
        {festivalNodes}
      </tbody>
    </table>
    <Link to="/festivals/new">Create New</Link>
    </>
  )
}

export default FestivalList;