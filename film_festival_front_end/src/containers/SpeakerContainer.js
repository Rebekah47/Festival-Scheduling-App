import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import SpeakerList from '../components/speakers/SpeakerList.js';
import FestivalDetail from '../components/festivals/FestivalDetail';
import SpeakerDetail from '../components/speakers/SpeakerDetail';


const SpeakerContainer = () => {

    const [festivals, setFestivals] = useState([]);
    const [speakers, setSpeakers] = useState([]);
    const [events, setEvents] = useState([]);


    const requestAll = function(){
        const request = new Request();
        const festivalPromise = request.get('/api/festivals')
        const speakerPromise = request.get('/api/speakers')
        const eventPromise = request.get('/api/events')
        

        Promise.all([festivalPromise, speakerPromise, eventPromise])
        .then((data) => {
            setFestivals(data[0])
            setSpeakers(data[1])
            setEvents(data[2])
        })

    }

    console.log(speakers);

    useEffect(() => {
        requestAll()
    }, [])

    const findSpeakerById = function(id){
        return speakers.find((speaker) => {
            return speaker.id === parseInt(id);
        })
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/speakers" render={() => {
                    return <SpeakerList speakers={speakers} festivals={festivals} events={events}/>
                }} />
                <Route exact path="speakers/:id" render={(props) => {
                    const id = props.match.params.id;
                    const speaker = findSpeakerById(id);
                    return <SpeakerDetail speaker={speaker}/>
                }} />
            </Switch>
        </Router>
    )

}

export default SpeakerContainer;