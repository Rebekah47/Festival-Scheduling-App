import React from 'react';
import MainContainer from './containers/MainContainer.js';
import NavBar from './components/NavBar.js'

import './App.css';

const App = () => {


  return (
    <>
      <header>
        <h1>Festival Tracker</h1>
      </header>
      <main>
        <NavBar/>
        <MainContainer />
      </main>
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </>
  );
  }
export default App;
