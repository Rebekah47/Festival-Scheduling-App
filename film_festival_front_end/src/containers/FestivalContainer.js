import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import FestivalList from '../components/festivals/FestivalList.js'
import FestivalDetail from '../components/festivals/FestivalDetail.js'
import FestivalForm from '../components/festivals/FestivalForm.js'
import PageNotFound from '../components/PageNotFound.js'



const FestivalContainer = () => {

    const [festivals, setFestivals] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const festivalPromise = request.get('/api/festivals')
    
        Promise.all([festivalPromise])
        .then((data) => {
            setFestivals(data[0])
        })

    }

    useEffect(() => {
        requestAll()
    }, [])

    const findFestivalById = function(id){
        return festivals.find((festival) => {
            return festival.id === parseInt(id);
        })
    }

    const handlePost = function(festival, capacity){
        const request = new Request();
        request.post("/api/festivals/" + capacity, festival)
        .then(() => window.location='/festivals')
    }

    const handlePatch = function(festival, room){
        const request = new Request();
        Promise.all([request.patch("/api/festivals/" + festival.id, festival), request.patch("/api/rooms/" + room.id, room)])
        .then(() => window.location='/festivals')
    }

    return (
        <Router>
            <Switch>

                <Route exact path="/festivals/new" render={() => {
                    return <FestivalForm onCreate={handlePost}/>
                }}/>

                <Route exact path="/festivals/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const festival = findFestivalById(id);
                    return <FestivalForm festival={festival} onUpdate={handlePatch}/>
                }}/>

                <Route exact path="/festivals/:id" render={(props) => {
                    const id = props.match.params.id;
                    const festival = findFestivalById(id);
                    return <FestivalDetail festival={festival} />
                }} />

                <Route exact path="/festivals" render={() => {
                    return <FestivalList festivals={festivals}/>
                }} />

                <Route component={PageNotFound}/>

            </Switch>
        </Router>
    )
}

export default FestivalContainer;