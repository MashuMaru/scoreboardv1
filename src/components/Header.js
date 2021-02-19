import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
    return (
      <header>
        <Stats players={props.players} />
        <h1>{ props.title }</h1>
        <Stopwatch />
        {/* <span className="stats">Players: {props.players} </span>  */}
      </header>
    );
  }

export default Header;



