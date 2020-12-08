import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import SpeakerList from '../components/speakers/SpeakerList.js';
import SpeakerDetail from '../components/speakers/SpeakerDetail';
import SpeakerForm from '../components/speakers/SpeakerForm';


const SpeakerContainer = () => {

    const [speakers, setSpeakers] = useState([]);


    const requestAll = function(){
        const request = new Request();
        const speakerPromise = request.get('/api/speakers')

        Promise.all([speakerPromise])
        .then((data) => {
            setSpeakers(data[0])
        })

    }


    useEffect(() => {
        requestAll()
    }, [])

    const findSpeakerById = function(id){
        return speakers.find((speaker) => {
            return speaker.id === parseInt(id);
        })
    }

    const handleUpdate = function(speaker){
      const request = new Request();
      request.patch("/api/speakers/" + speaker.id, speaker)
      .then(() => window.location='/speakers');
    }

    const handlePost = function(speaker){
      const request = new Request();
      request.post("/api/speakers", speaker)
      .then(() => window.location='/speakers');
    }

    return (
        <Router>
            <Switch>

                <Route exact path="/speakers/new" render={() => {
                    return <SpeakerForm onCreate={handlePost} />
                }} />

                <Route exact path="/speakers/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const speaker = findSpeakerById(id);
                    return <SpeakerForm speaker={speaker} onUpdate={handleUpdate}/>
                }} />

                <Route exact path="/speakers" render={() => {
                    return <SpeakerList speakers={speakers}/>
                }} />

                <Route exact path="/speakers/:id" render={(props) => {
                    const id = props.match.params.id;
                    const speaker = findSpeakerById(id);
                    return <SpeakerDetail speaker={speaker}/>
                }} />

            </Switch>
        </Router>
    )

}

export default SpeakerContainer;