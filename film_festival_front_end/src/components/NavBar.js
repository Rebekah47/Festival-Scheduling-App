import React from 'react';

const NavBar = (props) => {
<<<<<<< HEAD
    return (
      <header>
          <li>I am a link</li>
      </header>
    )
  }
=======
    return(
        <header className="navBar">
            <ul>
                <li className="navLink">
                    <a href="/">Home</a>
                </li>
                <li className="navLink">
                    <a href="/festivals">Festivals</a>
                </li>
            </ul>
        </header>
    )
}
>>>>>>> d9806a7... created front end app, can call festivals

export default NavBar;