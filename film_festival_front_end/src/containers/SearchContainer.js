import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchCss.css';
const SearchContainer = ({objects}) => {
    const [stateSearch, setStateSearch] = useState(
       {
           name: "",
           id: ""
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
        if (stateSearch.name.length > 0){
            if(object.name.toLowerCase().includes(stateSearch.name)){
                const path = window.location.href + "/" + (object.id)
                return <li classname="results"><a href={path}>{object.name}</a></li>
            } else {
                return
                }
            }
        })


        return (
            <>
            <br></br>
                <label className="searchLabel">
                    <input
                        name="name"
                        className="searchInput"
                        type="text"
                        defaultValue=""
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon icon={faSearch}/>
                    {results}
                </label>
            </>
            )
}
export default SearchContainer;