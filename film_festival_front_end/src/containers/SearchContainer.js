import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchCss.css';
const SearchContainer = ({objects}) => {
    console.log(objects)
    const [stateSearch, setStateSearch] = useState(
       {
           name: ""
        }
    )
    if(objects.length === 0){
        return "Error please return to the home page"
      }
    const handleChange = function(evt){
        let propertyName = evt.target.name;
            let copiedSearch = {...stateSearch}
            copiedSearch[propertyName] = evt.target.value.toLowerCase();
            setStateSearch(copiedSearch)
        }
        const results = objects.map((object, index) => {
            if(object.name.toLowerCase().includes(stateSearch.name)){
                return <li key={index}> {object.name} </li>
            } else {
                return
            }
        })
        return (
            <div className="container">
                <h2 className="heading">Search</h2>
                <label className="search-label" htmlFor="search-input">
                    <input
                        name="name"
                        className="search"
                        type="text"
                        defaultValue=""
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon icon={faSearch}/>
                </label>
                {results}
            </div>
            )
}
export default SearchContainer;