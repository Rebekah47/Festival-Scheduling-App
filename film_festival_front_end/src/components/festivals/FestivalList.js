import React from 'react';
import {Link} from 'react-router-dom';
import './Festival.css'
// import Calender from './Calender.js';

const FestivalList = ({festivals}) => {

  if(festivals.length === 0){
    return "Loading"
  }

  const festivalNodes = festivals.map((festival, index) => {
    return(
      <tr key={index}>
        <td className="date">{festival.startDate}</td>
        <td>
          <Link style={{ textDecoration: 'none' }} className="festivalwrap" to={"/festivals/" + festival.id} >
            {festival.name}
          </Link>
        </td>
        <td className="date">{festival.endDate}</td>
      </tr>
    )
  })

  return(
    <>
    <h1 className="title">Festival</h1>
    <table className="table">
      <tbody>
        <tr>
          <th>Start Date</th>
          <th></th>
          <th>End Date</th>
        </tr>
        {festivalNodes}
      </tbody>
    </table>
    <Link style={{ textDecoration: 'none' }} className="button" to="/festivals/new">Create</Link>
    {/* <Calender /> */}
    </>
  )
}

export default FestivalList;