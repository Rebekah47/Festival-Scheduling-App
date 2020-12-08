import React from 'react';
import {Link} from 'react-router-dom';
import './Festival.css'
import SearchContainer from '../../containers/SearchContainer.js';
// import Calender from './Calender.js';

const FestivalList = ({festivals}) => {

  if(festivals.length === 0){
    return "Loading"
  }

  const festivalNodes = festivals.map((festival, index) => {
    return(
      <tr key={index}>
        <td className="festivalDate">{festival.startDate}</td>
        <td>
          <Link style={{ textDecoration: 'none' }} className="festivalButtonWrap" to={"/festivals/" + festival.id} >
            {festival.name}
          </Link>
        </td>
        <td className="festivalDate">{festival.endDate}</td>
      </tr>
    )
  })

  return(
    <>
    <h1 className="festivalTitle">Festival</h1>
    <table className="festivalTable">
      <tbody>
        <tr>
          <th>Start Date</th>
          <th></th>
          <th>End Date</th>
        </tr>
        {festivalNodes}
      </tbody>
    </table>
    <Link style={{ textDecoration: 'none' }} className="festivalActionButton" to="/festivals/new">Create</Link>
    <SearchContainer objects={festivals}/>
    </>
  )
}

export default FestivalList;