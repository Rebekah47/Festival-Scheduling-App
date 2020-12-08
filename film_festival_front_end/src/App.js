import React from 'react';
import MainContainer from './containers/MainContainer.js';
import NavBar from './components/NavBar.js'
import Rss from './components/Rss.js';

import './App.css';

const App = () => {


  return (
    <>
      <header>
      <div className="tcontainer"><div class="ticker-wrap"><div className="ticker-move">
      <div className="ticker-item">CodeClan2020</div>
        <div className="ticker-item">Film Festival Tracker</div>
        <div className="ticker-item">CodeClan2020</div>
      </div></div></div>
      </header>
      <main>
        <NavBar/>
        <MainContainer />
        <Rss />
      </main>
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </>
  );
  }
export default App;
