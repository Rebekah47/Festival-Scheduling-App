import React from 'react';
import MainContainer from './containers/MainContainer.js';
import NavBar from './components/NavBar.js';
import Rss from './components/Rss.js';

import './App.css';

const App = () => {


  return (
    <>
      <header>
      <div class="tcontainer"><div class="ticker-wrap"><div class="ticker-move">
        <div class="ticker-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="ticker-item">Aliquam consequat varius consequat.</div>
        <div class="ticker-item">Fusce dapibus turpis vel nisi malesuada sollicitudin.</div>
        <div class="ticker-item">Pellentesque auctor molestie orci ut blandit.</div>
      </div></div></div>
      </header>
      <main>
        <NavBar/>
        <MainContainer />
        <Rss/>
      </main>
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </>
  );
  }
export default App;
